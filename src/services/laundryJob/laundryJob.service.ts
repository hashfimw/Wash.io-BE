import { PaginationQueries, PaginationQuerieswithDate } from "../../types/pagination.type";
import { findOutletsOrderIds } from "../transportJob/transportJob.service";
import prisma from "../../prisma";
import { findUser } from "../helpers/finder.service";
import { dateValidator, shiftChecker } from "../helpers/dateTime.service";
import { Prisma, WorkerStation } from "../../../prisma/generated/client";

const getIdleWorker = async (id: number, tzo: number) => {
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
      skip: (+meta.page - 1) * +meta.limit,
      take: +meta.limit,
      orderBy: { [meta.sortBy]: meta.sortOrder },
    });
    const count = await prisma.laundryJob.count({ where: filter });
    const total = Math.ceil(count / +meta.limit);

    return { data: laundryJobs, meta: { page: meta.page, limit: meta.limit, total: total } };
  } catch (error) {
    throw error;
  }
};

interface LaundryJobQueries extends PaginationQuerieswithDate {
  userId: number;
  tzo: string;
  requestType: string;
  isCompleted: string;
}

export const getLaundryJobsService = async (queries: LaundryJobQueries) => {
  try {
    const worker = await findUser(queries.userId);
    if (worker.role != "WORKER") throw { message: "This user can't access this feature" };

    const filter: Prisma.LaundryJobWhereInput = {};
    filter.station = worker.Employee!.station as WorkerStation;
    if (queries.requestType == "request") {
      const outletId = (await getIdleWorker(queries.userId, +queries.tzo)).Employee!.outletId;
      const orderIds = await findOutletsOrderIds(outletId);

      filter.orderId = { in: orderIds };
      filter.workerId = { equals: null };
    } else throw { message: "Invalid request type!" };

    return await getLaundryJobs(filter, queries);
  } catch (error) {
    throw error;
  }
};

export const getLaundryJobByIdService = async (laundryJobId: number) => {
  try {
    const laundryJob = await prisma.laundryJob.findUnique({
      where: { id: laundryJobId },
      include: { worker: { include: { user: true } }, order: { include: { customerAddress: { include: { customer: true } }, OrderItem: true } } },
    });

    if (!laundryJob) throw { message: "Invalid Laundry Job id!" };

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
