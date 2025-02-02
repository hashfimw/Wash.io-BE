import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import prisma from "../../prisma";
import { genSalt, hash } from "bcrypt";
import { appConfig } from "../../utils/config";

export const resetPasswrodService = async (req: Request, res: Response) => {
  try {
    const { token, newPassword, confirmPassword } = req.body;

    console.log("Request body: ", req.body);

    if (!token) {
      res.status(400).send({ message: "Token is required !" });
      return;
    }

    if (newPassword !== confirmPassword) {
      res.status(400).send({ message: "Password do not match !" });
      return;
    }

    let decoded: any;
    try {
      decoded = verify(token, appConfig.SecretKey);
    } catch (error) {
      console.error("Token verification failed:", error);
      res.status(400).send({ message: "Invalid or expired token!" });
      return;
    }

    console.log("Token decoded: ", decoded);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      res.status(404).send({ message: "User not found!" });
      return;
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(newPassword, salt);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    res.status(200).send({ message: "Password has been reset successfully ! ✅" });
  } catch (error) {
    throw error;
  }
};
