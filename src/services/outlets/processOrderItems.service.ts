// src/services/createOrder.service.ts
import { Request, Response } from "express";
import prisma from "../../prisma";
import { WorkerStation } from "@prisma/client";

export const processOrderService = async (req: Request, res: Response) => {
  const { orderId, laundryWeight, orderItems } = req.body;

  if (!orderId || !laundryWeight || !orderItems || !Array.isArray(orderItems)) {
    throw new Error("Invalid input data");
  }
  // Hitung total harga berdasarkan berat
  const pricePerKilo = 8000;
  const laundryPrice = laundryWeight * pricePerKilo;
  // Gunakan transaction untuk memastikan semua operasi berhasil
  // Update order yang sudah ada dengan berat dan harga
  const result = await prisma.$transaction(async (prisma) => {
    const updatedOrder = await prisma.order.update({
      where: {
        id: Number(orderId),
        outletId: req.outletId,
      },
      data: {
        laundryWeight,
        laundryPrice,
        orderStatus: "READY_FOR_WASHING",
        OrderItem: {
          createMany: {
            data: orderItems.map((item) => ({
              orderItemName: item.orderItemName,
              qty: item.qty,
            })),
          },
        },
      },
    });

    // Buat laundry job
    await prisma.laundryJob.create({
      data: {
        orderId: updatedOrder.id,
        station: WorkerStation.WASHING,
        workerId: null,
        isCompleted: false,
        isByPassRequested: false,
      },
    });
    return prisma.order.findUnique({
      where: { id: updatedOrder.id },
      include: {
        OrderItem: true,
        LaundryJob: true,
        outlet: true,
        customerAddress: true,
      },
    });
  });

  return {
    message: "Pickup order processed successfully",
    data: result,
  };
};

// Create template item
export const createOrderItemService = async (req: Request, res: Response) => {
  const { orderItemName } = req.body;

  const item = await prisma.orderItem.create({
    data: {
      orderItemName,
      // qty dan orderId tidak diisi
    },
  });

  return {
    message: "Item template created successfully",
    data: item,
  };
};

// Get all template items
export const getOrderItemService = async () => {
  const items = await prisma.orderItem.findMany({
    where: {
      orderId: null,
      isDeleted: false,
    },
    orderBy: {
      orderItemName: "asc",
    },
  });

  return {
    message: "Item templates fetched successfully",
    data: items,
  };
};

// Update template item
export const updateOrderItemService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { orderItemName } = req.body;

  const item = await prisma.orderItem.update({
    where: {
      id: Number(id),
    },
    data: {
      orderItemName,
    },
  });

  return {
    message: "Item template updated successfully",
    data: item,
  };
};

// Soft delete template item
export const deleteOrderItemService = async (req: Request, res: Response) => {
  const { id } = req.params;

  await prisma.orderItem.update({
    where: {
      id: Number(id),
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });

  return {
    message: "Item template deleted successfully",
  };
};
