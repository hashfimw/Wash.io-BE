// src/middleware/multiRoleAuth.middleware.ts
import { Request, Response, NextFunction } from "express";
import { Role } from "../../../prisma/generated/client";
import prisma from "../../prisma";

export const AdminAuth = (allowedRoles: Role[]) => {
  return async (
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

      // Check user role
      const user = await prisma.user.findUnique({
        where: { id: Number(userId) },
        include: {
          Employee: true,
        },
      });

      // Cek apakah role user ada di daftar allowed roles
      if (!user || !allowedRoles.includes(user.role)) {
        res.status(403).json({
          message: "Access denied - Unauthorized role",
        });
        return;
      }

      // Tambahan logika untuk OUTLET_ADMIN
      if (user.role === Role.OUTLET_ADMIN) {
        if (!user.Employee?.outletId) {
          res.status(403).json({
            message: "Outlet Admin not assigned to any outlet",
          });
          return;
        }
        req.outletId = user.Employee.outletId;
      }

      next();
    } catch (error) {
      console.error("Multi-role auth error:", error);
      res.status(500).json({ message: "Authorization error" });
    }
  };
};
