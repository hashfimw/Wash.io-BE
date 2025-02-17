import { PaginationQueries, PaginationQuerieswithDate } from "../../types/pagination.type";
import prisma from "../../prisma";
import { findUser } from "../helpers/finder.service";
import { dateValidator, shiftChecker } from "../helpers/dateTime.service";
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
    const dates = dateValidator(queries.startDate, queries.endDate);
    
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
    } else if (queries.requestType == "history") {
      const driver = await findUser(queries.userId);
      if (driver.role != "DRIVER") throw { message: "This user can't access this feature" };

      filter.driverId = driver.id;
      filter.isCompleted = Boolean(+queries.isCompleted);
      filter.createdAt = { gt: dates.start };
      filter.createdAt = { lt: dates.end };
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

export const updateTransportJobByIdService = async (transportJobId: number, userId: number, tzo: string) => {
  try {
    const transportJob = await getTransportJobByIdService(transportJobId);
    const driver = await findUser(userId);
    const orderId = transportJob.orderId;
    const transportType = transportJob.transportType;
    const currentOrderStatus = transportJob.orderStatus;
    let newOrderStatus: OrderStatus = "WAITING_FOR_PICKUP_DRIVER";

    if (driver.role != "DRIVER") throw { message: "This user can't access this feature" };
    if (transportJob.outletId != driver.Employee!.outletId) throw { message: "Invalid Outlet Id!" };
    if (!driver.Employee!.isPresent) throw { message: "You need to clock in attendance first!" };
    if (transportJob.isCompleted) throw { message: "Job already completed!" };

    const transportJobData: Prisma.TransportJobUpdateArgs = {
      where: { id: transportJobId },
      data: {},
    };
    const driverData: Prisma.EmployeeUpdateArgs = {
      where: { id: driver.Employee!.id },
      data: {},
    };

    if (currentOrderStatus == "WAITING_FOR_PICKUP_DRIVER" || currentOrderStatus == "WAITING_FOR_DELIVERY_DRIVER") {
      await getIdleDriver(userId, +tzo);

      if (transportType == "PICKUP") newOrderStatus = "ON_THE_WAY_TO_CUSTOMER";
      else if (transportType == "DELIVERY") newOrderStatus = "BEING_DELIVERED_TO_CUSTOMER";
      transportJobData.data.driverId = driver.Employee!.id;
      driverData.data.isWorking = true;
    } else if (currentOrderStatus == "ON_THE_WAY_TO_CUSTOMER") {
      if (transportJob.driverId != driver.Employee!.id) throw { message: "Invalid Driver Id!" };

      newOrderStatus = "ON_THE_WAY_TO_OUTLET";
      driverData.data.isWorking = true;
    } else if (currentOrderStatus == "ON_THE_WAY_TO_OUTLET" || currentOrderStatus == "BEING_DELIVERED_TO_CUSTOMER") {
      if (transportJob.driverId != driver.Employee!.id) throw { message: "Invalid Driver Id!" };

      if (transportType == "PICKUP") newOrderStatus = "ARRIVED_AT_OUTLET";
      if (transportType == "DELIVERY") newOrderStatus = "RECEIVED_BY_CUSTOMER";
      transportJobData.data.isCompleted = true;
      driverData.data.isWorking = false;
    } else throw { message: "Invalid Order Status!" };

    await prisma.$transaction(async (tx) => {
      await tx.transportJob.update(transportJobData);
      await tx.employee.update(driverData);
      await tx.order.update({ where: { id: orderId }, data: { orderStatus: newOrderStatus } });
      if (newOrderStatus == "ARRIVED_AT_OUTLET") {
        const outletAdminId = (await tx.user.findFirst({
          where: { Employee: { outletId: driver.Employee!.outletId }, role: "OUTLET_ADMIN" },
        }))!.id;
        await tx.notification.create({
          data: {
            userId: outletAdminId,
            title: "New order alert",
            description: "A new order arrived at the outlet!",
            url: `${process.env.BASE_URL_FE!}/order/${orderId}`,
          },
        });
      }
    });
    return;
  } catch (error) {
    throw error;
  }
};
