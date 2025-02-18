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
exports.forceAlterEmployeeAttendances = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const geo_tz_1 = require("geo-tz");
const luxon_1 = require("luxon");
const finder_service_1 = require("../helpers/finder.service");
const shiftStartScheduler = (ids, workShift) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getEmployeeIds = yield prisma_1.default.employee.findMany({
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
        yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            yield tx.employeeAttendance.createManyAndReturn({
                data: employeeIds,
            });
            yield tx.employee.updateMany({
                where: { id: { in: arrIds } },
                data: { isPresent: false },
            });
        }));
        console.log({ message: `Employee attendances created on ${employeeIds.length} Employee(s)` });
        return employeeIds.length;
    }
    catch (error) {
        throw error;
    }
});
const shiftEndScheduler = (ids, workShift) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employeeAttendenceIds = (yield prisma_1.default.employee.findMany({
            where: { outletId: { in: ids }, isDeleted: false, workShift: workShift },
            select: { EmployeeAttendance: { select: { id: true }, orderBy: { id: "desc" }, take: 1 } },
        })).map((item) => {
            return item.EmployeeAttendance[0].id;
        });
        yield prisma_1.default.employeeAttendance.updateMany({
            where: { id: { in: employeeAttendenceIds } },
            data: { canClockIn: false },
        });
        console.log({ message: `Employee attendances updated on ${employeeAttendenceIds.length} Employee(s)` });
        return employeeAttendenceIds.length;
    }
    catch (error) {
        throw error;
    }
});
const groupByOffset = (outlets) => {
    const outletsCoord = outlets.map((outlet) => {
        const tz = (0, geo_tz_1.find)(+outlet.outletAddress.latitude, +outlet.outletAddress.longitude)[0];
        const offset = luxon_1.DateTime.now().setZone(tz).offset;
        return { id: outlet.id, offset: offset };
    });
    const tzMap = new Map();
    for (const item of outletsCoord) {
        if (!tzMap.has(item.offset))
            tzMap.set(item.offset, [item.id]);
        else
            tzMap.get(item.offset).push(item.id);
    }
    return Array.from(tzMap.entries()).map(([offset, ids]) => ({
        offset,
        ids,
    }));
};
const attendanceSchedule = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getOutlets = yield prisma_1.default.outlet.findMany({
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
            if (offsetedMinute < 0)
                offsetedMinute = 1440 + offsetedMinute;
            const currentHour = Math.round(((offsetedMinute / 60) % 24) * 100) / 100;
            console.log({ tzo: item.offset, currentHour: currentHour, outlets: item.ids });
            console.log({ start: { MORNING: currentHour == 5, NOON: currentHour == 13, NIGHT: currentHour == 21 } });
            console.log({ end: { MORNING: currentHour == 6, NOON: currentHour == 14, NIGHT: currentHour == 22 } });
            if (currentHour == 5)
                yield shiftStartScheduler(item.ids, "MORNING");
            if (currentHour == 6)
                yield shiftEndScheduler(item.ids, "NIGHT");
            if (currentHour == 13)
                yield shiftStartScheduler(item.ids, "NOON");
            if (currentHour == 14)
                yield shiftEndScheduler(item.ids, "MORNING");
            if (currentHour == 21)
                yield shiftStartScheduler(item.ids, "NIGHT");
            if (currentHour == 22)
                yield shiftEndScheduler(item.ids, "NOON");
        }
        console.log(`running cron job at ${new Date().toLocaleString()}`);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = attendanceSchedule;
const forceAlterEmployeeAttendances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workShift = req.query.workShift;
        const requestType = req.query.requestType;
        const admin = yield (0, finder_service_1.findUser)(+req.user.id);
        if (admin.role != "OUTLET_ADMIN")
            throw { message: "This user can't access this feature" };
        const outletId = admin.Employee.outletId;
        let length = 0;
        if (requestType == "start") {
            if (workShift == "MORNING")
                length = yield shiftStartScheduler([outletId], "MORNING");
            else if (workShift == "NOON")
                length = yield shiftStartScheduler([outletId], "NOON");
            else if (workShift == "NIGHT")
                length = yield shiftStartScheduler([outletId], "NIGHT");
            else
                throw { message: "Invalid work shift request type!" };
        }
        else if (requestType == "end") {
            if (workShift == "MORNING")
                length = yield shiftEndScheduler([outletId], "MORNING");
            else if (workShift == "NOON")
                length = yield shiftEndScheduler([outletId], "NOON");
            else if (workShift == "NIGHT")
                length = yield shiftEndScheduler([outletId], "NIGHT");
            else
                throw { message: "Invalid work shift request type!" };
        }
        else
            throw { message: "Invalid request type!" };
        res.status(201).send({ message: `Employee Attendance(s) have forcibly altered on ${length} Employee(s)!` });
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
exports.forceAlterEmployeeAttendances = forceAlterEmployeeAttendances;
