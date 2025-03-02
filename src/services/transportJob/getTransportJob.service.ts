import { PaginationQueries, PaginationQuerieswithDate } from "../../types/pagination.type";
import prisma from "../../prisma";
import { findOutletsOrderIds, findUser } from "../helpers/finder.service";
import { dateValidator, shiftChecker } from "../helpers/dateTime.service";
import { Prisma, TransportType } from "../../../prisma/generated/client";

export const getIdleDriver = async (userId: number, tzo: number) => {
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
    if (meta.sortBy == "date") meta.sortBy = "createdAt";

    const transportJobs = await prisma.transportJob.findMany({
      where: filter,
      skip: (meta.page - 1) * meta.limit,
      take: meta.limit,
      orderBy: { [meta.sortBy]: meta.sortOrder },
      select: { id: true, orderId: true, createdAt: true, transportType: true },
    });
    const total_data = await prisma.transportJob.count({ where: filter });
    const total_pages = Math.ceil(total_data / meta.limit);

    if (total_pages > 0 && +meta.page > total_pages) throw { message: "Invalid page!" };

    const data = transportJobs.map((item) => {
      const { createdAt, ...details } = item;
      return {
        ...details,
        date: createdAt,
      };
    });

    return { data, meta: { page: meta.page, limit: meta.limit, total_pages: total_pages, total_data: total_data } };
  } catch (error) {
    throw error;
  }
};

interface TransportJobQueries extends PaginationQuerieswithDate {
  userId: number;
  tzo?: number;
  requestType: "request" | "history";
  transportType?: string;
}

export const getTransportJobsService = async (queries: TransportJobQueries) => {
  try {
    const dates = dateValidator(queries.startDate, queries.endDate);

    const filter: Prisma.TransportJobWhereInput = {};
    if (queries.transportType) filter.transportType = queries.transportType as TransportType;

    if (queries.requestType == "request") {
      const outletId = (await getIdleDriver(queries.userId, queries.tzo!)).Employee!.outletId;
      const orderIds = await findOutletsOrderIds(outletId);

      filter.orderId = { in: orderIds };
      filter.driverId = { equals: null };
    } else if (queries.requestType == "history") {
      const driver = await findUser(queries.userId);
      if (driver.role != "DRIVER") throw { message: "This user can't access this feature" };

      filter.driverId = driver.Employee!.id;
      filter.isCompleted = true;
      filter.createdAt = { gt: dates.start, lt: dates.end };
    } else throw { message: "Invalid request type!" };

    return await getTransportJobs(filter, queries);
  } catch (error) {
    throw error;
  }
};

const getTransportJobById = async (transportJobId: number) => {
  try {
    const transportJob = await prisma.transportJob.findUnique({
      where: { id: transportJobId },
      include: { driver: { include: { user: true } }, order: { include: { customerAddress: { include: { customer: true } } } } },
    });

    if (transportJob) {
      const { driverId, driver, order, ...jobDetails } = transportJob;
      const { customer, ...address } = order.customerAddress;

      return {
        ...jobDetails,
        orderStatus: order.orderStatus,
        isPaid: order.isPaid,
        employeeId: driverId,
        employeeName: driver?.user!.fullName,
        outletId: order.outletId,
        customerName: customer!.fullName,
        address,
      };
    } else throw { message: "Invalid Transport Job id!" };
  } catch (error) {
    throw error;
  }
};

export const getTransportJobByIdService = async (userId: number, transportJobId: number) => {
  try {
    const accessor = await findUser(userId);

    const transportJob = await getTransportJobById(transportJobId);

    if (!accessor.Employee) throw { message: "User is not an employee!" };
    if (accessor.role == "WORKER") throw { message: "Worker cannot access this page!" };
    if (accessor.role != "SUPER_ADMIN" && accessor.Employee.outletId != transportJob.outletId) throw { message: "Invalid Outlet Id!" };
    if (accessor.role == "DRIVER" && transportJob.isCompleted && transportJob.employeeId != accessor.Employee.id)
      throw { message: "Invalid Employee Id!" };

    return transportJob;
  } catch (error) {
    throw error;
  }
};

export const getOngoingTransportJobService = async (userId: number) => {
  try {
    const driver = await findUser(userId);
    if (driver.role != "DRIVER") throw { message: "Invalid role!" };

    const transportJob = await prisma.transportJob.findFirst({
      where: { driverId: driver.Employee!.id, isCompleted: false },
      select: { id: true },
    });
    if (transportJob) {
      return await getTransportJobById(transportJob.id);
    } else throw { message: "You aren't assigned to a job right now!" };
  } catch (error) {
    throw error;
  }
};
