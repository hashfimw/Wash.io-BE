import { Request, Response } from "express";
import prisma from "../../prisma";

export const createPickupOrderService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    const { addressId } = req.body;

    console.log("User ID:", userId);
    console.log("Address ID:", addressId);

    // Cek apakah alamat milik user dan belum dihapus
    const address = await prisma.address.findUnique({
      where: { id: addressId },
    });

    if (!address || address.customerId !== userId || address.isDeleted) {
      res
        .status(404)
        .json({ message: "Alamat tidak ditemukan atau bukan milik Anda." });
      return;
    }

    // Cari outlet terdekat berdasarkan koordinat latitude & longitude
    const nearestOutlet = await prisma.outlet.findFirst({
      where: { isDeleted: false },
      orderBy: {
        outletAddress: {
          latitude: "asc", // Bisa diubah dengan fungsi jarak jika perlu
        },
      },
    });

    if (!nearestOutlet) {
      res.status(404).json({ message: "Tidak ada outlet yang tersedia." });
      return;
    }

    const order = await prisma.order.create({
      data: {
        customerAddressId: addressId,
        outletId: nearestOutlet.id,
        orderStatus: "WAITING_FOR_PICKUP_DRIVER",
      },
    });

    res.status(201).json({ message: "Pickup order berhasil dibuat.", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
};
