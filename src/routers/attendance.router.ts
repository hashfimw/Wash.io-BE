import { Router } from "express";
import AttendanceController from "../controllers/attendance.controller";
import { verifyToken } from "../middlewares/verifyToken";
import attendanceSchedule, { forceAlterEmployeeAttendances } from "../services/attendance/attendanceScheduler.service";

export default class AttendanceRouter {
  private controller: AttendanceController;
  private router: Router;

  constructor() {
    this.controller = new AttendanceController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifyToken, this.controller.getAttendances);
    this.router.get("/check", verifyToken, this.controller.getEmployeeStatus);
    this.router.get("/scheduler", attendanceSchedule);
    this.router.post("/", verifyToken, this.controller.createAttendance);
    this.router.post("/force", forceAlterEmployeeAttendances);
  }

  getRouter(): Router {
    return this.router;
  }
}
