import { AttendanceType, Prisma } from "../../../prisma/generated/client";
import prisma from "../../prisma";
import { findUser } from "../helpers/finder.service";

const getEmployee = async (userId: number, attendanceType: AttendanceType) => {
  try {
    const employee = await findUser(userId);

    if (!attendanceType) throw { message: "Invalid attendance type request!" };
    if (employee.role != "DRIVER" && employee.role != "WORKER") throw { message: "This user can't access this feature!" };
    if (employee.Employee!.isPresent && attendanceType == "CLOCK_IN") throw { message: "Employee has already clocked in!" };
    if (employee.Employee!.isWorking) throw { message: "Cannot submit an attendance if currently working on a job!" };

    return employee;
  } catch (error) {
    throw error;
  }
};

export const getTodaysAttendance = async (employeeId: number, attendanceType: AttendanceType) => {
  try {
    const currentTime = new Date().getTime();
    const last9Hours = new Date(currentTime - 32460000);
    const last24Hours = new Date(currentTime - 86460000);

    const filter: Prisma.EmployeeAttendanceWhereInput = { employeeId };
    if (attendanceType == "CLOCK_IN") filter.createdAt = { gt: last9Hours };
    else if (attendanceType == "CLOCK_OUT") filter.createdAt = { gt: last24Hours };
    else throw { message: "Invalid attendance type request!" };

    const attendance = (
      await prisma.employeeAttendance.findMany({
        where: filter,
        take: 1,
        orderBy: { createdAt: "desc" },
      })
    )[0];

    if (!attendance) throw { message: "Attendance record cannot be created. You are currently outside of the shift hours!" };
    if (attendanceType == "CLOCK_IN") {
      if (attendance.isAttended) throw { message: "Employee has already clocked in in the current shift!" };
      if (!attendance.canClockIn) throw { message: "Attendance record cannot be created. You are currently outside of the shift hours!" };
    }
    if (attendanceType == "CLOCK_OUT" && !attendance.isAttended) throw { message: "Employee hasn't clocked in!" };

    return attendance;
  } catch (error) {
    throw error;
  }
};

export const createAttendanceRecordService = async (userId: number, attendanceType: AttendanceType) => {
  try {
    const employee = await getEmployee(userId, attendanceType);
    const employeeAttendanceId = (await getTodaysAttendance(employee.Employee!.id, attendanceType)).id;
    if (!employee.Employee!.isPresent && attendanceType == "CLOCK_OUT") throw { message: "Employee has already clocked out!" };

    await prisma.$transaction(async (tx) => {
      await tx.attendanceRecord.create({
        data: {
          attendanceType: attendanceType,
          employeeAttendanceId,
        },
      });
      if (attendanceType == "CLOCK_IN") {
        await tx.employeeAttendance.update({
          where: { id: employeeAttendanceId },
          data: { isAttended: true, canClockIn: false, employee: { update: { isPresent: true } } },
        });
      } else if (attendanceType == "CLOCK_OUT") {
        await tx.employeeAttendance.update({
          where: { id: employeeAttendanceId },
          data: { employee: { update: { isPresent: false } } },
        });
      }
    });

    return;
  } catch (error) {
    throw error;
  }
};
