import { Request, Response } from "express";
import prisma from "../../prisma";

export const deleteUserService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: Number(id) } });

    res.status(200).send({ message: "User deleted ! ✅" });
  } catch (error) {
    throw error;
  }
};
