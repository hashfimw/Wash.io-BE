import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import prisma from "../../prisma";
import { appConfig } from "../../utils/config";
import { Role } from "../../../prisma/generated/client";

export const getSessionService = async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    console.log("🔹 Received token:", authHeader); // ✅ Debugging token

    if (!authHeader?.startsWith("Bearer ")) {
      res.status(401).send({ message: "Unauthorized: No token provided" });
      return;
    }

    const token = authHeader.split(" ")[1];
    const decoded = verify(token, appConfig.SecretKey) as { id: number; role: Role };

    if (!decoded?.id) {
      res.status(403).send({ message: "Forbidden: Invalid token payload" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id, isDeleted: false },
    });

    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }

    res.status(200).send(user);
  } catch (error) {
    console.error("🔴 Session Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
