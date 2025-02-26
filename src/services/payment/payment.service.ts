// src/services/payments/payment.service.ts
import { Request, Response } from "express";
import prisma from "../../prisma";
import midtransClient from "midtrans-client";

// Initialize Midtrans client
const snap = new midtransClient.Snap({
  isProduction: process.env.NODE_ENV === "production",
  serverKey: process.env.MIDTRANS_SERVER_KEY as string,
  clientKey: process.env.MIDTRANS_CLIENT_KEY as string,
});

export const createPaymentService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    const { orderId } = req.body;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: "Unauthorized: Please login first",
      });
      return;
    }

    // Find the order and validate it belongs to the user
    const order = await prisma.order.findFirst({
      where: {
        id: Number(orderId),
        isDeleted: false,
        customerAddress: {
          customerId: userId,
        },
      },
      include: {
        customerAddress: {
          include: {
            customer: true,
          },
        },
        OrderItem: {
          where: {
            isDeleted: false,
          },
        },
      },
    });

    if (!order) {
      res.status(404).json({
        success: false,
        message: "Order tidak ditemukan atau tidak memiliki akses.",
      });
      return;
    }

    // Check if order is already paid
    if (order.isPaid) {
      res.status(400).json({
        success: false,
        message: "Order ini sudah dibayar.",
      });
      return;
    }

    // Check if order has laundry price (means admin has processed it)
    if (!order.laundryPrice) {
      res.status(400).json({
        success: false,
        message: "Order belum diproses oleh admin outlet.",
      });
      return;
    }

    // Calculate total price
    const totalPrice = order.laundryPrice;

    // Check if payment already exists
    const existingPayment = await prisma.payment.findUnique({
      where: {
        orderId: order.id,
      },
    });

    // If payment exists but not successful, we can reuse or update it
    // If it doesn't exist, create a new payment record
    let payment;
    
    // Create transaction payload for Midtrans
    const transactionDetails = {
      order_id: `ORDER-${order.id}-${Date.now()}`,
      gross_amount: totalPrice,
    };

    const customerDetails = {
      first_name: order.customerAddress.customer?.fullName || "Customer",
      email: order.customerAddress.customer?.email || "",
      phone: "", // Add phone if available in your schema
    };

    const items = order.OrderItem.map((item) => ({
        id: `ITEM-${item.id}`,
        price: item.qty ? item.qty * (order.laundryPrice! / order.OrderItem.reduce((acc, i) => acc + (i.qty || 1), 0)) : 0,
        quantity: item.qty || 1,
        name: item.orderItemName,
      }));

    console.log(items);
    console.log(transactionDetails);
    

    // Create Midtrans snap token
    const snapResponse = await snap.createTransaction({
      transaction_details: transactionDetails,
      customer_details: customerDetails,
      item_details: items,
    });

    // Get token and redirect URL
    const snapToken = snapResponse.token;
    const snapRedirectURL = snapResponse.redirect_url;

    // Create or update payment record
    if (existingPayment) {
      payment = await prisma.payment.update({
        where: {
          id: existingPayment.id,
        },
        data: {
          totalPrice,
          paymentStatus: "PENDING",
          snapToken,
          snapRedirectURL,
        },
      });
    } else {
      payment = await prisma.payment.create({
        data: {
          totalPrice,
          orderId: order.id,
          snapToken,
          snapRedirectURL,
        },
      });
    }

    res.status(200).json({
      success: true,
      data: {
        payment,
        snapToken,
        snapRedirectURL,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
};

export const handlePaymentNotificationService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const notification = req.body;

    // Verify notification from Midtrans
    const statusResponse = await snap.transaction.notification(notification);
    const orderId = statusResponse.order_id;
    const transactionStatus = statusResponse.transaction_status;
    const fraudStatus = statusResponse.fraud_status;

    // Extract the actual order ID from our format "ORDER-{id}-{timestamp}"
    const extractedOrderId = orderId.split("-")[1];

    if (!extractedOrderId) {
      res.status(400).json({
        success: false,
        message: "Invalid order ID format",
      });
      return;
    }

    // Get payment record
    const payment = await prisma.payment.findFirst({
      where: {
        orderId: Number(extractedOrderId),
      },
      include: {
        order: true,
      },
    });

    if (!payment) {
      res.status(404).json({
        success: false,
        message: "Payment record not found",
      });
      return;
    }

    let paymentStatus: "PENDING" | "SUCCEEDED" | "CANCELLED" | "EXPIRED" =
      "PENDING";

    // Handle different transaction statuses
    if (transactionStatus === "capture" || transactionStatus === "settlement") {
      if (fraudStatus === "challenge") {
        // Do nothing, still pending
      } else if (fraudStatus === "accept") {
        paymentStatus = "SUCCEEDED";
      }
    } else if (
      transactionStatus === "cancel" ||
      transactionStatus === "deny" ||
      transactionStatus === "failure"
    ) {
      paymentStatus = "CANCELLED";
    } else if (transactionStatus === "expire") {
      paymentStatus = "EXPIRED";
    } else if (transactionStatus === "pending") {
      paymentStatus = "PENDING";
    }

    // Update payment status
    await prisma.payment.update({
      where: {
        id: payment.id,
      },
      data: {
        paymentStatus,
        paymentMethod: statusResponse.payment_type,
      },
    });

    // If payment succeeded, mark order as paid and update order status
    if (paymentStatus === "SUCCEEDED") {
      await prisma.order.update({
        where: {
          id: payment.orderId,
        },
        data: {
          isPaid: true,
          orderStatus: "READY_FOR_DELIVERY",
        },
      });

      // Create notification for user
      await prisma.notification.create({
        data: {
          userId: payment.order.customerAddressId,
          title: "Pembayaran Berhasil",
          description: `Pembayaran untuk order #${payment.orderId} telah berhasil. Pesanan Anda akan segera dikirim.`,
          url: `/orders/${payment.orderId}`,
        },
      });

      // Create delivery transport job automatically
      await prisma.transportJob.create({
        data: {
          transportType: "DELIVERY",
          distance: 0, // You may calculate this based on coordinates
          orderId: payment.orderId,
          isCompleted: false,
        },
      });
    }

    res.status(200).json({
      success: true,
      message: "Notification processed successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
};

export const getPaymentStatusService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    const { orderId } = req.params;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: "Unauthorized: Please login first",
      });
      return;
    }

    const payment = await prisma.payment.findFirst({
      where: {
        orderId: Number(orderId),
        order: {
          customerAddress: {
            customerId: userId,
          },
        },
      },
    });

    if (!payment) {
      res.status(404).json({
        success: false,
        message: "Payment information not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: payment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
};
