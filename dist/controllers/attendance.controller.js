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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createAttendance_service_1 = require("../services/attendance/createAttendance.service");
const getAttendances_service_1 = require("../services/attendance/getAttendances.service");
const finder_service_1 = require("../services/helpers/finder.service");
const prisma_1 = __importDefault(require("../prisma"));
const dateTime_service_1 = require("../services/helpers/dateTime.service");
class AttendanceController {
    createAttendance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { attendanceType } = req.query;
                yield (0, createAttendance_service_1.createAttendanceRecordService)(+req.user.id, attendanceType);
                res.status(201).send({ message: `Attendance record added successfully!` });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getAttendances(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queries = {
                    userId: +req.user.id,
                    attendanceType: req.query.attendanceType,
                    name: req.query.name,
                    role: req.query.role,
                    workShift: req.query.workShift,
                    outletName: req.query.outletName,
                    startDate: req.query.startDate,
                    endDate: req.query.endDate,
                    limit: +req.query.limit || 10,
                    page: +req.query.page || 1,
                    sortBy: req.query.sortBy || "date",
                    sortOrder: req.query.sortOrder || "desc",
                };
                const result = yield (0, getAttendances_service_1.getAttendancesService)(queries);
                res.status(200).send({ data: result.data, meta: result.meta });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getEmployeeStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tzo = +req.query.tzo;
                const user = yield (0, finder_service_1.findUser)(req.user.id);
                if (user.role == "DRIVER" || user.role == "WORKER") {
                    const count = yield prisma_1.default.attendanceRecord.count({ where: { employeeAttendance: { employeeId: user.Employee.id } } });
                    const _a = user.Employee, { EmployeeAttendance, workShift } = _a, employee = __rest(_a, ["EmployeeAttendance", "workShift"]);
                    const canClockIn = EmployeeAttendance[0].canClockIn;
                    const isAttended = EmployeeAttendance[0].isAttended;
                    const shiftStart = EmployeeAttendance[0].createdAt;
                    let isOnWorkShift = false;
                    if (tzo) {
                        const localWorkShift = (0, dateTime_service_1.shiftChecker)(tzo);
                        if (user.Employee.workShift == localWorkShift)
                            isOnWorkShift = true;
                    }
                    else
                        throw { message: "Invalid time zone offset!" };
                    res.status(200).send({ data: Object.assign(Object.assign({}, employee), { workShift, isOnWorkShift, count, canClockIn, isAttended, shiftStart }) });
                }
                else if (user.role == "OUTLET_ADMIN") {
                    const employeeIds = (yield prisma_1.default.employee.findMany({ where: { outletId: user.Employee.outletId }, select: { id: true } })).map((item) => item.id);
                    const count = yield prisma_1.default.attendanceRecord.count({ where: { employeeAttendance: { employeeId: { in: employeeIds } } } });
                    res.status(200).send({ data: { count } });
                }
                else if (user.role == "SUPER_ADMIN") {
                    const count = yield prisma_1.default.attendanceRecord.count();
                    res.status(200).send({ data: { count } });
                }
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.default = AttendanceController;
