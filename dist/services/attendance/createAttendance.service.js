"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAttendanceRecordService = exports.getTodaysAttendance = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const finder_service_1 = require("../helpers/finder.service");
const getEmployee = (userId, attendanceType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield (0, finder_service_1.findUser)(userId);
        if (!attendanceType)
            throw { message: "Invalid attendance type request!" };
        if (employee.role != "DRIVER" && employee.role != "WORKER")
            throw { message: "This user can't access this feature!" };
        if (employee.Employee.isPresent && attendanceType == "CLOCK_IN")
            throw { message: "Employee has already clocked in!" };
        if (employee.Employee.isWorking)
            throw { message: "Cannot submit an attendance if currently working on a job!" };
        return employee;
    }
    catch (error) {
        throw error;
    }
});
const getTodaysAttendance = (employeeId, attendanceType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentTime = new Date().getTime();
        const last9Hours = new Date(currentTime - 32460000);
        const last24Hours = new Date(currentTime - 86460000);
        const filter = { employeeId };
        if (attendanceType == "CLOCK_IN")
            filter.createdAt = { gt: last9Hours };
        else if (attendanceType == "CLOCK_OUT")
            filter.createdAt = { gt: last24Hours };
        else
            throw { message: "Invalid attendance type request!" };
        const attendance = (yield prisma_1.default.employeeAttendance.findMany({
            where: filter,
            take: 1,
            orderBy: { createdAt: "desc" },
        }))[0];
        if (!attendance)
            throw { message: "Attendance record cannot be created. You are currently outside of the shift hours!" };
        if (attendanceType == "CLOCK_IN") {
            if (attendance.isAttended)
                throw { message: "Employee has already clocked in in the current shift!" };
            if (!attendance.canClockIn)
                throw { message: "Attendance record cannot be created. You are currently outside of the shift hours!" };
        }
        if (attendanceType == "CLOCK_OUT" && !attendance.isAttended)
            throw { message: "Employee hasn't clocked in!" };
        return attendance;
    }
    catch (error) {
        throw error;
    }
});
exports.getTodaysAttendance = getTodaysAttendance;
const createAttendanceRecordService = (userId, attendanceType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield getEmployee(userId, attendanceType);
        const employeeAttendanceId = (yield (0, exports.getTodaysAttendance)(employee.Employee.id, attendanceType)).id;
        if (!employee.Employee.isPresent && attendanceType == "CLOCK_OUT")
            throw { message: "Employee has already clocked out!" };
        yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            yield tx.attendanceRecord.create({
                data: {
                    attendanceType: attendanceType,
                    employeeAttendanceId,
                },
            });
            if (attendanceType == "CLOCK_IN") {
                yield tx.employeeAttendance.update({
                    where: { id: employeeAttendanceId },
                    data: { isAttended: true, canClockIn: false, employee: { update: { isPresent: true } } },
                });
            }
            else if (attendanceType == "CLOCK_OUT") {
                yield tx.employeeAttendance.update({
                    where: { id: employeeAttendanceId },
                    data: { employee: { update: { isPresent: false } } },
                });
            }
        }));
        return;
    }
    catch (error) {
        throw error;
    }
});
exports.createAttendanceRecordService = createAttendanceRecordService;
