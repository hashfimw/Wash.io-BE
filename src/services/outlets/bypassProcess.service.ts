// src/services/bypassProcess.service.ts
import { Request, Response } from "express";
import prisma from "../../prisma";
import cron from "node-cron";

// src/services/bypassProcess.service.ts
export const requestBypassService = async (req: Request, res: Response) => {
  const worker = res.locals.worker; // Data worker dari middleware
  const { laundryJobId, byPassNote } = req.body;

  // Update laundry job dengan bypass request
  const updatedLaundryJob = await prisma.laundryJob.update({
    where: { id: Number(laundryJobId) },
    data: {
      isByPassRequested: true,
      byPassNote,
    },
  });

  // Cari outlet admin untuk notifikasi
  const outletAdmin = await prisma.employee.findFirst({
    where: {
      outletId: worker.Employee.outletId,
      user: {
        role: "OUTLET_ADMIN",
      },
    },
    include: {
      user: true,
    },
  });

  if (!outletAdmin) {
    throw new Error("Outlet admin not found");
  }

  // Kirim notifikasi ke outlet admin
  await prisma.notification.create({
    data: {
      userId: outletAdmin.userId,
      title: "New Bypass Request",
      description: `Worker ${worker.fullName} requested bypass for Order #${laundryJobId}. Reason: ${byPassNote}`,
    },
  });

  return { data: updatedLaundryJob };
};

// Service untuk outlet admin menangani bypass request
export const handleBypassRequestService = async (
  req: Request,
  res: Response
) => {
  const { laundryJobId, isApproved } = req.body;

  const laundryJob = await prisma.$transaction(async (prisma) => {
    // Update status bypass dan completion
    const job = await prisma.laundryJob.update({
      where: { id: Number(laundryJobId) },
      data: {
        byPassStatus: isApproved ? "ACCEPTED" : "REJECTEED",
        isCompleted: isApproved,
      },
      include: {
        worker: {
          include: {
            user: true,
          },
        },
      },
    });

    // Handle notifikasi berdasarkan keputusan
    if (!isApproved) {
      // Notifikasi untuk worker jika bypass ditolak
      await prisma.notification.create({
        data: {
          userId: job.worker.userId,
          title: "Bypass Request Rejected",
          description: `Your bypass request for Order #${laundryJobId} has been rejected. Please find missing items within 30 minutes.`,
        },
      });

      // Set timer 30 menit untuk follow up
      cron.schedule("*/30 * * * *", async () => {
        const checkJob = await prisma.laundryJob.findUnique({
          where: { id: Number(laundryJobId) },
        });

        if (checkJob && !checkJob.isCompleted) {
          await prisma.notification.create({
            data: {
              userId: job.worker.userId,
              title: "Time's Up!",
              description: `30 minutes have passed. Please update missing items for Order #${laundryJobId}`,
            },
          });
        }
      });
    } else {
      // Notifikasi untuk worker jika bypass disetujui
      await prisma.notification.create({
        data: {
          userId: job.worker.userId,
          title: "Bypass Request Approved",
          description: `Your bypass request for Order #${laundryJobId} has been approved. Proceed to next station.`,
        },
      });
    }

    return job;
  });

  return { data: laundryJob };
};
