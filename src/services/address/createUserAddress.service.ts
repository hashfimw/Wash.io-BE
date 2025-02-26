import { Request, Response } from "express";
import prisma from "../../prisma";

export const createUserAddressService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      customerId,
      addressLine,
      province,
      regency,
      district,
      village,
      latitude,
      longitude,
      isPrimary,
    } = req.body;

    if (isPrimary) {
      await prisma.address.updateMany({
        where: { customerId, isPrimary: true },
        data: { isPrimary: false },
      });
    }

    const address = await prisma.address.create({
      data: {
        customerId,
        addressLine,
        province,
        regency,
        district,
        village,
        latitude,
        longitude,
        isPrimary,
      },
    });
    res.status(201).json(address);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan dalam membuat alamat" });
  }
};
