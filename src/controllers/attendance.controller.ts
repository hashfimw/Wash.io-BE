import { Request, Response } from "express";
import { createAttendanceRecordService } from "../services/attendance/createAttendance.service";
import { AttendanceType } from "@prisma/client";
import { getAttendancesService } from "../services/attendance/getAttendances.service";

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
        requestType: req.query.requestType as string,
        attendanceType: (req.query.attendanceType as string) || "all",
        role: (req.query.role as string) || "all",
        startDate: req.query.startDate as string,
        endDate: req.query.endDate as string,
        limit: (req.query.limit as string) || "10",
        page: (req.query.page as string) || "1",
        sortBy: (req.query.sortBy as string) || "createdAt",
        sortOrder: (req.query.sortOrder as string) || "desc",
      };

      const result = await getAttendancesService(queries);

      res.status(200).send({ data: result.data, meta: result.meta });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
