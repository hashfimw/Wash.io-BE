import { PaginationQueries, PaginationQuerieswithDate } from "../../types/pagination.type";
import prisma from "../../prisma";
import { findOutletsOrderIds, findUser } from "../helpers/finder.service";
import { dateValidator, shiftChecker } from "../helpers/dateTime.service";
import { Prisma, WorkerStation } from "../../../prisma/generated/client";

export const getIdleWorker = async (id: number, tzo: number) => {
  try {
    const worker = await findUser(id);
    const workShift = shiftChecker(tzo);

    if (tzo < -840 || tzo > 720 || !tzo) throw { message: "Invalid time zone offset!" };
    if (worker.Employee!.workShift != workShift) throw { message: "You're out of your shift hours!" };
    if (!worker.Employee!.isPresent) throw { message: "You need to clock in attendance first!" };
    if (worker.Employee!.isWorking) throw { message: "You can't access this feature if you're assigned on ongoing job!" };

    return worker;
  } catch (error) {
    throw error;
  }
};

const getLaundryJobs = async (filter: Prisma.LaundryJobWhereInput, meta: PaginationQueries) => {
  try {
    const laundryJobs = await prisma.laundryJob.findMany({
      where: filter,
      skip: (meta.page - 1) * meta.limit,
      take: meta.limit,
      orderBy: { [meta.sortBy]: meta.sortOrder },
    });
    const total_data = await prisma.laundryJob.count({ where: filter });
    const total_pages = Math.ceil(total_data / meta.limit);

    if (total_pages > 0 && +meta.page > total_pages) throw { message: "Invalid page!" };

    return { data: laundryJobs, meta: { page: meta.page, limit: meta.limit, total_pages: total_pages, total_data: total_data } };
  } catch (error) {
    throw error;
  }
};

interface LaundryJobQueries extends PaginationQuerieswithDate {
  userId: number;
  tzo?: number;
  requestType: "request" | "history";
}

export const getLaundryJobsService = async (queries: LaundryJobQueries) => {
  try {
    const dates = dateValidator(queries.startDate, queries.endDate);
    const worker = await findUser(queries.userId);
    if (worker.role != "WORKER") throw { message: "This user can't access this feature" };

    const filter: Prisma.LaundryJobWhereInput = {};
    filter.station = worker.Employee!.station as WorkerStation;
    if (queries.requestType == "request") {
      const outletId = (await getIdleWorker(queries.userId, queries.tzo!)).Employee!.outletId;
      const orderIds = await findOutletsOrderIds(outletId);

      filter.orderId = { in: orderIds };
      filter.workerId = { equals: null };
    } else if (queries.requestType == "history") {
      filter.workerId = worker.Employee!.id;
      filter.isCompleted = true;
      filter.createdAt = { gt: dates.start, lt: dates.end };
    } else throw { message: "Invalid request type!" };

    return await getLaundryJobs(filter, queries);
  } catch (error) {
    throw error;
  }
};

export const getLaundryJobByIdService = async (userId: number, laundryJobId: number) => {
  try {
    const accessor = await findUser(userId);

    const laundryJob = await prisma.laundryJob.findUnique({
      where: { id: laundryJobId },
      include: { worker: { include: { user: true } }, order: { include: { customerAddress: { include: { customer: true } }, OrderItem: true } } },
    });

    if (!laundryJob) throw { message: "Invalid Laundry Job id!" };
    if (!accessor.Employee) throw { message: "User is not an employee!" };
    if (accessor.role == "DRIVER") throw { message: "Driver cannot access this page!" };
    if (accessor.role != "SUPER_ADMIN" && accessor.Employee.outletId != laundryJob.order.outletId) throw { message: "Invalid Outlet Id!" };
    if (accessor.role == "WORKER") {
      if (laundryJob.station != accessor.Employee.station) throw { message: "Invalid station!" };
      if (laundryJob.isCompleted && laundryJob.workerId != accessor.Employee.id) throw { message: "Invalid Employee Id!" };
    }

    const { worker, order, ...jobDetails } = laundryJob;
    const { customer, ...address } = order.customerAddress;

    return {
      ...jobDetails,
      orderStatus: order.orderStatus,
      isPaid: order.isPaid,
      workerId: worker?.id,
      workerName: worker?.user!.fullName,
      outletId: order.outletId,
      orderItem: order.OrderItem,
      customerName: customer!.fullName,
      address,
    };
  } catch (error) {
    throw error;
  }
};

export const getOngoingLaundryJobService = async (userId: number) => {
  try {
    const worker = await findUser(userId);
    if (worker.role != "WORKER") throw { message: "Invalid role!" };

    const laundryJob = await prisma.laundryJob.findFirst({
      where: { workerId: worker.Employee!.id, isCompleted: false },
      include: { worker: { include: { user: true } }, order: { include: { customerAddress: { include: { customer: true } }, OrderItem: true } } },
    });
    if (laundryJob) {
      const { worker, order, ...jobDetails } = laundryJob;
      const { customer, ...address } = order.customerAddress;

      return {
        ...jobDetails,
        orderStatus: order.orderStatus,
        isPaid: order.isPaid,
        workerId: worker?.id,
        workerName: worker?.user!.fullName,
        outletId: order.outletId,
        orderItem: order.OrderItem,
        customerName: customer!.fullName,
        address,
      };
    } else throw { message: "You aren't assigned to a job right now!" };
  } catch (error) {
    throw error;
  }
};
