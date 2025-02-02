// src/controllers/outletLaundryItem.controller.ts
import { Request, Response } from "express";
import prisma from "../prisma";

export const createLaundryItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { orderItemName, qty } = req.body;
    const { outletId } = req.params; // outlet ID dari outlet admin yang logged in

    const item = await prisma.orderItem.create({
      data: {
        orderItemName,
        qty,
        order: {
          connect: { outletId: Number(outletId) },
        },
      },
    });

    res.status(201).json({
      message: "Laundry item created successfully! ✅",
      data: item,
    });
  } catch (error) {
    console.error("Error creating laundry item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getLaundryItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { outletId } = req.params; // untuk outlet admin
    const { role } = req.user; // dari middleware auth

    // Jika Super Admin, tampilkan semua items dari semua outlet
    if (role === "SUPER_ADMIN") {
      const items = await prisma.orderItem.findMany({
        where: { isDeleted: false },
        include: {
          order: {
            include: {
              outlet: true,
            },
          },
        },
      });

      res.status(200).json(items);
      return;
    }

    // Jika Outlet Admin, tampilkan items dari outletnya saja
    const items = await prisma.orderItem.findMany({
      where: {
        isDeleted: false,
        order: {
          outletId: Number(outletId),
        },
      },
    });

    res.status(200).json(items);
  } catch (error) {
    console.error("Error getting laundry items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateLaundryItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { orderItemName, qty } = req.body;
    const { outletId } = req.params; // dari outlet admin yang logged in

    const item = await prisma.orderItem.update({
      where: {
        id: Number(id),
        order: {
          outletId: Number(outletId),
        },
      },
      data: {
        orderItemName,
        qty,
      },
    });

    res.status(200).json({
      message: "Laundry item updated successfully",
      data: item,
    });
  } catch (error) {
    console.error("Error updating laundry item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteLaundryItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { outletId } = req.params; // dari outlet admin yang logged in

    await prisma.orderItem.update({
      where: {
        id: Number(id),
        order: {
          outletId: Number(outletId),
        },
      },
      data: {
        isDeleted: true,
        deletedAt: new Date(),
      },
    });

    res.status(200).json({ message: "Laundry item deleted successfully" });
  } catch (error) {
    console.error("Error deleting laundry item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
