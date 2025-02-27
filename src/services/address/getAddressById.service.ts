import { Request, Response } from "express";
import prisma from "../../prisma";

export const getAddressByIdService = async (
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

    const address = await prisma.address.findFirst({
      where: {
        id: Number(addressId),
        customerId: userId,
        isDeleted: false,
      },
    });

    if (!address) {
      res.status(404).json({ message: "Alamat tidak ditemukan atau bukan milik Anda" });
      return;
    }

    res.status(200).json(address);
  } catch (error) {
    console.error("Error mengambil alamat:", error);
    res.status(500).json({ message: "Terjadi kesalahan dalam mengambil alamat" });
  }
};
