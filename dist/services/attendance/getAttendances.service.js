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
const getAttendances = (filter, meta) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const attendances = yield prisma_1.default.attendanceRecord.findMany({
            where: filter,
            skip: (+meta.page - 1) * +meta.limit,
            take: +meta.limit,
            orderBy: { [meta.sortBy]: meta.sortOrder },
            include: { employeeAttendance: { include: { employee: { include: { user: true } } } } },
        });
        const count = yield prisma_1.default.attendanceRecord.count({ where: filter });
        const total = Math.ceil(count / +meta.limit);
        return {
            data: attendances.map((item) => {
                return {
                    date: item.createdAt,
                    attendanceType: item.attendanceType,
                    name: item.employeeAttendance.employee.user.fullName,
                    employeeId: item.employeeAttendance.employeeId,
                    role: item.employeeAttendance.employee.user.role,
                };
            }),
            meta: { page: meta.page, limit: meta.limit, total: total },
        };
    }
    catch (error) {
        throw error;
    }
});
const findOutletsAttendancesId = (outletId, role) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = {
            where: { employee: { outletId } },
            select: { id: true },
        };
        if (role != "all")
            filter.where.employee.user.role = role;
        const ids = yield prisma_1.default.employeeAttendance.findMany(filter);
        return ids.map((item) => item.id);
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
        filter.createdAt = { gt: dates.start };
        filter.createdAt = { lt: dates.end };
        if (queries.attendanceType != "all")
            filter.attendanceType = queries.attendanceType;
        if (queries.requestType == "employee") {
            if (employee.role != "DRIVER" && employee.role != "WORKER")
                throw { message: "This user can't access this feature!" };
            filter.employeeAttendanceId = { in: employee.Employee.EmployeeAttendance.map((item) => item.id) };
        }
        else if (queries.requestType == "outlet") {
            if (employee.role != "OUTLET_ADMIN")
                throw { message: "This user can't access this feature!" };
            const attendanceIds = yield findOutletsAttendancesId(employee.Employee.outletId, queries.role);
            filter.employeeAttendanceId = { in: attendanceIds };
        }
        else
            throw { message: "Invalid request type!" };
        return yield getAttendances(filter, queries);
    }
    catch (error) {
        throw error;
    }
});
exports.getAttendancesService = getAttendancesService;
