// src/middleware/outletAdminAuth.middleware.ts
import { Request, Response, NextFunction } from "express";
import { Role } from "@prisma/client";
import prisma from "../../prisma";

export const isOutletAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized - Please login first" });
      return;
    }

    // Check user role dan include Employee untuk dapat outletId
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      include: {
        Employee: true,
      },
    });

    if (!user || user.role !== Role.OUTLET_ADMIN) {
      res.status(403).json({
        message: "Access denied - Outlet Admin only",
      });
      return;
    }

    if (!user.Employee?.outletId) {
      res.status(403).json({
        message: "Outlet Admin not assigned to any outlet",
      });
      return;
    }

    // Simpan outletId ke request untuk digunakan di service
    req.outletId = user.Employee.outletId;

    next();
  } catch (error) {
    console.error("Outlet admin auth error:", error);
    res.status(500).json({ message: "Authorization error" });
  }
};
