import { Request, Response } from "express";
import prisma from "../../prisma";

//masih belum fix
export const getSalesReportService = async (req: Request, res: Response) => {
  const { startDate, endDate, outletId, period = "daily" } = req.query;
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
    include: { Employee: true },
  });

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

  const orders = await prisma.order.findMany({
    where: whereClause,
    include: {
      outlet: true,
    },
  });

  let report;
  switch (period) {
    case "yearly":
      report = orders.reduce<Record<number, number>>((acc, order) => {
        const year = order.createdAt.getFullYear();
        acc[year] = (acc[year] || 0) + order.laundryPrice!;
        return acc;
      }, {});
      break;
    case "monthly":
      report = orders.reduce<Record<string, number>>((acc, order) => {
        const month = `${order.createdAt.getFullYear()}-${
          order.createdAt.getMonth() + 1
        }`;
        acc[month] = (acc[month] || 0) + order.laundryPrice!;
        return acc;
      }, {});
      break;
    default:
      report = orders.reduce<Record<string, number>>((acc, order) => {
        const day = order.createdAt.toISOString().split("T")[0];
        acc[day] = (acc[day] || 0) + order.laundryPrice!;
        return acc;
      }, {});
  }

  return { data: report };
};

export const getEmployeePerformanceService = async (
  req: Request,
  res: Response
) => {
  const { startDate, endDate, outletId } = req.query;
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
    include: { Employee: true },
  });

  const whereClause = {
    createdAt: {
      gte: startDate ? new Date(String(startDate)) : undefined,
      lte: endDate ? new Date(String(endDate)) : undefined,
    },
    isDeleted: false,
    ...(user?.role !== "SUPER_ADMIN"
      ? { outletId: user?.Employee?.outletId }
      : {}),
    ...(outletId ? { outletId: Number(outletId) } : {}),
  };

  // Get worker performance
  const workerPerformance = await prisma.laundryJob.groupBy({
    by: ["workerId"],
    where: whereClause,
    _count: {
      id: true,
    },
  });

  // Get driver performance
  const driverPerformance = await prisma.transportJob.groupBy({
    by: ["driverId"],
    where: whereClause,
    _count: {
      id: true,
    },
  });

  return {
    data: {
      workers: workerPerformance,
      drivers: driverPerformance,
    },
  };
};
