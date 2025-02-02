import { Request, Response } from "express";
import prisma from "../../prisma";

export const getUserIdService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Invalid ID" });
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });

    if (!user) {
      res.status(404).json({ message: "User not found !" });
      return;
    }

    res.status(200).send({ user });
  } catch (error) {
    throw error;
  }
};
