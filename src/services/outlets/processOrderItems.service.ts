// src/services/createOrder.service.ts
import { Request, Response } from "express";
import prisma from "../../prisma";
import { WorkerStation, Role,  PrismaClient } from "../../../prisma/generated/client";
import { getIdleEmployees } from "../helpers/finder.service";
import { createMultipleNotificationDataService } from "../notification/notification.service";

export const processOrderService = async (req: Request, res: Response) => {
  // Cek role pengguna
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
    include: { Employee: true },
  });

  const { orderId, laundryWeight, orderItems } = req.body;

  if (!orderId || !laundryWeight || !orderItems || !Array.isArray(orderItems)) {
    throw new Error("Invalid input data");
  }

  // Hitung total harga berdasarkan berat
  const pricePerKilo = 8000;
  const laundryPrice = laundryWeight * pricePerKilo;

  // Helper function untuk membuat template items
  const createOrderTemplateItems = async (
    items: any[],
    prismaInstance: Omit<
      PrismaClient,
      "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
    >
  ) => {
    for (const item of items) {
      // Cek apakah template sudah ada
      const existingTemplate = await prismaInstance.orderItem.findFirst({
        where: {
          orderItemName: item.orderItemName,
          orderId: null,
          isDeleted: false,
        },
      });

      // Jika belum ada, buat template baru
      if (!existingTemplate) {
        await prismaInstance.orderItem.create({
          data: {
            orderItemName: item.orderItemName,
            // qty dan orderId tidak diisi untuk template
          },
        });
      }
    }
  };

  // Logika berbeda berdasarkan role
  if (user?.role === Role.SUPER_ADMIN) {
    // Super admin bisa proses order dari semua outlet
    const result = await prisma.$transaction(async (prisma) => {
      // Buat template items terlebih dahulu
      await createOrderTemplateItems(orderItems, prisma);

      const updatedOrder = await prisma.order.update({
        where: { id: Number(orderId) },
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
        include: {customerAddress: true}
      });

      // Buat laundry job
      const laundryJob = await prisma.laundryJob.create({
        data: {
          orderId: updatedOrder.id,
          station: WorkerStation.WASHING,
          workerId: null,
          isCompleted: false,
          isByPassRequested: false,
        },
      });

      const washerIds = await getIdleEmployees(updatedOrder.outletId, "WORKER", "WASHING");

      if (washerIds.length > 0) {
        await prisma.notification.createMany({
          data: createMultipleNotificationDataService(
            washerIds,
            "Washing Job alert",
            " A new washing job is available!",
            `/employee-dashboard/worker/${laundryJob.id}`
          ),
        });
      }

      await prisma.notification.create({
        data: {
          userId: updatedOrder.customerAddress.customerId!,
          title: "Order Payment Alert",
          description: `Your order no #${updatedOrder.id} is now ready to be paid`,
          url: `/order/${updatedOrder.id}`,
        },
      });
    });

    return {
      message: "Pickup order processed successfully",
      data: result,
    };
  } else if (user?.role === Role.OUTLET_ADMIN) {
    // Outlet admin hanya bisa proses order di outlet miliknya
    const result = await prisma.$transaction(async (prisma) => {
      // Buat template items terlebih dahulu
      await createOrderTemplateItems(orderItems, prisma);

      const updatedOrder = await prisma.order.update({
        where: {
          id: Number(orderId),
          outletId: user.Employee?.outletId, // Pastikan order di outlet admin
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
  } else {
    throw new Error("Unauthorized to process order");
  }
};

export const createOrderItemService = async (req: Request, res: Response) => {
  // Cek role pengguna
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  // Baik super admin maupun outlet admin bisa membuat item
  if (
    !user ||
    (user.role !== Role.SUPER_ADMIN && user.role !== Role.OUTLET_ADMIN)
  ) {
    throw new Error("Unauthorized to create order item");
  }
  const { orderItemName } = req.body;

  // Cek apakah item dengan nama yang sama sudah ada
  const existingItem = await prisma.orderItem.findFirst({
    where: {
      orderItemName: orderItemName,
      orderId: null, // Template item
      isDeleted: false,
    },
  });

  if (existingItem) {
    throw new Error("Item with this name already exists");
  }

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

export const getOrderItemService = async (req: Request, res: Response) => {
  // Cek role pengguna
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  // Baik super admin maupun outlet admin bisa melihat item
  if (
    !user ||
    (user.role !== Role.SUPER_ADMIN && user.role !== Role.OUTLET_ADMIN)
  ) {
    throw new Error("Unauthorized to view order items");
  }

  // Selalu gunakan findMany untuk mendapatkan data lengkap dengan ID
  const items = await prisma.orderItem.findMany({
    where: {
      orderId: null,
      isDeleted: false,
    },
    orderBy: {
      orderItemName: "asc",
    },
  });

  // Jika tidak ada items template (dengan orderId null),
  // cari item yang memiliki orderItemName unik sebagai template
  if (items.length === 0) {
    // Dapatkan distinct item names beserta id dan timestamp
    const distinctItemNames = await prisma.orderItem.findMany({
      where: {
        isDeleted: false,
      },
      distinct: ["orderItemName"],
      orderBy: {
        orderItemName: "asc",
      },
    });

    return {
      message: "Distinct item templates fetched successfully",
      data: distinctItemNames,
    };
  }

  return {
    message: "Item templates fetched successfully",
    data: items,
  };
};

export const updateOrderItemService = async (req: Request, res: Response) => {
  // Cek role pengguna
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  // Hanya super admin yang bisa update
  if (user?.role !== Role.SUPER_ADMIN) {
    throw new Error("Only Super Admin can update order items");
  }

  const { id } = req.params;
  const { orderItemName } = req.body;

  // Perbaikan: pastikan id dikonversi ke number
  const item = await prisma.orderItem.update({
    where: {
      id: Number(id), // Pastikan id dikonversi ke number
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

export const deleteOrderItemService = async (req: Request, res: Response) => {
  // Cek role pengguna
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  // Hanya super admin yang bisa delete
  if (user?.role !== Role.SUPER_ADMIN) {
    throw new Error("Only Super Admin can delete order items");
  }

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
