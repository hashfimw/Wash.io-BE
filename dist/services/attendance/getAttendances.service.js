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
exports.getAttendancesService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const dateTime_service_1 = require("../helpers/dateTime.service");
const finder_service_1 = require("../helpers/finder.service");
const sorter_service_1 = require("../helpers/sorter.service");
const getAttendances = (filter, meta) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sort = (0, sorter_service_1.attendanceSorter)(meta.sortBy, meta.sortOrder);
        const attendances = yield prisma_1.default.attendanceRecord.findMany({
            where: filter,
            skip: (meta.page - 1) * meta.limit,
            take: meta.limit,
            orderBy: sort,
            include: { employeeAttendance: { include: { employee: { include: { user: true, outlet: true } } } } },
        });
        const total_data = yield prisma_1.default.attendanceRecord.count({ where: filter });
        const total_pages = Math.ceil(total_data / meta.limit);
        if (total_pages > 0 && +meta.page > total_pages)
            throw { message: "Invalid page!" };
        return {
            data: attendances.map((item) => {
                return {
                    id: item.id,
                    date: item.createdAt,
                    attendanceType: item.attendanceType,
                    employeeId: item.employeeAttendance.employeeId,
                    name: item.employeeAttendance.employee.user.fullName,
                    role: item.employeeAttendance.employee.user.role,
                    workShift: item.employeeAttendance.employee.workShift,
                    outletId: item.employeeAttendance.employee.outletId,
                    outletName: item.employeeAttendance.employee.outlet.outletName,
                };
            }),
            meta: { page: meta.page, limit: meta.limit, total_pages: total_pages, total_data: total_data },
        };
    }
    catch (error) {
        throw error;
    }
});
const findOutletsAttendancesId = (outletId, role, workShift, name, outletName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = { workShift: { not: null }, isDeleted: false, employmentStatus: "EMPLOYED" };
        if (outletId)
            filter.outletId = outletId;
        if (workShift)
            filter.workShift = workShift;
        if (role) {
            if (role == "DRIVER")
                filter.station = { equals: null };
            else if (role == "WORKER")
                filter.station = { not: null };
        }
        if (name) {
            const userIds = (yield prisma_1.default.user.findMany({
                where: { OR: [{ role: "DRIVER" }, { role: "WORKER" }], fullName: { contains: name, mode: "insensitive" }, isDeleted: false },
                select: { id: true },
            })).map((item) => item.id);
            filter.userId = { in: userIds };
        }
        if (outletName) {
            const outletIds = (yield prisma_1.default.outlet.findMany({ where: { outletName: { contains: outletName, mode: "insensitive" }, isDeleted: false }, select: { id: true } })).map((item) => item.id);
            filter.outletId = { in: outletIds };
        }
        const employeeIds = (yield prisma_1.default.employee.findMany({ where: filter, select: { id: true } })).map((item) => item.id);
        return (yield prisma_1.default.employeeAttendance.findMany({ where: { employeeId: { in: employeeIds } }, select: { id: true } })).map((item) => item.id);
    }
    catch (error) {
        throw error;
    }
});
const getAttendancesService = (queries) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dates = (0, dateTime_service_1.dateValidator)(queries.startDate, queries.endDate);
        const employee = yield (0, finder_service_1.findUser)(queries.userId);
        const filter = {};
        filter.createdAt = { gt: dates.start, lt: dates.end };
        if (queries.attendanceType)
            filter.attendanceType = queries.attendanceType;
        if (employee.role == "DRIVER" || employee.role == "WORKER") {
            filter.employeeAttendanceId = { in: employee.Employee.EmployeeAttendance.map((item) => item.id) };
        }
        else if (employee.role == "OUTLET_ADMIN") {
            const attendanceIds = yield findOutletsAttendancesId(employee.Employee.outletId, queries.role, queries.workShift, queries.name);
            filter.employeeAttendanceId = { in: attendanceIds };
        }
        else if (employee.role == "SUPER_ADMIN") {
            const attendanceIds = yield findOutletsAttendancesId(undefined, queries.role, queries.workShift, queries.name, queries.outletName);
            filter.employeeAttendanceId = { in: attendanceIds };
        }
        return yield getAttendances(filter, queries);
    }
    catch (error) {
        throw error;
    }
});
exports.getAttendancesService = getAttendancesService;
