import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import prisma from "../../prisma";
import { appConfig } from "../../utils/config";
import { Role } from "../../../prisma/generated/client";

export const getSessionService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      res.status(401).send({ message: "Unauthorized: No token provided" });
      return;
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      res.status(401).send({ message: "Unauthorized: Token missing" });
      return;
    }

    // Verify token
    let decoded;
    try {
      decoded = verify(token, appConfig.SecretKey) as { id: number; role: Role };
    } catch (tokenError) {
      res.status(403).send({ message: "Forbidden: Invalid token" });
      return;
    }

    if (!decoded?.role) {
      res.status(403).send({ message: "Forbidden: Invalid token payload" });
      return;
    }

    // Fetch user session from database
    const user = await prisma.user.findUnique({
      where: { 
        id: decoded.id,
        isDeleted: false 
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        avatar: true,
        role: true,
        isVerified: true,
        Employee: {
          select: {
            id: true,
            outletId: true
          }
        },
      },
    });

    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }

    // Create response data
    const responseData = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      avatar: user.avatar,
      role: user.role,
      isVerified: user.isVerified,
      employeeId: user.Employee?.id ?? null,
      outletId: user.Employee?.outletId ?? null,
    };

    res.status(200).send(responseData);
  } catch (error) {
    throw error;
  }
};