"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendance_controller_1 = __importDefault(require("../controllers/attendance.controller"));
const verifyToken_1 = require("../middlewares/verifyToken");
const attendanceScheduler_service_1 = require("../services/attendance/attendanceScheduler.service");
class AttendanceRouter {
    constructor() {
        this.controller = new attendance_controller_1.default();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", verifyToken_1.verifyToken, this.controller.getAttendances);
        this.router.post("/", verifyToken_1.verifyToken, this.controller.createAttendance);
        this.router.post("/force", verifyToken_1.verifyToken, attendanceScheduler_service_1.forceAlterEmployeeAttendances);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = AttendanceRouter;
