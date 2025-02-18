// src/services/order.service.ts
import { Request, Response } from "express";
import prisma from "../../prisma";
import { Role } from "@prisma/client";

// Untuk Super Admin
export const getAllOrdersService = async (req: Request, res: Response) => {
  const { outletId } = req.query;

  const whereClause = {
    isDeleted: false,
    ...(outletId ? { outletId: Number(outletId) } : {}),
  };

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
      createdAt: "desc",
    },
  });

  return {
    message: "Orders fetched successfully",
    data: orders,
  };
};

// Untuk Outlet Admin
export const getOutletOrdersService = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
    include: {
      Employee: true,
    },
  });

  const orders = await prisma.order.findMany({
    where: {
      outletId: user?.Employee?.outletId,
      isDeleted: false,
    },
    include: {
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
      createdAt: "desc",
    },
  });

  return {
    message: "Orders fetched successfully",
    data: orders,
  };
};

export const trackOrderService = async (req: Request, res: Response) => {
  const { orderId } = req.params;

  // sementara dikomen dlu karena di frontend belum bisa login
  // const user = await prisma.user.findUnique({
  //   where: { id: Number(req.user?.id) },
  //   include: {
  //     Employee: true,
  //   },
  // });

  // Query order dengan kondisi berbeda berdasarkan role
  const order = await prisma.order.findFirst({
    where: {
      id: Number(orderId),
      // Jika Outlet Admin, tambahkan filter outletId
      // ...(user?.role === Role.OUTLET_ADMIN
      //   ? {
      //       outletId: user?.Employee?.outletId,
      //     }
      //   : {}),
      isDeleted: false,
    },
    include: {
      outlet: true,
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
  });

  if (!order) {
    throw new Error("Order not found or unauthorized to access this order");
  }

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
  ].sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

  return {
    message: "Order tracking fetched successfully",
    data: {
      order,
      timeline,
    },
  };
};
