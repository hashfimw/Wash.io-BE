// src/middleware/superAdminAuth.middleware.ts
import { Request, Response, NextFunction } from "express";
import { Role } from "@prisma/client";
import prisma from "../prisma";

export const isSuperAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Ambil user id dari token (asumsikan sudah di-decode di middleware auth sebelumnya)
    const userId = req.user?.id; // pastikan ada middleware auth yang menyediakan req.user

    if (!userId) {
      res.status(401).json({ message: "Unauthorized - Please login first" });
      return;
    }

    // Check user role
    const user = await prisma.user.findUnique({
      where: { id: userId },
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
