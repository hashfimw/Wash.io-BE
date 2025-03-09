import { Request, Response } from "express";
import { createAttendanceRecordService } from "../services/attendance/createAttendance.service";
import { getAttendancesService } from "../services/attendance/getAttendances.service";
import { AttendanceType } from "../../prisma/generated/client";
import { findUser } from "../services/helpers/finder.service";
import prisma from "../prisma";
import { shiftChecker } from "../services/helpers/dateTime.service";

export default class AttendanceController {
  async createAttendance(req: Request, res: Response) {
    try {
      const { attendanceType } = req.query;

      await createAttendanceRecordService(+req.user!.id, attendanceType as AttendanceType);

      res.status(201).send({ message: `Attendance record added successfully!` });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getAttendances(req: Request, res: Response) {
    try {
      const queries = {
        userId: +req.user!.id,
        attendanceType: req.query.attendanceType as "CLOCK_IN" | "CLOCK_OUT",
        name: req.query.name as string,
        role: req.query.role as "DRIVER" | "WORKER",
        workShift: req.query.workShift as string,
        outletName: req.query.outletName as string,
        startDate: req.query.startDate as string,
        endDate: req.query.endDate as string,
        limit: +(req.query.limit as string) || 10,
        page: +(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || "date",
        sortOrder: (req.query.sortOrder as "asc" | "desc") || "desc",
      };

      const result = await getAttendancesService(queries);

      res.status(200).send({ data: result.data, meta: result.meta });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getEmployeeStatus(req: Request, res: Response) {
    try {
      const tzo = +(req.query.tzo as string);
      const user = await findUser(req.user!.id);
      if (user.role == "DRIVER" || user.role == "WORKER") {
        const count = await prisma.attendanceRecord.count({ where: { employeeAttendance: { employeeId: user.Employee!.id } } });
        const { EmployeeAttendance, workShift, ...employee } = user.Employee!;

        const canClockIn = EmployeeAttendance[0].canClockIn;
        const isAttended = EmployeeAttendance[0].isAttended;

        const shiftStart = EmployeeAttendance[0].createdAt;

        let isOnWorkShift = false;
        if (tzo) {
          const localWorkShift = shiftChecker(tzo);
          if (user.Employee!.workShift == localWorkShift) isOnWorkShift = true;
        } else throw { message: "Invalid time zone offset!" };

        res.status(200).send({ data: { ...employee, workShift, isOnWorkShift, count, canClockIn, isAttended, shiftStart } });
      } else if (user.role == "OUTLET_ADMIN") {
        const employeeIds = (await prisma.employee.findMany({ where: { outletId: user.Employee!.outletId }, select: { id: true } })).map(
          (item) => item.id
        );
        const count = await prisma.attendanceRecord.count({ where: { employeeAttendance: { employeeId: { in: employeeIds } } } });

        res.status(200).send({ data: { count } });
      } else if (user.role == "SUPER_ADMIN") {
        const count = await prisma.attendanceRecord.count();

        res.status(200).send({ data: { count } });
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
