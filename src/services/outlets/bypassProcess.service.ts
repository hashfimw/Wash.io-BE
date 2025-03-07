import { Request, Response } from "express";
import prisma from "../../prisma";
import { Role } from "../../../prisma/generated/client";
import cron from "node-cron";

// Service untuk worker request bypass
export const requestBypassService = async (req: Request, res: Response) => {
  const userId = Number(req.user?.id);

  const { laundryJobId, byPassNote } = req.body;
  const worker = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      Employee: true,
    },
  });

  if (!worker || !worker.Employee) {
    throw new Error("Data worker tidak ditemukan");
  }

  const updatedLaundryJob = await prisma.laundryJob.update({
    where: { id: Number(laundryJobId) },
    data: {
      isByPassRequested: true,
      byPassNote,
    },
  });

  // Cari outlet admin untuk notifikasi
  const outletAdmins = await prisma.employee.findMany({
    where: {
      outletId: worker.Employee.outletId,
      user: {
        role: Role.OUTLET_ADMIN,
      },
    },
    include: {
      user: true,
    },
  });

  // Cari super admin untuk notifikasi
  const superAdmins = await prisma.user.findMany({
    where: {
      role: Role.SUPER_ADMIN,
    },
  });

  // Kirim notifikasi ke outlet admin
  for (const admin of outletAdmins) {
    await prisma.notification.create({
      data: {
        userId: admin.userId,
        title: "Permintaan Bypass Baru",
        description: `Worker ${worker.fullName} meminta bypass untuk Order #${laundryJobId}. Alasan: ${byPassNote}`,
        url: `/dashboard/outlet-admin/bypass/${laundryJobId}`,
      },
    });
  }

  // Kirim notifikasi ke super admin
  for (const admin of superAdmins) {
    await prisma.notification.create({
      data: {
        userId: admin.id,
        title: "Permintaan Bypass Baru",
        description: `Worker ${worker.fullName} meminta bypass untuk Order #${laundryJobId} di outlet ${worker.Employee.outletId}. Alasan: ${byPassNote}`,
        url: `/dashboard/super-admin/bypass/${laundryJobId}`,
      },
    });
  }

  return { data: updatedLaundryJob };
};

