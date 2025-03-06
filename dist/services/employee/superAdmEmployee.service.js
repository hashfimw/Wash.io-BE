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
exports.getAllUsersService = exports.deleteEmployeeService = exports.updateEmployeeService = exports.getAllEmployeesService = exports.createEmployeeService = void 0;
const bcrypt_1 = require("bcrypt");
const prisma_1 = __importDefault(require("../../prisma"));
const client_1 = require("../../../prisma/generated/client");
const attendanceScheduler_service_1 = require("../attendance/attendanceScheduler.service");
const dateTime_service_1 = require("../helpers/dateTime.service");
const createEmployeeService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Pastikan hanya super admin yang bisa membuat employee
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    if (!user || user.role !== client_1.Role.SUPER_ADMIN) {
        throw new Error("Only Super Admin can create employees");
    }
    const { fullName, email, password, role, workShift, station, outletId } = req.body;
    const salt = yield (0, bcrypt_1.genSalt)(10);
    const hashedPassword = yield (0, bcrypt_1.hash)(password, salt);
    const outletTzo = yield (0, attendanceScheduler_service_1.getOutletTzo)(outletId);
    yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const employee = yield tx.user.create({
            data: {
                fullName,
                email,
                password: hashedPassword,
                role,
                Employee: {
                    create: { workShift, station, outletId },
                },
                isVerified: true,
            },
            include: { Employee: true },
        });
        const workShiftChecker = (0, dateTime_service_1.newEmployeeAttendanceChecker)(outletTzo, workShift);
        if (workShiftChecker) {
            yield tx.employeeAttendance.create({
                data: { canClockIn: true, employeeId: employee.id },
            });
        }
        const { password: _ } = employee, employeeWithoutPassword = __rest(employee, ["password"]);
        return {
            message: "Employee created successfully! ✅",
            data: employeeWithoutPassword,
        };
    }));
});
exports.createEmployeeService = createEmployeeService;
const getAllEmployeesService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Pastikan hanya super admin yang bisa melihat semua employees
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    if (!user || user.role !== client_1.Role.SUPER_ADMIN) {
        throw new Error("Only Super Admin can view all employees");
    }
    const filter = {
        isDeleted: false,
        role: { in: [client_1.Role.WORKER, client_1.Role.DRIVER, client_1.Role.OUTLET_ADMIN] },
    };
    const { page = 1, limit = 10, sortOrder = "asc", role, outletName } = req.query;
    const search = req.query.search;
    let sortBy = req.query.sortBy;
    if (!sortBy)
        sortBy = "fullName";
    if (search) {
        filter.OR = [{ fullName: { contains: search, mode: "insensitive" } }, { email: { contains: search, mode: "insensitive" } }];
    }
    if (role && role !== "ALL Role") {
        filter.role = role;
    }
    if (outletName) {
        const outlet = yield prisma_1.default.outlet.findFirst({
            where: { outletName: outletName },
        });
        if (outlet) {
            const employeeIds = (yield prisma_1.default.employee.findMany({
                where: { outletId: outlet.id },
            })).map((item) => item.userId);
            filter.id = { in: employeeIds };
        }
    }
    const employees = yield prisma_1.default.user.findMany({
        where: filter,
        include: {
            Employee: {
                include: { outlet: true },
            },
        },
        take: +limit,
        skip: (+page - 1) * +limit,
        orderBy: { [sortBy]: sortOrder },
    });
    const count = yield prisma_1.default.user.count({
        where: filter,
    });
    const total = Math.ceil(count / +limit);
    return {
        message: "Employees fetched successfully",
        data: employees,
        meta: {
            page,
            limit,
            total,
        },
    };
});
exports.getAllEmployeesService = getAllEmployeesService;
const updateEmployeeService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Pastikan hanya super admin yang bisa update employee
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    if (!user || user.role !== client_1.Role.SUPER_ADMIN) {
        throw new Error("Only Super Admin can update employees");
    }
    const { id } = req.params;
    const { fullName, email, workShift, station, outletId } = req.body;
    const employee = yield prisma_1.default.user.update({
        where: { id: Number(id) },
        data: {
            fullName: fullName || undefined,
            email: email || undefined,
            Employee: {
                update: {
                    workShift: workShift || undefined,
                    station: station || undefined,
                    outletId: outletId || undefined,
                },
            },
        },
        include: { Employee: true },
    });
    return {
        message: "Employee updated successfully",
        data: employee,
    };
});
exports.updateEmployeeService = updateEmployeeService;
const deleteEmployeeService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Pastikan hanya super admin yang bisa delete employee
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    if (!user || user.role !== client_1.Role.SUPER_ADMIN) {
        throw new Error("Only Super Admin can delete employees");
    }
    const { id } = req.params;
    yield prisma_1.default.$transaction([
        prisma_1.default.employee.update({
            where: { userId: Number(id) },
            data: { isDeleted: true, deletedAt: new Date() },
        }),
        prisma_1.default.user.update({
            where: { id: Number(id) },
            data: { isDeleted: true, deletedAt: new Date() },
        }),
    ]);
    return {
        message: "Employee deleted successfully",
    };
});
exports.deleteEmployeeService = deleteEmployeeService;
const getAllUsersService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Pastikan hanya super admin yang bisa melihat semua users
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    if (!user || user.role !== client_1.Role.SUPER_ADMIN) {
        throw new Error("Only Super Admin can view all users");
    }
    const users = yield prisma_1.default.user.findMany({
        where: { isDeleted: false },
        include: { Employee: true },
    });
    return {
        message: "Users fetched successfully",
        data: users,
    };
});
exports.getAllUsersService = getAllUsersService;
