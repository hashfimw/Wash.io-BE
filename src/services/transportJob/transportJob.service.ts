import { PaginationQueries, PaginationQuerieswithDate } from "../../types/pagination.type";
import prisma from "../../prisma";
import { findUser } from "../helpers/finder.service";
import { shiftChecker } from "../helpers/dateTime.service";
import { OrderStatus, Prisma, TransportType } from "../../../prisma/generated/client";

const getIdleDriver = async (userId: number, tzo: number) => {
  try {
    const driver = await findUser(userId);
    const workShift = shiftChecker(tzo);

    if (tzo < -840 || tzo > 720 || !tzo) throw { message: "Invalid time zone offset!" };
    if (driver.role != "DRIVER") throw { message: "This user can't access this feature" };
    if (driver.Employee!.workShift != workShift) throw { message: "You're out of your shift hours!" };
    if (!driver.Employee!.isPresent) throw { message: "You need to clock in attendance first!" };
    if (driver.Employee!.isWorking) throw { message: "You can't access this feature if you're assigned on ongoing job!" };

    return driver;
  } catch (error) {
    throw error;
  }
};

const getTransportJobs = async (filter: Prisma.TransportJobWhereInput, meta: PaginationQueries) => {
  try {
    const transportJobs = await prisma.transportJob.findMany({
      where: filter,
      skip: (+meta.page - 1) * +meta.limit,
      take: +meta.limit,
      orderBy: { [meta.sortBy]: meta.sortOrder },
    });
    const count = await prisma.transportJob.count({ where: filter });
    const total = Math.ceil(count / +meta.limit);

    return { data: transportJobs, meta: { page: meta.page, limit: meta.limit, total: total } };
  } catch (error) {
    throw error;
  }
};

export const findOutletsOrderIds = async (outletId: number, orderStatus: OrderStatus | null = null) => {
  try {
    const filter: Prisma.OrderWhereInput = { outletId };
    if (orderStatus != null) filter.orderStatus = orderStatus;
    const ids = await prisma.order.findMany({
      where: filter,
      select: { id: true },
    });
    return ids.map((item) => item.id);
  } catch (error) {
    throw error;
  }
};

interface TransportJobQueries extends PaginationQuerieswithDate {
  userId: number;
  tzo: string;
  requestType: string;
  transportType: string;
  isCompleted: string;
}

export const getTransportJobsService = async (queries: TransportJobQueries) => {
  try {
    const filter: Prisma.TransportJobWhereInput = {};
    if (queries.transportType != "all") {
      filter.transportType = queries.transportType as TransportType;
    }
    if (queries.requestType == "request") {
      const outletId = (await getIdleDriver(queries.userId, +queries.tzo)).Employee!.outletId;
      const orderIds = await findOutletsOrderIds(outletId);

      filter.orderId = { in: orderIds };
      filter.driverId = { equals: null };
    } else if (queries.requestType == "order") {
      const outletAdmin = await findUser(queries.userId);
      if (outletAdmin.role != "OUTLET_ADMIN") throw { message: "This user can't access this feature" };

      const orderIds = await findOutletsOrderIds(outletAdmin.Employee!.outletId, "ARRIVED_AT_OUTLET");

      filter.orderId = { in: orderIds };
      filter.transportType = "PICKUP";
      filter.isCompleted = true;
    } else throw { message: "Invalid request type!" };

    return await getTransportJobs(filter, queries);
  } catch (error) {
    throw error;
  }
};

export const getTransportJobByIdService = async (transportJobId: number) => {
  try {
    const transportJob = await prisma.transportJob.findUnique({
      where: { id: transportJobId },
      include: { driver: { include: { user: true } }, order: { include: { customerAddress: { include: { customer: true } } } } },
    });

    if (!transportJob) throw { message: "Invalid Transport Job id!" };

    const { driver, order, ...jobDetails } = transportJob;
    const { customer, ...address } = order.customerAddress;

    return {
      ...jobDetails,
      orderStatus: order.orderStatus,
      isPaid: order.isPaid,
      driverId: driver?.id,
      driverName: driver?.user!.fullName,
      outletId: order.outletId,
      customerName: customer!.fullName,
      address,
    };
  } catch (error) {
    throw error;
  }
};
