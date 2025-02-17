import { Request, Response } from "express";
import { createAttendanceRecordService } from "../services/attendance/createAttendance.service";
import { AttendanceType } from "@prisma/client";

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
}
