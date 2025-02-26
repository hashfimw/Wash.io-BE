// src/middleware/superAdminAuth.middleware.ts
import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";
import { Role } from "../../prisma/generated/client";

export const isSuperAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Ambil user id dari token
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized - Please login first" });
      return;
    }

    // Check user role - Convert userId to number
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) }, // Convert to number
    });

    if (!user || user.role !== Role.SUPER_ADMIN) {
      res.status(403).json({
        message: "Access denied - Super Admin only",
      });
      return;
    }

    next();
  } catch (error) {
    console.error("Super admin auth error:", error);
    res.status(500).json({ message: "Authorization error" });
  }
};