// Service untuk admin handle bypass request
export const handleBypassRequestService = async (
  req: Request,
  res: Response
) => {
  // Cek role pengguna dengan mengambil dari database
  const userId = Number(req.user?.id);
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      Employee: true,
    },
  });

  if (
    !user ||
    (user.role !== Role.SUPER_ADMIN && user.role !== Role.OUTLET_ADMIN)
  ) {
    throw new Error(
      "Hanya Super Admin dan Outlet Admin yang dapat menangani permintaan bypass"
    );
  }

  const { laundryJobId, isApproved, adminNote } = req.body;

  // Logika berbeda berdasarkan role
  if (user.role === Role.SUPER_ADMIN) {
    // Super admin bisa handle bypass dari semua outlet
    const laundryJob = await prisma.$transaction(async (prisma) => {
      // Dapatkan informasi job saat ini
      const currentJob = await prisma.laundryJob.findUnique({
        where: { id: Number(laundryJobId) },
        include: {
          worker: {
            include: {
              user: true,
            },
          },
          order: true,
        },
      });

      if (!currentJob) {
        throw new Error("Laundry job tidak ditemukan");
      }

      // Proses bypass tanpa batasan outlet
      const job = await prisma.laundryJob.update({
        where: { id: Number(laundryJobId) },
        data: {
          byPassStatus: isApproved ? "ACCEPTED" : "REJECTED",
          // Tambahkan catatan admin jika ada
          byPassNote: adminNote
            ? `${currentJob.byPassNote || ""}\n\nTanggapan Admin: ${adminNote}`
            : currentJob.byPassNote,
        },
        include: {
          worker: {
            include: {
              user: true,
            },
          },
          order: true,
        },
      });

      // Notifikasi ke worker
      await prisma.notification.create({
        data: {
          userId: job.worker!.userId,
          title: isApproved
            ? "Permintaan Bypass Disetujui"
            : "Permintaan Bypass Ditolak",
          description: isApproved
            ? `Permintaan bypass Anda untuk Order #${
                job.order.id
              } telah disetujui oleh Super Admin. ${
                adminNote ? `Catatan: ${adminNote}` : ""
              }`
            : `Permintaan bypass Anda untuk Order #${
                job.order.id
              } telah ditolak oleh Super Admin. ${
                adminNote
                  ? `Catatan: ${adminNote}`
                  : "Harap lengkapi data yang kurang dalam 30 menit."
              }`,
          url: `/employee-dashboard/worker/${laundryJobId}`,
        },
      });

      // Jika ditolak, tambahkan timer 30 menit
      if (!isApproved) {
        // Catatan: Di produksi, sebaiknya gunakan job queue daripada cron
        const jobId = `${laundryJobId}_followup`;
        cron.schedule(
          "*/30 * * * *",
          async () => {
            const checkJob = await prisma.laundryJob.findUnique({
              where: { id: Number(laundryJobId) },
            });

            if (checkJob && !checkJob.isCompleted) {
              await prisma.notification.create({
                data: {
                  userId: job.worker!.userId,
                  title: "Waktu Habis!",
                  description: `30 menit telah berlalu. Harap segera update item yang kurang untuk Order #${job.order.id}`,
                  url: `/employee-dashboard/worker/${laundryJobId}`,
                },
              });
            }

            // Hentikan task setelah dijalankan
            cron.getTasks().get(jobId)?.stop();
          },
          {
            scheduled: true,
            name: jobId,
          }
        );
      }

      return job;
    });

    return { data: laundryJob };
  } else {
    // Outlet admin hanya bisa handle bypass di outlet miliknya
    const outletAdmin = await prisma.employee.findUnique({
      where: { userId: user.id },
    });

    const laundryJob = await prisma.laundryJob.findUnique({
      where: { id: Number(laundryJobId) },
      include: {
        worker: true,
      },
    });

    // Pastikan laundry job ada di outlet admin yang sama
    if (!laundryJob || laundryJob.worker?.outletId !== outletAdmin?.outletId) {
      throw new Error("Tidak diizinkan menangani permintaan bypass ini");
    }

    // Proses bypass untuk outlet admin
    const updatedLaundryJob = await prisma.$transaction(async (prisma) => {
      // Dapatkan informasi job saat ini
      const currentJob = await prisma.laundryJob.findUnique({
        where: { id: Number(laundryJobId) },
        include: {
          worker: {
            include: {
              user: true,
            },
          },
          order: true,
        },
      });

      if (!currentJob) {
        throw new Error("Laundry job tidak ditemukan");
      }

      const job = await prisma.laundryJob.update({
        where: { id: Number(laundryJobId) },
        data: {
          byPassStatus: isApproved ? "ACCEPTED" : "REJECTED",
          // Tambahkan catatan admin jika ada
          byPassNote: adminNote
            ? `${currentJob.byPassNote || ""}\n\nTanggapan Admin: ${adminNote}`
            : currentJob.byPassNote,
        },
        include: {
          worker: {
            include: {
              user: true,
            },
          },
          order: true,
        },
      });

      // Notifikasi ke worker
      await prisma.notification.create({
        data: {
          userId: job.worker!.userId,
          title: isApproved
            ? "Permintaan Bypass Disetujui"
            : "Permintaan Bypass Ditolak",
          description: isApproved
            ? `Permintaan bypass Anda untuk Order #${
                job.order.id
              } telah disetujui oleh Outlet Admin. ${
                adminNote ? `Catatan: ${adminNote}` : ""
              }`
            : `Permintaan bypass Anda untuk Order #${
                job.order.id
              } telah ditolak oleh Outlet Admin. ${
                adminNote
                  ? `Catatan: ${adminNote}`
                  : "Harap lengkapi data yang kurang dalam 30 menit."
              }`,
          url: `/dashboard/laundry-jobs/${laundryJobId}`,
        },
      });

      // Jika ditolak, tambahkan timer 30 menit
      if (!isApproved) {
        // Catatan: Di produksi, sebaiknya gunakan job queue daripada cron
        const jobId = `${laundryJobId}_followup`;
        cron.schedule(
          "*/30 * * * *",
          async () => {
            const checkJob = await prisma.laundryJob.findUnique({
              where: { id: Number(laundryJobId) },
            });

            if (checkJob && !checkJob.isCompleted) {
              await prisma.notification.create({
                data: {
                  userId: job.worker!.userId,
                  title: "Waktu Habis!",
                  description: `30 menit telah berlalu. Harap segera update item yang kurang untuk Order #${job.order.id}`,
                  url: `/dashboard/laundry-jobs/${laundryJobId}`,
                },
              });
            }

            // Hentikan task setelah dijalankan
            cron.getTasks().get(jobId)?.stop();
          },
          {
            scheduled: true,
            name: jobId,
          }
        );
      }

      return job;
    });

    return { data: updatedLaundryJob };
  }
};

