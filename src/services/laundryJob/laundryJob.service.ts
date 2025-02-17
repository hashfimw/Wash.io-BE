import { PaginationQueries, PaginationQuerieswithDate } from "../../types/pagination.type";
import { findOutletsOrderIds } from "../transportJob/transportJob.service";
import prisma from "../../prisma";
import { findUser, getIdleEmployees } from "../helpers/finder.service";
import { dateValidator, shiftChecker } from "../helpers/dateTime.service";
import { Prisma, WorkerStation, OrderStatus } from "../../../prisma/generated/client";
import { createMultipleNotificationDataService } from "../notification/notification.service";

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
    const dates = dateValidator(queries.startDate, queries.endDate);
    const worker = await findUser(queries.userId);
    if (worker.role != "WORKER") throw { message: "This user can't access this feature" };

    const filter: Prisma.LaundryJobWhereInput = {};
    filter.station = worker.Employee!.station as WorkerStation;
    if (queries.requestType == "request") {
      const outletId = (await getIdleWorker(queries.userId, +queries.tzo)).Employee!.outletId;
      const orderIds = await findOutletsOrderIds(outletId);

      filter.orderId = { in: orderIds };
      filter.workerId = { equals: null };
    } else if (queries.requestType == "history") {
      filter.workerId = queries.userId;
      filter.isCompleted = Boolean(+queries.isCompleted);
      filter.createdAt = { gt: dates.start };
      filter.createdAt = { lt: dates.end };
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

interface OrderItemInput {
  orderItemId: number;
  qty: number;
}

export const updateLaundryJobByIdService = async (laundryJobId: number, userId: number, orderItemInput: OrderItemInput[], tzo: string) => {
  try {
    const laundryJob = await getLaundryJobByIdService(laundryJobId);
    const worker = await findUser(userId);
    const orderId = laundryJob.orderId;
    const station = laundryJob.station;
    let currentOrderStatus = laundryJob.orderStatus;
    let newOrderStatus: OrderStatus = "WAITING_FOR_PICKUP_DRIVER";

    if (worker.role != "WORKER") throw { message: "This user can't access this feature" };
    if (laundryJob.outletId != worker.Employee!.outletId) throw { message: "Invalid Outlet Id!" };
    if (!worker.Employee!.isPresent) throw { message: "You need to clock in attendance first!" };
    if (laundryJob.isCompleted) throw { message: "Job already completed!" };
    if (worker.Employee!.station != laundryJob.station) throw { message: "Invalid station!" };

    const laundryJobData: Prisma.LaundryJobUpdateArgs = {
      where: { id: laundryJobId },
      data: {},
    };
    const workerData: Prisma.EmployeeUpdateArgs = {
      where: { id: worker.Employee!.id },
      data: {},
    };
    let distance = 0;
    let newLaundryJobData: Prisma.LaundryJobUncheckedCreateInput = { orderId, station: "IRONING" };
    let notificationData: Prisma.NotificationCreateManyInput[] = [];

    if (currentOrderStatus == "READY_FOR_WASHING" || currentOrderStatus == "WASHING_COMPLETED" || currentOrderStatus == "IRONING_COMPLETED") {
      await getIdleWorker(userId, +tzo);
      const orderItems = laundryJob.orderItem.map((item) => {
        return { orderItemId: item.id, qty: item.qty };
      });
      if (JSON.stringify(orderItems) != JSON.stringify(orderItemInput)) throw { message: "Invalid Order Item input(s)!" };

      if (station == "WASHING") newOrderStatus = "BEING_WASHED";
      else if (station == "IRONING") newOrderStatus = "BEING_IRONED";
      else if (station == "PACKING") newOrderStatus = "BEING_PACKED";
      laundryJobData.data.workerId = worker.Employee!.id;
      workerData.data.isWorking = true;
    } else if (currentOrderStatus == "BEING_WASHED" || currentOrderStatus == "BEING_IRONED" || currentOrderStatus == "BEING_PACKED") {
      if (laundryJob.workerId != worker.Employee!.id) throw { message: "Invalid Worker Id!" };
      const outletId = worker.Employee!.outletId;

      if (station == "WASHING") {
        const ironerIds = await getIdleEmployees(outletId, "WORKER", "IRONING");
        if (ironerIds.length == 0) throw { message: "No idle Ironer present at the outlet!" };

        notificationData = createMultipleNotificationDataService(ironerIds, "Ironing Job Alert", "A new ironing job is available!");
        newOrderStatus = "WASHING_COMPLETED";
      } else if (station == "IRONING") {
        const packerIds = await getIdleEmployees(outletId, "WORKER", "PACKING");
        if (packerIds.length == 0) throw { message: "No idle Packer present at the outlet!" };

        newLaundryJobData.station = "PACKING";
        notificationData = createMultipleNotificationDataService(packerIds, "Packing Job Alert", "A new packing job is available!");
        newOrderStatus = "IRONING_COMPLETED";
      } else if (station == "PACKING" && laundryJob.isPaid) {
        const driverIds = await getIdleEmployees(outletId, "DRIVER");
        if (driverIds.length == 0) throw { message: "No idle Driver present at the outlet!" };
        distance = (await prisma.transportJob.findFirst({
          where: { orderId, transportType: "PICKUP" },
        }))!.distance;

        notificationData = createMultipleNotificationDataService(driverIds, "Delivery Job Alert", "A new delivery job is available!");
        newOrderStatus = "WAITING_FOR_DELIVERY_DRIVER";
      } else if (station == "PACKING" && !laundryJob.isPaid) newOrderStatus = "AWAITING_PAYMENT";

      laundryJobData.data.isCompleted = true;
      workerData.data.isWorking = false;
    } else throw { message: "Invalid Order Status!" };

    await prisma.$transaction(async (tx) => {
      await tx.laundryJob.update(laundryJobData);
      await tx.employee.update(workerData);
      await tx.order.update({ where: { id: orderId }, data: { orderStatus: newOrderStatus } });
      if (newOrderStatus == "WAITING_FOR_DELIVERY_DRIVER") {
        const transportJobId = (await tx.transportJob.create({ data: { transportType: "DELIVERY", orderId, distance } })).id;
        notificationData = notificationData.map((item) => {
          return { ...item, url: `${process.env.BASE_URL_FE!}/transport-job/${transportJobId}` };
        });
        await tx.notification.createMany({ data: notificationData });
      }
      if (currentOrderStatus == "BEING_WASHED" || currentOrderStatus == "BEING_IRONED") {
        const laundryJobId = (await tx.laundryJob.create({ data: newLaundryJobData })).id;
        notificationData = notificationData.map((item) => {
          return { ...item, url: `${process.env.BASE_URL_FE!}/laundry-job/${laundryJobId}` };
        });
        await tx.notification.createMany({ data: notificationData });
      }
    });

    return;
  } catch (error) {
    throw error;
  }
};
