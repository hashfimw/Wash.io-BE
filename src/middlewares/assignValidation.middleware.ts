import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";
import { Role } from "../../prisma/generated/client";

export const validateAssignEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id, outletId } = req.body; // id dari tabel Employee

    // Validasi input
    if (!id || !outletId) {
      res
        .status(400)
        .json({ message: "Employee ID and Outlet ID are required" });
      return;
    }

    // Validasi employee exists
    const employee = await prisma.employee.findFirst({
      where: {
        id: Number(id),
        isDeleted: false,
      },
      include: {
        user: true,
      },
    });

    if (!employee) {
      res.status(404).json({ message: "Employee not found" });
      return;
    }

    // Validasi outlet exists
    const outlet = await prisma.outlet.findFirst({
      where: {
        id: Number(outletId),
        isDeleted: false,
      },
    });

    if (!outlet) {
      res.status(404).json({ message: "Outlet not found" });
      return;
    }

    // Validasi jika outlet sudah memiliki outlet admin
    if (employee.user.role === Role.OUTLET_ADMIN) {
      const existingAdmin = await prisma.employee.findFirst({
        where: {
          outletId: Number(outletId),
          user: {
            role: Role.OUTLET_ADMIN,
            isDeleted: false,
          },
          isDeleted: false,
          id: { not: Number(id) }, // exclude current employee
        },
      });

      if (existingAdmin) {
        res
          .status(400)
          .json({ message: "Outlet already has an admin assigned" });
        return;
      }
    }

    next();
  } catch (error) {
    console.error("Assignment validation error:", error);
    res.status(500).json({ message: "Validation error" });
  }
};

export const validateMultipleAssignments = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { assignments } = req.body;

    if (!Array.isArray(assignments) || assignments.length === 0) {
      res.status(400).json({ message: "Invalid assignments format" });
      return;
    }

    for (const assign of assignments) {
      const { employeeId, outletId } = assign;

      const employee = await prisma.user.findFirst({
        where: {
          id: Number(employeeId),
          isDeleted: false,
        },
      });

      if (!employee) {
        res.status(404).json({ message: `Employee ${employeeId} not found` });
        return;
      }

      const outlet = await prisma.outlet.findFirst({
        where: {
          id: Number(outletId),
          isDeleted: false,
        },
      });

      if (!outlet) {
        res.status(404).json({ message: `Outlet ${outletId} not found` });
        return;
      }
    }

    next();
  } catch (error) {
    console.error("Multiple assignment validation error:", error);
    res.status(500).json({ message: "Validation error" });
  }
};
