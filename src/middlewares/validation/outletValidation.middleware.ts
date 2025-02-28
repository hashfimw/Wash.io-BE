// src/middleware/outletValidation.middleware.ts
import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";

export const validateCreateOutlet = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      outletName,
      addressLine,
      province,
      regency,
      district,
      village,
      latitude,
      longitude,
    } = req.body;

    // Validasi field yang required
    if (
      !outletName ||
      !addressLine ||
      !province ||
      !regency ||
      !district ||
      !village
    ) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    // Validasi nama outlet unik
    const existingOutlet = await prisma.outlet.findFirst({
      where: {
        outletName,
        isDeleted: false,
      },
    });

    if (existingOutlet) {
      res.status(400).json({ message: "Outlet name already exists" });
      return;
    }

    next();
  } catch (error) {
    console.error("Create outlet validation error:", error);
    res.status(500).json({ message: "Validation error" });
  }
};

export const validateUpdateOutlet = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const {
      outletName,
      addressLine,
      province,
      regency,
      district,
      village,
      latitude,
      longitude,
    } = req.body;

    // Validasi outlet exists
    const existingOutlet = await prisma.outlet.findFirst({
      where: {
        id: Number(id),
        isDeleted: false,
      },
    });

    if (!existingOutlet) {
      res.status(404).json({ message: "Outlet not found" });
      return;
    }

    // Validasi nama outlet unik jika diubah
    if (outletName && outletName !== existingOutlet.outletName) {
      const nameExists = await prisma.outlet.findFirst({
        where: {
          outletName,
          id: { not: Number(id) },
          isDeleted: false,
        },
      });

      if (nameExists) {
        res.status(400).json({ message: "Outlet name already exists" });
        return;
      }
    }

    // Validasi format koordinat jika diubah
    if (latitude || longitude) {
      const latRegex = /^-?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;
      const longRegex = /^-?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

      if (latitude && !latRegex.test(latitude)) {
        res.status(400).json({ message: "Invalid latitude format" });
        return;
      }

      if (longitude && !longRegex.test(longitude)) {
        res.status(400).json({ message: "Invalid longitude format" });
        return;
      }
    }

    next();
  } catch (error) {
    console.error("Update outlet validation error:", error);
    res.status(500).json({ message: "Validation error" });
  }
};

export const validateDeleteOutlet = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    // Validasi id format
    if (!id || isNaN(Number(id))) {
      res.status(400).json({ message: "Invalid outlet ID" });
      return;
    }

    // Validasi outlet exists
    const existingOutlet = await prisma.outlet.findFirst({
      where: {
        id: Number(id),
        isDeleted: false,
      },
      include: {
        Employee: {
          where: { isDeleted: false },
        },
        Order: {
          where: {
            isDeleted: false,
            orderStatus: {
              notIn: [
                "COMPLETED",
                "CANCELLED_BY_CUSTOMER",
                "CANCELLED_BY_OUTLET",
              ],
            },
          },
        },
      },
    });

    if (!existingOutlet) {
      res.status(404).json({ message: "Outlet not found or already deleted" });
      return;
    }

    // Validasi tidak ada employee aktif
    if (existingOutlet.Employee.length > 0) {
      res.status(400).json({
        message:
          "Cannot delete outlet with active employees. Please reassign or remove employees first",
      });
      return;
    }

    // Validasi tidak ada order aktif
    if (existingOutlet.Order.length > 0) {
      res.status(400).json({
        message:
          "Cannot delete outlet with active orders. Please wait until all orders are completed",
      });
      return;
    }

    next();
  } catch (error) {
    console.error("Delete outlet validation error:", error);
    res.status(500).json({ message: "Validation error" });
  }
};
