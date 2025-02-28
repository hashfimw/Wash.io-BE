import prisma from "../../prisma";
import { OrderStatus, Prisma } from "../../../prisma/generated/client";
import { findUser, getIdleEmployees } from "../helpers/finder.service";
import { createMultipleNotificationDataService } from "../notification/notification.service";
import { getIdleWorker, getLaundryJobByIdService } from "./getLaundryJob.service";

interface OrderItemInput {
  orderItemId: number;
  qty: number;
}

export const updateLaundryJobByIdService = async (laundryJobId: number, userId: number, orderItemInput: OrderItemInput[], tzo: number) => {
  try {
    const laundryJob = await getLaundryJobByIdService(userId, laundryJobId);
    const worker = await findUser(userId);
    const orderId = laundryJob.orderId;
    const station = laundryJob.station;
    let currentOrderStatus = laundryJob.orderStatus;
    let newOrderStatus: OrderStatus = "WAITING_FOR_PICKUP_DRIVER";

    if (worker.role != "WORKER") throw { message: "This user can't access this feature" };
    if (!worker.Employee!.isPresent) throw { message: "You need to clock in attendance first!" };
    if (laundryJob.isCompleted) throw { message: "Job already completed!" };

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
      await getIdleWorker(userId, tzo);
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
      if (laundryJob.employeeId != worker.Employee!.id) throw { message: "Invalid Worker Id!" };
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
          return { ...item, url: `/employee-dashboard/driver/${transportJobId}` };
        });
        await tx.notification.createMany({ data: notificationData });
      }
      if (currentOrderStatus == "BEING_WASHED" || currentOrderStatus == "BEING_IRONED") {
        const laundryJobId = (await tx.laundryJob.create({ data: newLaundryJobData })).id;
        notificationData = notificationData.map((item) => {
          return { ...item, url: `/employee-dashboard/worker/${laundryJobId}` };
        });
        await tx.notification.createMany({ data: notificationData });
      }
      if (newOrderStatus == "AWAITING_PAYMENT") {
        const customerId = (await tx.order.findFirst({ where: { id: orderId }, include: { customerAddress: true } }))?.customerAddress!.customerId!;

        await tx.notification.create({
          data: {
            userId: customerId,
            title: "Order payment alert",
            description: "Your fresh laundry has been packed and waiting to be paid before being delivered. Pay your order now!",
            url: `/order/${orderId}`,
          },
        });
      }
    });

    return;
  } catch (error) {
    throw error;
  }
};
