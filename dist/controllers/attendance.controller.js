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
Object.defineProperty(exports, "__esModule", { value: true });
const createAttendance_service_1 = require("../services/attendance/createAttendance.service");
const getAttendances_service_1 = require("../services/attendance/getAttendances.service");
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
}
exports.default = AttendanceController;
