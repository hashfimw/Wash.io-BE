// src/services/order.service.ts
import { Request, Response } from "express";
import prisma from "../../prisma";
import { Role } from "@prisma/client";

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

export const getOutletOrdersService = async (req: Request, res: Response) => {
  if (!req.user) {
    throw new Error("Unauthorized");
  }

  // Karena id dari UserPayload adalah string, kita perlu cek user dan rolenya dulu
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user.id) },
    include: {
      Employee: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // Get orders berdasarkan role
  const orders = await prisma.order.findMany({
    where: {
      ...(user.role === Role.OUTLET_ADMIN
        ? {
            outletId: user.Employee?.outletId,
          }
        : {}),
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

  if (!req.user) {
    throw new Error("Unauthorized");
  }

  // Ambil data user lengkap dari database
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user.id) },
    include: {
      Employee: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // Query order dengan kondisi berbeda berdasarkan role
  const order = await prisma.order.findFirst({
    where: {
      id: Number(orderId),
      ...(user.role === Role.OUTLET_ADMIN
        ? {
            outletId: user.Employee?.outletId,
          }
        : {}),
      isDeleted: false,
    },
    include: {
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
    throw new Error("Order not found");
  }

  // Track timeline berdasarkan jobs
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
