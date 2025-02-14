// src/middleware/employeeValidation.middleware.ts
import { Request, Response, NextFunction } from "express";
import { Role, WorkerStation } from "@prisma/client";
import prisma from "../../prisma";

export const validateCreateEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { fullName, email, password, role, workShift, station, outletId } =
      req.body;

    // Validasi input dasar
    if (!fullName || !email || !password || !role || !workShift || !outletId) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ message: "Invalid email format" });
      return;
    }

    // Validasi email unik
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

    // Validasi outlet exists
    const outletExists = await prisma.outlet.findFirst({
      where: {
        id: outletId,
        isDeleted: false,
      },
    });

    if (!outletExists) {
      res.status(404).json({ message: "Outlet not found" });
      return;
    }

    // Validasi role dan station
    if (role === Role.WORKER && !station) {
      res.status(400).json({ message: "Worker must have a station" });
      return;
    }

    if (role === Role.DRIVER && station) {
      res.status(400).json({ message: "Driver cannot have a station" });
      return;
    }

    if (station && !Object.values(WorkerStation).includes(station)) {
      res.status(400).json({ message: "Invalid station type" });
      return;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Validation error" });
  }
};

export const validateUpdateEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { email, station, outletId } = req.body;

    // Validasi employee exists
    const existingEmployee = await prisma.user.findFirst({
      where: {
        id: Number(id),
        isDeleted: false,
      },
      include: { Employee: true },
    });

    if (!existingEmployee) {
      res.status(404).json({ message: "Employee not found" });
      return;
    }

    // Validasi email jika diubah
    if (email && email !== existingEmployee.email) {
      const emailExists = await prisma.user.findFirst({
        where: {
          email,
          id: { not: Number(id) },
        },
      });

      if (emailExists) {
        res.status(400).json({ message: "Email already exists" });
        return;
      }
    }

    // Validasi outlet jika diubah
    if (outletId) {
      const outletExists = await prisma.outlet.findFirst({
        where: {
          id: outletId,
          isDeleted: false,
        },
      });

      if (!outletExists) {
        res.status(404).json({ message: "Outlet not found" });
        return;
      }
    }

    // Validasi station berdasarkan role
    if (station) {
      if (existingEmployee.role === Role.DRIVER) {
        res.status(400).json({ message: "Cannot assign station to driver" });
        return;
      }

      if (!Object.values(WorkerStation).includes(station)) {
        res.status(400).json({ message: "Invalid station type" });
        return;
      }
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Validation error" });
  }
};

export const validateDeleteEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    // Validasi id format
    if (!id || isNaN(Number(id))) {
      res.status(400).json({ message: "Invalid employee ID" });
      return;
    }

    // Validasi employee exists dan belum dihapus
    const existingEmployee = await prisma.user.findFirst({
      where: {
        id: Number(id),
        isDeleted: false,
      },
      include: {
        Employee: true,
      },
    });

    if (!existingEmployee) {
      res
        .status(404)
        .json({ message: "Employee not found or already deleted" });
      return;
    }

    // Validasi role (optional: jika ada role yang tidak boleh dihapus)
    if (existingEmployee.role === Role.SUPER_ADMIN) {
      res.status(403).json({ message: "Cannot delete super admin account" });
      return;
    }

    // Validasi employee masih aktif bekerja
    if (existingEmployee.Employee?.isWorking) {
      res
        .status(400)
        .json({ message: "Cannot delete employee while they are working" });
      return;
    }

    next();
  } catch (error) {
    console.error("Delete validation error:", error);
    res.status(500).json({ message: "Validation error" });
  }
};
