// src/services/createOrder.service.ts
import { Request, Response } from "express";
import prisma from "../../prisma";
import { WorkerStation } from "@prisma/client";

export const processOrderService = async (req: Request, res: Response) => {
  // Validasi keberadaan user dari token
  if (!req.user) {
    throw new Error("Unauthorized");
  }

  // Dapatkan data outlet admin dan outletId
  const admin = await prisma.user.findUnique({
    where: { id: Number(req.user.id) },
    include: {
      Employee: true,
    },
  });

  // Validasi admin dan employee data
  if (!admin || !admin.Employee) {
    throw new Error("Employee data not found");
  }

  const outletId = admin.Employee.outletId;

  // Ambil data dari request body
  const { orderId, laundryWeight, orderItems } = req.body;

  // Validasi input
  if (!orderId || !laundryWeight || !orderItems || !Array.isArray(orderItems)) {
    throw new Error("Invalid input data");
  }

  // Hitung total harga berdasarkan berat
  const pricePerKilo = 8000;
  const laundryPrice = laundryWeight * pricePerKilo;

  // Gunakan transaction untuk memastikan semua operasi berhasil
  const result = await prisma.$transaction(async (prisma) => {
    // Update order yang sudah ada dengan berat dan harga
    const updatedOrder = await prisma.order.update({
      where: {
        id: Number(orderId),
        outletId, // Memastikan order milik outlet yang benar
      },
      data: {
        laundryWeight,
        laundryPrice,
        orderStatus: "READY_FOR_WASHING", // Update status karena sudah siap diproses
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

    // Definisikan urutan proses laundry dengan enum WorkerStation
    const laundryJobTypes = [
      { station: WorkerStation.WASHING, sequence: 1 },
      // { station: WorkerStation.IRONING, sequence: 2 },
      // { station: WorkerStation.PACKING, sequence: 3 },
    ];

    // Buat tiga laundry jobs sekaligus
    await Promise.all(
      laundryJobTypes.map((job) =>
        prisma.laundryJob.create({
          data: {
            orderId: updatedOrder.id,
            station: job.station,
            workerId: 0, // Worker akan diassign nanti
            isCompleted: false,
            isByPassRequested: false,
          },
        })
      )
    );

    // Return order dengan data lengkap termasuk semua relasi
    return prisma.order.findUnique({
      where: { id: updatedOrder.id },
      include: {
        OrderItem: true, // Detail item yang akan dilaundry
        LaundryJob: true, // Status jobs laundry
        outlet: true, // Info outlet
        customerAddress: true, // Info alamat customer
      },
    });
  });

  return {
    message: "Pickup order processed successfully",
    data: result,
  };
};

export const createLaundryItemService = async (req: Request, res: Response) => {
  if (!req.user) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { id: Number(req.user.id) },
    include: {
      Employee: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (!user.Employee) {
    throw new Error("Employee data not found");
  }

  if (user.role !== "OUTLET_ADMIN") {
    throw new Error("Only outlet admin can create laundry items");
  }

  const { orderItemName, qty } = req.body;

  // Create laundry item
  const item = await prisma.orderItem.create({
    data: {
      orderItemName,
      qty,
      order: {
        create: {
          outletId: user.Employee.outletId,
          customerAddressId: 0, // temporary value karena required
          laundryPrice: 0,
          orderStatus: "WAITING_FOR_PICKUP_DRIVER",
        },
      },
    },
    include: {
      order: {
        include: {
          outlet: true,
        },
      },
    },
  });

  return {
    message: "Laundry item created successfully",
    data: item,
  };
};

export const updateLaundryItemService = async (req: Request, res: Response) => {
  if (!req.user) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { id: Number(req.user.id) },
    include: {
      Employee: true,
    },
  });

  if (!user || !user.Employee || user.role !== "OUTLET_ADMIN") {
    throw new Error("Only outlet admin can update laundry items");
  }

  const { id } = req.params;
  const { orderItemName, qty } = req.body;

  const item = await prisma.orderItem.update({
    where: {
      id: Number(id),
      order: {
        outletId: user.Employee.outletId,
      },
    },
    data: {
      orderItemName,
      qty,
    },
  });

  return {
    message: "Laundry item updated successfully",
    data: item,
  };
};

export const deleteLaundryItemService = async (req: Request, res: Response) => {
  if (!req.user) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { id: Number(req.user.id) },
    include: {
      Employee: true,
    },
  });

  if (!user || !user.Employee || user.role !== "OUTLET_ADMIN") {
    throw new Error("Only outlet admin can delete laundry items");
  }

  const { id } = req.params;

  await prisma.orderItem.update({
    where: {
      id: Number(id),
      order: {
        outletId: user.Employee.outletId,
      },
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });

  return {
    message: "Laundry item deleted successfully",
  };
};

export const getLaundryItemsByOutletService = async (
  req: Request,
  res: Response
) => {
  if (!req.user) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { id: Number(req.user.id) },
    include: {
      Employee: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // Untuk Super Admin, bisa lihat semua atau filter by outlet
  if (user.role === "SUPER_ADMIN") {
    const { outletId } = req.query; // optional filter

    const items = await prisma.orderItem.findMany({
      where: {
        isDeleted: false,
        order: {
          outletId: outletId ? Number(outletId) : undefined,
        },
      },
      include: {
        order: {
          include: {
            outlet: true,
          },
        },
      },
    });

    return {
      message: "All outlet laundry items fetched successfully",
      data: items,
    };
  }

  // Untuk Outlet Admin, hanya bisa lihat items outletnya
  if (!user.Employee) {
    throw new Error("Employee data not found");
  }

  const items = await prisma.orderItem.findMany({
    where: {
      isDeleted: false,
      order: {
        outletId: user.Employee.outletId,
      },
    },
    include: {
      order: {
        include: {
          outlet: true,
        },
      },
    },
  });

  return {
    message: "Outlet laundry items fetched successfully",
    data: items,
  };
};
