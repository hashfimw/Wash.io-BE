import prisma from "../../prisma";
import { find } from "geo-tz";
import { DateTime } from "luxon";
import { Request, Response } from "express";
import { EmployeeWorkShift } from "../../../prisma/generated/client";
import { updateDeliveredOrderStatus } from "../pickupOrder/updatePickupOrder.service";

const shiftStartScheduler = async (ids: number[], workShift: EmployeeWorkShift) => {
  try {
    const getEmployeeIds = await prisma.employee.findMany({
      where: {
        outletId: { in: ids },
        isDeleted: false,
        workShift: workShift,
      },
      select: { id: true },
    });
    const employeeIds = getEmployeeIds.map((employee) => {
      return { employeeId: employee.id, canClockIn: true };
    });
    const arrIds = getEmployeeIds.map((employee) => {
      return employee.id;
    });

    await prisma.$transaction(async (tx) => {
      await tx.employeeAttendance.createManyAndReturn({
        data: employeeIds,
      });

      await tx.employee.updateMany({
        where: { id: { in: arrIds } },
        data: { isPresent: false },
      });
    });
    console.log({ message: `Employee attendances created on ${employeeIds.length} Employee(s)` });

    return employeeIds.length;
  } catch (error) {
    throw error;
  }
};

const shiftEndScheduler = async (ids: number[], workShift: EmployeeWorkShift) => {
  try {
    const employeeAttendence = await prisma.employee.findMany({
      where: { outletId: { in: ids }, isDeleted: false, workShift: workShift },
      select: { EmployeeAttendance: { select: { id: true }, orderBy: { id: "desc" }, take: 1 } },
    });

    const employeeAttendenceIds: number[] = [];
    employeeAttendence.map((item) => {
      if (item.EmployeeAttendance.length > 0) employeeAttendenceIds.push(item.EmployeeAttendance[0].id);
    });

    if (employeeAttendenceIds.length > 0) {
      await prisma.employeeAttendance.updateMany({
        where: { id: { in: employeeAttendenceIds } },
        data: { canClockIn: false },
      });
      console.log({ message: `Employee attendances updated on ${employeeAttendenceIds.length} Employee(s)` });
    }

    return employeeAttendenceIds.length;
  } catch (error) {
    throw error;
  }
};

interface IOutlets {
  id: number;
  outletAddress: {
    latitude: string;
    longitude: string;
  };
}
const groupByOffset = (outlets: IOutlets[]) => {
  const outletsCoord = outlets.map((outlet) => {
    const tz = find(+outlet.outletAddress.latitude, +outlet.outletAddress.longitude)[0];
    const offset = DateTime.now().setZone(tz).offset;
    return { id: outlet.id, offset: offset };
  });
  const tzMap = new Map<number, number[]>();
  for (const item of outletsCoord) {
    if (!tzMap.has(item.offset)) tzMap.set(item.offset, [item.id]);
    else tzMap.get(item.offset)!.push(item.id);
  }
  return Array.from(tzMap.entries()).map(([offset, ids]) => ({
    offset,
    ids,
  }));
};

const attendanceSchedule = async (req: Request, res: Response) => {
  try {
    const getOutlets = await prisma.outlet.findMany({
      where: { isDeleted: false },
      select: {
        id: true,
        outletAddress: { select: { latitude: true, longitude: true } },
      },
    });
    const currentMinute = new Date().getUTCHours() * 60 + new Date().getUTCMinutes();
    const timeZones = groupByOffset(getOutlets);
    for (const item of timeZones) {
      let offsetedMinute = currentMinute + item.offset;
      if (offsetedMinute < 0) offsetedMinute = 1440 + offsetedMinute;
      const currentHour = Math.round(((offsetedMinute / 60) % 24) * 100) / 100;
      console.log({ tzo: item.offset, currentHour: currentHour, outlets: item.ids });
      console.log({ start: { MORNING: currentHour == 5, NOON: currentHour == 13, NIGHT: currentHour == 21 } });
      console.log({ end: { MORNING: currentHour == 6, NOON: currentHour == 14, NIGHT: currentHour == 22 } });
      if (currentHour == 5) await shiftStartScheduler(item.ids, "MORNING");
      if (currentHour == 6) await shiftEndScheduler(item.ids, "NIGHT");
      if (currentHour == 13) await shiftStartScheduler(item.ids, "NOON");
      if (currentHour == 14) await shiftEndScheduler(item.ids, "MORNING");
      if (currentHour == 21) await shiftStartScheduler(item.ids, "NIGHT");
      if (currentHour == 22) await shiftEndScheduler(item.ids, "NOON");
    }
    await updateDeliveredOrderStatus();
    console.log(`running cron job at ${new Date().toLocaleString()}`);
    res.status(200).send({ message: `Successful attendance cron job at ${new Date().toLocaleString()}` });
  } catch (error) {
    console.log(error);
  }
};

export default attendanceSchedule;

export const forceAlterEmployeeAttendances = async (req: Request, res: Response) => {
  try {
    const workShift = req.query.workShift as EmployeeWorkShift;
    const requestType = req.query.requestType as "start" | "end";
    const outletId = +(req.query.outletId as string);

    if (!outletId) throw { message: "Invalid outlet Id!" };

    let length = 0;

    if (requestType == "start") {
      if (workShift == "MORNING") length = await shiftStartScheduler([outletId], "MORNING");
      else if (workShift == "NOON") length = await shiftStartScheduler([outletId], "NOON");
      else if (workShift == "NIGHT") length = await shiftStartScheduler([outletId], "NIGHT");
      else throw { message: "Invalid work shift request type!" };
    } else if (requestType == "end") {
      if (workShift == "MORNING") length = await shiftEndScheduler([outletId], "MORNING");
      else if (workShift == "NOON") length = await shiftEndScheduler([outletId], "NOON");
      else if (workShift == "NIGHT") length = await shiftEndScheduler([outletId], "NIGHT");
      else throw { message: "Invalid work shift request type!" };
    } else throw { message: "Invalid request type!" };

    if (length == 0) throw { message: "No alteration(s) made!" };

    res.status(201).send({ message: `Employee Attendance(s) have forcibly altered on ${length} Employee(s)!` });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getOutletTzo = async (outletId: number) => {
  try {
    const outletData = await prisma.outlet.findUnique({
      where: { id: outletId },
      select: {
        id: true,
        outletAddress: { select: { latitude: true, longitude: true } },
      },
    });

    if (outletData) {
      return groupByOffset([outletData])[0].offset * -1;
    } else throw { message: "Invalid outlet Id!" };
  } catch (error) {
    throw error;
  }
};
