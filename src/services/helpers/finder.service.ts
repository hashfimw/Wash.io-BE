import { Prisma, Role, WorkerStation } from "../../../prisma/generated/client";
import prisma from "../../prisma";

export const findUser = async (id: number) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id: id },
      include: {
        Address: true,
        Employee: { include: { outlet: true, LaundryJob: true, TransportJob: true, EmployeeAttendance: true } },
        Notification: true,
      },
    });
    if (!user) throw { message: "User not found!" };
    if (user.isDeleted) throw { message: "User has been deleted!" };
    if (user.Employee?.employmentStatus != "EMPLOYED") throw { message: "User is no longer employed!" };
    if (user.Employee?.isDeleted) throw { message: "User's employement data has been deleted!" };
    return user;
  } catch (error) {
    throw error;
  }
};

export const getIdleEmployees = async (outletId: number, role: Role, station: WorkerStation | null = null) => {
  try {
    const filter: Prisma.EmployeeWhereInput = { outletId, isPresent: true, isWorking: false, isDeleted: false, user: { role } };
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
