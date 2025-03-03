import { getRuntime } from "@prisma/client/runtime/library";
import { OrderStatus, Prisma, Role, WorkerStation } from "../../../prisma/generated/client";
import prisma from "../../prisma";
import { getOutletTzo } from "../attendance/attendanceScheduler.service";
import { shiftChecker } from "./dateTime.service";

export const findUser = async (id: number) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id: id },
      include: {
        Employee: { include: { EmployeeAttendance: true } },
      },
    });
    if (!user) throw { message: "User not found!" };
    if (user.isDeleted) throw { message: "User has been deleted!" };
    if (user.role != "SUPER_ADMIN") {
      if (user.Employee?.employmentStatus != "EMPLOYED") throw { message: "User is no longer employed!" };
      if (user.Employee?.isDeleted) throw { message: "User's employement data has been deleted!" };
    }
    return user;
  } catch (error) {
    throw error;
  }
};

export const getIdleEmployees = async (outletId: number, role: Role, station: WorkerStation | null = null) => {
  try {
    const tzo = await getOutletTzo(outletId);
    const workShift = shiftChecker(tzo);

    const filter: Prisma.EmployeeWhereInput = { outletId, isPresent: true, isWorking: false, isDeleted: false, user: { role }, workShift };
    if (station != null) filter.station = station as WorkerStation;
    const ids = await prisma.employee.findMany({
      where: filter,
      select: { userId: true },
    });

    return ids.map((item) => item.userId);
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
