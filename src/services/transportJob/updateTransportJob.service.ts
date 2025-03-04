import { OrderStatus, Prisma } from "../../../prisma/generated/client";
import { findUser } from "../helpers/finder.service";
import { getIdleDriver, getTransportJobByIdService } from "./getTransportJob.service";
import { createMultipleNotificationDataService } from "../notification/notification.service";
import prisma from "../../prisma";

export const updateTransportJobByIdService = async (transportJobId: number, userId: number, tzo: number) => {
  try {
    const transportJob = await getTransportJobByIdService(userId, transportJobId);
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

    if (
      currentOrderStatus == "WAITING_FOR_PICKUP_DRIVER" ||
      currentOrderStatus == "WAITING_FOR_DELIVERY_DRIVER" ||
      currentOrderStatus == "READY_FOR_DELIVERY"
    ) {
      await getIdleDriver(userId, tzo);

      if (transportType == "PICKUP") newOrderStatus = "ON_THE_WAY_TO_CUSTOMER";
      else if (transportType == "DELIVERY") newOrderStatus = "BEING_DELIVERED_TO_CUSTOMER";
      transportJobData.data.driverId = driver.Employee!.id;
      driverData.data.isWorking = true;
    } else if (currentOrderStatus == "ON_THE_WAY_TO_CUSTOMER") {
      if (transportJob.employeeId != driver.Employee!.id) throw { message: "Invalid Driver Id!" };

      newOrderStatus = "ON_THE_WAY_TO_OUTLET";
      driverData.data.isWorking = true;
    } else if (currentOrderStatus == "ON_THE_WAY_TO_OUTLET" || currentOrderStatus == "BEING_DELIVERED_TO_CUSTOMER") {
      if (transportJob.employeeId != driver.Employee!.id) throw { message: "Invalid Driver Id!" };

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
        const outletAdminIds = (
          await tx.user.findMany({
            where: { Employee: { outletId: driver.Employee!.outletId, isDeleted: false }, role: "OUTLET_ADMIN", isDeleted: false },
            select: { id: true },
          })
        ).map((item) => item.id);
        const superAdminIds = (await tx.user.findMany({ where: { role: "SUPER_ADMIN", isDeleted: false }, select: { id: true } })).map(
          (item) => item.id
        );

        await tx.notification.createMany({
          data: createMultipleNotificationDataService(
            superAdminIds,
            "New order alert",
            "A new order arrived at the outlet!",
            `/dashboard/super-admin/${orderId}`
          ),
        });

        await tx.notification.createMany({
          data: createMultipleNotificationDataService(
            outletAdminIds,
            "New order alert",
            "A new order arrived at the outlet!",
            `/dashboard/outlet-admin/${orderId}`
          ),
        });
      }
      if (newOrderStatus == "RECEIVED_BY_CUSTOMER") {
        const customerId = (await tx.order.findFirst({ where: { id: orderId }, include: { customerAddress: true } }))?.customerAddress!.customerId!;

        await tx.notification.create({
          data: {
            userId: customerId,
            title: "Laundry arrival alert",
            description: "Your fresh laundry has been succesfully delivered to you by our driver. Confirm to finalize your order now!",
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
