import { Request, Response } from "express";
import prisma from "../../prisma";

export const getSalesReportService = async (req: Request, res: Response) => {
  const {
    startDate,
    endDate,
    outletId,
    period = "daily",
    page = 1,
    limit = 10,
  } = req.query;
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
    include: { Employee: true },
  });
  // Verifikasi akses - Outlet Admin hanya bisa melihat outlet sendiri
  if (
    user?.role !== "SUPER_ADMIN" &&
    outletId &&
    Number(outletId) !== user?.Employee?.outletId
  ) {
    throw new Error("You can only access reports for your own outlet");
  }

  const whereClause = {
    createdAt: {
      gte: startDate ? new Date(String(startDate)) : undefined,
      lte: endDate ? new Date(String(endDate)) : undefined,
    },
    isPaid: true,
    isDeleted: false,
    ...(user?.role !== "SUPER_ADMIN"
      ? { outletId: user?.Employee?.outletId }
      : {}),
    ...(outletId ? { outletId: Number(outletId) } : {}),
  };

  // Count total untuk pagination
  const totalCount = await prisma.order.count({
    where: whereClause,
  });

  // Apply pagination
  const orders = await prisma.order.findMany({
    where: whereClause,
    include: {
      outlet: {
        select: {
          id: true,
          outletName: true,
        },
      },
    },
    skip: (Number(page) - 1) * Number(limit),
    take: Number(limit),
  });

  let report;
  switch (period) {
    case "yearly":
      report = orders.reduce<Record<number, number>>((acc, order) => {
        const year = order.createdAt.getFullYear();
        acc[year] = (acc[year] || 0) + (order.laundryPrice || 0);
        return acc;
      }, {});
      break;
    case "monthly":
      report = orders.reduce<Record<string, number>>((acc, order) => {
        // Format bulan dengan leading zero untuk konsistensi
        const month = `${order.createdAt.getFullYear()}-${String(
          order.createdAt.getMonth() + 1
        ).padStart(2, "0")}`;
        acc[month] = (acc[month] || 0) + (order.laundryPrice || 0);
        return acc;
      }, {});
      break;
    default:
      report = orders.reduce<Record<string, number>>((acc, order) => {
        const day = order.createdAt.toISOString().split("T")[0];
        acc[day] = (acc[day] || 0) + (order.laundryPrice || 0);
        return acc;
      }, {});
  }

  return {
    data: report,
    meta: {
      total: totalCount,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(totalCount / Number(limit)),
    },
  };
};

export const getEmployeePerformanceService = async (
  req: Request,
  res: Response
) => {
  // Destructure pagination parameters with defaults
  const {
    startDate,
    endDate,
    outletId,
    page = 1,
    limit = 10,
    sortBy = "totalJobs",
    sortOrder = "desc",
  } = req.query;

  // Convert to numbers and handle pagination
  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const skip = (pageNumber - 1) * limitNumber;

  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
    include: { Employee: true },
  });

  // Verifikasi akses - Outlet Admin hanya bisa melihat outlet sendiri
  if (
    user?.role !== "SUPER_ADMIN" &&
    outletId &&
    Number(outletId) !== user?.Employee?.outletId
  ) {
    throw new Error("You can only access reports for your own outlet");
  }

  // Filter dasar untuk outlet
  const outletFilter =
    user?.role !== "SUPER_ADMIN"
      ? { outletId: user?.Employee?.outletId }
      : outletId
      ? { outletId: Number(outletId) }
      : {};

  // Get worker performance with name info and pagination
  const workersQuery = prisma.employee.findMany({
    where: {
      ...outletFilter,
      isDeleted: false,
      station: { not: null }, // Hanya workers
    },
    include: {
      user: {
        select: {
          fullName: true,
        },
      },
      outlet: {
        select: {
          outletName: true,
        },
      },
    },
    skip,
    take: limitNumber,
  });

  // Count total workers for pagination
  const totalWorkersCount = await prisma.employee.count({
    where: {
      ...outletFilter,
      isDeleted: false,
      station: { not: null },
    },
  });

  // Get worker jobs count with sorting
  const workers = await workersQuery;
  const workerPerformance = await Promise.all(
    workers.map(async (worker) => {
      const jobCount = await prisma.laundryJob.count({
        where: {
          workerId: worker.id,
          createdAt: {
            gte: startDate ? new Date(String(startDate)) : undefined,
            lte: endDate ? new Date(String(endDate)) : undefined,
          },
        },
      });

      return {
        workerId: worker.id,
        workerName: worker.user?.fullName || "Unknown",
        outletName: worker.outlet?.outletName || "Unknown",
        station: worker.station,
        totalJobs: jobCount,
      };
    })
  );

  // Sort worker performance
  const sortedWorkerPerformance = workerPerformance.sort((a, b) => {
    if (sortBy === "totalJobs") {
      return sortOrder === "desc"
        ? b.totalJobs - a.totalJobs
        : a.totalJobs - b.totalJobs;
    }
    // Add more sorting options if needed
    return 0;
  });

  // Get drivers with pagination
  const driversQuery = prisma.employee.findMany({
    where: {
      ...outletFilter,
      isDeleted: false,
      user: {
        role: "DRIVER",
      },
    },
    include: {
      user: {
        select: {
          fullName: true,
        },
      },
      outlet: {
        select: {
          outletName: true,
        },
      },
    },
    skip,
    take: limitNumber,
  });

  // Count total drivers for pagination
  const totalDriversCount = await prisma.employee.count({
    where: {
      ...outletFilter,
      isDeleted: false,
      user: {
        role: "DRIVER",
      },
    },
  });

  // Get driver jobs count
  const drivers = await driversQuery;
  const driverPerformance = await Promise.all(
    drivers.map(async (driver) => {
      const jobCount = await prisma.transportJob.count({
        where: {
          driverId: driver.id,
          createdAt: {
            gte: startDate ? new Date(String(startDate)) : undefined,
            lte: endDate ? new Date(String(endDate)) : undefined,
          },
        },
      });

      return {
        driverId: driver.id,
        driverName: driver.user?.fullName || "Unknown",
        outletName: driver.outlet?.outletName || "Unknown",
        totalJobs: jobCount,
      };
    })
  );

  // Sort driver performance
  const sortedDriverPerformance = driverPerformance.sort((a, b) => {
    if (sortBy === "totalJobs") {
      return sortOrder === "desc"
        ? b.totalJobs - a.totalJobs
        : a.totalJobs - b.totalJobs;
    }
    // Add more sorting options if needed
    return 0;
  });

  return {
    data: {
      workers: sortedWorkerPerformance,
      drivers: sortedDriverPerformance,
    },
    pagination: {
      workers: {
        currentPage: pageNumber,
        totalPages: Math.ceil(totalWorkersCount / limitNumber),
        totalItems: totalWorkersCount,
        itemsPerPage: limitNumber,
      },
      drivers: {
        currentPage: pageNumber,
        totalPages: Math.ceil(totalDriversCount / limitNumber),
        totalItems: totalDriversCount,
        itemsPerPage: limitNumber,
      },
    },
    sortOptions: {
      sortBy: String(sortBy),
      sortOrder: String(sortOrder),
    },
  };
};
