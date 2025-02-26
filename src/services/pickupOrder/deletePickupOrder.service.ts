import { Request, Response } from "express";
import prisma from "../../prisma";
import { OrderStatus, Role } from "../../../prisma/generated/client";

export const deletePickupOrderService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    const userRole = req.user?.role;
    const { id } = req.params;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized: Please login first" });
      return;
    }

    // Hanya customer yang boleh membatalkan order
    if (userRole !== Role.CUSTOMER) {
      res
        .status(403)
        .json({ message: "Hanya pelanggan yang dapat membatalkan pesanan." });
      return;
    }

    // Cari order berdasarkan ID dan pastikan belum dihapus
    const order = await prisma.order.findUnique({
      where: { id: Number(id), isDeleted: false },
    });

    if (!order) {
      res
        .status(404)
        .json({ message: "Order tidak ditemukan atau sudah dihapus." });
      return;
    }

    // Hanya bisa dibatalkan jika masih dalam tahap pickup
    if (order.orderStatus !== OrderStatus.WAITING_FOR_PICKUP_DRIVER) {
      res
        .status(403)
        .json({ message: "Order tidak dapat dibatalkan pada tahap ini." });
      return;
    }

    // Update status menjadi CANCELLED_BY_CUSTOMER
    await prisma.order.update({
      where: { id: Number(id) },
      data: {
        orderStatus: OrderStatus.CANCELLED_BY_CUSTOMER,
        isDeleted: true,
        deletedAt: new Date(),
      },
    });

    res.status(200).json({ message: "Pickup order berhasil dibatalkan." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
};
