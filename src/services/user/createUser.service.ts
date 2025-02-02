import { Request, Response } from "express";
import prisma from "../../prisma";

export const createUserservice = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const newUser = await prisma.user.create({
      data: { fullName, email, password },
    });

    res.status(201).send({ message: "User created ! ✅", user: newUser });
  } catch (error) {
    throw error;
  }
};
