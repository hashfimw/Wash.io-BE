import { Request, Response } from "express";
import prisma from "../../prisma";

export const updateUserAddressService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    const { addressId } = req.params;
    const { isPrimary, ...updateData } = req.body; 

    if (!userId) {
      res.status(401).json({ message: "Unauthorized: Please login first" });
      return;
    }

    const existingAddress = await prisma.address.findFirst({
      where: {
        id: parseInt(addressId),
        customerId: userId, 
        isDeleted: false, 
      },
    });

    if (!existingAddress) {
      res.status(404).json({ message: "Alamat tidak ditemukan atau bukan milik Anda" });
      return;
    }

    // Jika ingin menjadikan alamat ini sebagai primary, set alamat lain menjadi non-primary
    if (isPrimary) {
      await prisma.address.updateMany({
        where: { customerId: userId, isPrimary: true },
        data: { isPrimary: false },
      });
    }

    // Update alamat
    const updatedAddress = await prisma.address.update({
      where: { id: existingAddress.id },
      data: { ...updateData, isPrimary },
    });

    res.status(200).json(updatedAddress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan dalam memperbarui alamat" });
  }
};
