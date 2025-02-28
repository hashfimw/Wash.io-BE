import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";

export const validateWorkerBypass = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Validasi keberadaan user
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    // Validasi worker dan data employee
    const worker = await prisma.user.findUnique({
      where: { id: Number(req.user.id) },
      include: {
        Employee: {
          include: {
            outlet: true,
          },
        },
      },
    });

    if (!worker || !worker.Employee || worker.role !== "WORKER") {
      res
        .status(403)
        .json({ message: "Unauthorized - Only workers can request bypass" });
      return;
    }

    // Validasi laundry job berada di outlet yang sama dengan worker
    const { laundryJobId } = req.body;
    const laundryJob = await prisma.laundryJob.findFirst({
      where: {
        id: Number(laundryJobId),
        order: {
          outletId: worker.Employee.outletId,
        },
      },
    });

    if (!laundryJob) {
      res.status(404).json({ message: "Laundry job not found in this outlet" });
      return;
    }

    // Menyimpan data worker untuk digunakan di service
    res.locals.worker = worker;
    next();
  } catch (error) {
    res.status(500).json({ message: "Validation error" });
  }
};

export const validateOutletAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const admin = await prisma.user.findUnique({
      where: { id: Number(req.user.id) },
      include: {
        Employee: {
          include: {
            outlet: true,
          },
        },
      },
    });

    if (!admin || !admin.Employee || admin.role !== "OUTLET_ADMIN") {
      res.status(403).json({
        message: "Unauthorized - Only outlet admin can access this resource",
      });
      return;
    }

    // Validasi laundry job berada di outlet yang sama
    const { laundryJobId } = req.body;
    const laundryJob = await prisma.laundryJob.findFirst({
      where: {
        id: Number(laundryJobId),
        order: {
          outletId: admin.Employee.outletId,
        },
      },
    });

    if (!laundryJob) {
      res.status(404).json({ message: "Laundry job not found in this outlet" });
      return;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Authorization error" });
  }
};