// Service untuk mendapatkan semua permintaan bypass (untuk admin)
export const getBypassRequestsService = async (req: Request, res: Response) => {
  const userId = Number(req.user?.id);

  // Dapatkan role pengguna dari database
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      Employee: true,
    },
  });

  if (!user) {
    throw new Error("Pengguna tidak ditemukan");
  }

  let bypassRequests;

  if (user.role === Role.SUPER_ADMIN) {
    // Super admin dapat melihat semua permintaan bypass
    bypassRequests = await prisma.laundryJob.findMany({
      where: {
        isByPassRequested: true,
        isDeleted: false,
      },
      include: {
        order: true,
        worker: {
          include: {
            user: {
              select: {
                id: true,
                fullName: true,
                email: true,
                avatar: true,
              },
            },
            outlet: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else if (user.role === Role.OUTLET_ADMIN && user.Employee?.outletId) {
    // Outlet admin hanya dapat melihat permintaan bypass dari outletnya
    const outletId = user.Employee.outletId;

    bypassRequests = await prisma.laundryJob.findMany({
      where: {
        isByPassRequested: true,
        isDeleted: false,
        worker: {
          outletId: outletId,
        },
      },
      include: {
        order: true,
        worker: {
          include: {
            user: {
              select: {
                id: true,
                fullName: true,
                email: true,
                avatar: true,
              },
            },
            outlet: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    throw new Error("Akses tidak diizinkan");
  }

  return { data: bypassRequests };
};

// Service untuk mendapatkan permintaan bypass tertentu berdasarkan ID
export const getBypassRequestByIdService = async (
  req: Request,
  res: Response,
  id: number
) => {
  const userId = Number(req.user?.id);

  // Dapatkan role pengguna dari database
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      Employee: true,
    },
  });

  if (!user) {
    throw new Error("Pengguna tidak ditemukan");
  }

  // Temukan permintaan bypass
  const bypassRequest = await prisma.laundryJob.findUnique({
    where: {
      id: id,
      isByPassRequested: true,
      isDeleted: false,
    },
    include: {
      order: true,
      worker: {
        include: {
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
              avatar: true,
            },
          },
          outlet: true,
        },
      },
    },
  });

  if (!bypassRequest) {
    throw new Error("Permintaan bypass tidak ditemukan");
  }

  // Periksa izin berdasarkan peran
  if (user.role === Role.SUPER_ADMIN) {
    // Super admin dapat melihat semua permintaan
    return { data: bypassRequest };
  } else if (user.role === Role.OUTLET_ADMIN && user.Employee?.outletId) {
    // Outlet admin hanya dapat melihat permintaan bypass dari outletnya
    if (bypassRequest.worker?.outletId !== user.Employee.outletId) {
      throw new Error(
        "Anda tidak memiliki izin untuk melihat permintaan bypass ini"
      );
    }
    return { data: bypassRequest };
  } else if (user.role === Role.WORKER) {
    // Worker hanya dapat melihat permintaan bypass mereka sendiri
    if (bypassRequest.workerId !== userId) {
      throw new Error(
        "Anda tidak memiliki izin untuk melihat permintaan bypass ini"
      );
    }
    return { data: bypassRequest };
  } else {
    throw new Error("Akses tidak diizinkan");
  }
};
