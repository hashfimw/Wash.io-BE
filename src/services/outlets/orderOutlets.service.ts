// src/services/order.service.ts
import { Request, Response } from "express";
import prisma from "../../prisma";
import { OrderStatus, Prisma, Role, TransportType } from "../../../prisma/generated/client";

export const getAllOrdersService = async (req: Request, res: Response) => {
  // Cek role pengguna
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
    include: { Employee: true },
  });

  const {
    outletId,
    page = 1,
    limit = 20,
    sortOrder = "desc",
    orderStatus,
    search,
    startDate,
    endDate,
  } = req.query;

  // Base where clause
  const whereClause: Prisma.OrderWhereInput = {
    isDeleted: false,
  };

  // Logika filter berbeda berdasarkan role
  if (user?.role === Role.SUPER_ADMIN) {
    if (outletId) {
      whereClause.outletId = Number(outletId);
    }
  } else if (user?.role === Role.OUTLET_ADMIN) {
    if (!user.Employee?.outletId) {
      throw new Error("Outlet not found for this user");
    }
    whereClause.outletId = user.Employee.outletId;
  } else {
    throw new Error("Unauthorized to view orders");
  }

  // Filter tambahan
  if (orderStatus && orderStatus !== "all status") {
    whereClause.orderStatus = orderStatus as OrderStatus;
  }

  // Add date range filter
  if (startDate && endDate) {
    whereClause.createdAt = {
      gte: new Date(startDate as string),
      lte: new Date(endDate as string),
    };
  }

  // Query dengan pagination
  const orders = await prisma.order.findMany({
    where: whereClause,
    include: {
      outlet: true,
      customerAddress: true,
      OrderItem: true,
      LaundryJob: {
        include: {
          worker: {
            include: {
              user: true,
            },
          },
        },
      },
      TransportJob: {
        include: {
          driver: {
            include: {
              user: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: sortOrder as "asc" | "desc",
    },
    skip: (+page - 1) * +limit,
    take: +limit,
  });

  // Hitung total orders untuk pagination dengan filter yang sama
  const totalOrders = await prisma.order.count({
    where: whereClause,
  });

  const totalPages = Math.ceil(totalOrders / +limit);

  return {
    message: "Orders fetched successfully",
    data: orders,
    meta: {
      page: +page,
      limit: +limit,
      total: totalPages,
      totalRecords: totalOrders,
    },
  };
};

export const trackOrderService = async (req: Request, res: Response) => {
  // Cek role pengguna
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
    include: { Employee: true },
  });

  const { orderId } = req.params;

  // Logika berbeda berdasarkan role
  const whereClause: Prisma.OrderWhereInput = {
    id: Number(orderId),
    isDeleted: false,
  };

  if (user?.role === Role.OUTLET_ADMIN) {
    // Outlet admin hanya bisa track order di outlet miliknya
    if (!user.Employee?.outletId) {
      throw new Error("Outlet not found for this user");
    }
    whereClause.outletId = user.Employee.outletId;
  }

  const order = await prisma.order.findFirst({
    where: whereClause,
    include: {
      outlet: true,
      OrderItem: true,
      Payment: true,
      customerAddress: true,
      LaundryJob: {
        include: {
          worker: {
            include: {
              user: true,
            },
          },
        },
      },
      TransportJob: {
        include: {
          driver: {
            include: {
              user: true,
            },
          },
        },
      },
    },
  });

  if (!order) {
    throw new Error("Order not found or unauthorized to access this order");
  }

  // Map LaundryJob dan TransportJob ke timeline
  const timeline = [
    ...order.LaundryJob.map((job) => ({
      stage: job.station,
      worker: job.worker?.user.fullName,
      status: job.isCompleted ? "Completed" : "In Progress",
      timestamp: job.createdAt,
    })),
    ...order.TransportJob.map((job) => ({
      stage: job.transportType,
      driver: job.driver?.user.fullName,
      status: job.isCompleted ? "Completed" : "In Progress",
      timestamp: job.createdAt,
    })),
  ];

  // Dapatkan TransportJob terakhir untuk driver info
  const lastTransportJob = order.TransportJob[order.TransportJob.length - 1];
  const lastDriverName = lastTransportJob?.driver?.user.fullName;

  // Add additional stages based on order status
  // Membuat objek sebagai TransportType untuk menyesuaikan dengan tipe yang diharapkan
  if (order.orderStatus === OrderStatus.RECEIVED_BY_CUSTOMER || order.orderStatus === OrderStatus.COMPLETED) {
    timeline.push({
      stage: "RECEIVED_BY_CUSTOMER" as unknown as TransportType, // Cast ke TransportType agar sesuai dengan tipe
      driver: lastDriverName, // Menggunakan driver dari last transport job
      status: "Completed",
      timestamp: order.updatedAt,
    });
  }

  if (order.orderStatus === OrderStatus.COMPLETED) {
    timeline.push({
      stage: "COMPLETED" as unknown as TransportType, // Cast ke TransportType agar sesuai dengan tipe
      driver: lastDriverName, // Menggunakan driver dari last transport job
      status: "Completed",
      timestamp: order.updatedAt,
    });
  }

  // Sort the timeline by timestamp
  const sortedTimeline = timeline.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

  // Format payment information
  const paymentInfo = order.Payment
    ? {
        isPaid: order.isPaid,
        paymentStatus: order.Payment.paymentStatus,
        paymentMethod: order.Payment.paymentMethod,
        totalPrice: order.Payment.totalPrice,
        snapRedirectURL: order.Payment.snapRedirectURL,
      }
    : {
        isPaid: order.isPaid,
        paymentStatus: null,
        paymentMethod: null,
        totalPrice: null,
        snapRedirectURL: null,
      };

  return {
    message: "Order tracking fetched successfully",
    data: {
      order,
      timeline: sortedTimeline,
      payment: paymentInfo,
    },
  };
};
