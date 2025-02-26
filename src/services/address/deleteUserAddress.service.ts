import { Request, Response } from "express";
import prisma from "../../prisma";

export const deleteUserAddressService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    const { addressId } = req.params;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized: Please login first" });
      return;
    }

    // Cari alamat berdasarkan ID dan pastikan alamat milik user yang login
    const address = await prisma.address.findFirst({
      where: {
        id: parseInt(addressId),
        customerId: userId, // Pastikan alamat ini milik user yang login
        isDeleted: false, // Pastikan alamat belum dihapus
      },
    });

    if (!address) {
      res.status(404).json({ message: "Alamat tidak ditemukan atau bukan milik Anda" });
      return;
    }

    // Soft delete alamat
    await prisma.address.update({
      where: { id: address.id },
      data: { isDeleted: true, deletedAt: new Date() },
    });

    res.status(200).json({ message: "Alamat berhasil dihapus" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan dalam menghapus alamat" });
  }
};
