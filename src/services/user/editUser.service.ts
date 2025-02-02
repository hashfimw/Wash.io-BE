import { Request, Response } from "express";
import prisma from "../../prisma";

export const editUserService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateUser = await prisma.user.update({
      data: req.body,
      where: { id: Number(id) },
    });

    res.status(200).send({ message: "User updated ! ✅" });
  } catch (error) {
    throw error;
  }
};
