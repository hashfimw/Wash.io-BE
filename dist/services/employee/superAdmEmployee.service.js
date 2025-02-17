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
exports.reassignMultipleEmployeesService = exports.assignEmployeeToOutletService = exports.getAllUsersService = exports.deleteEmployeeService = exports.updateEmployeeService = exports.getAllEmployeesService = exports.createEmployeeService = void 0;
const bcrypt_1 = require("bcrypt");
const prisma_1 = __importDefault(require("../../prisma"));
const createEmployeeService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, password, role, workShift, station, outletId } = req.body;
    // Hash password
    const salt = yield (0, bcrypt_1.genSalt)(10);
    const hashedPassword = yield (0, bcrypt_1.hash)(password, salt);
    const employee = yield prisma_1.default.user.create({
        data: {
            fullName,
            email,
            password: hashedPassword,
            role,
            Employee: {
                create: { workShift, station, outletId },
            },
        },
        include: { Employee: true },
    });
    // Hapus password dari response
    const { password: _ } = employee, employeeWithoutPassword = __rest(employee, ["password"]);
    return {
        message: "Employee created successfully! ✅",
        data: employeeWithoutPassword,
    };
});
exports.createEmployeeService = createEmployeeService;
const getAllEmployeesService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employees = yield prisma_1.default.user.findMany({
        where: {
            isDeleted: false,
            role: { in: ["WORKER", "DRIVER", "OUTLET_ADMIN"] },
        },
        include: { Employee: true },
    });
    return {
        message: "Employees fetched successfully",
        data: employees,
    };
});
exports.getAllEmployeesService = getAllEmployeesService;
const updateEmployeeService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
const assignEmployeeToOutletService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, outletId } = req.body;
    const employee = yield prisma_1.default.employee.update({
        where: {
            id: Number(id),
        },
        data: {
            outletId: Number(outletId),
        },
        include: {
            user: true,
            outlet: true,
        },
    });
    return {
        message: "Employee assigned to outlet successfully",
        data: employee,
    };
});
exports.assignEmployeeToOutletService = assignEmployeeToOutletService;
const reassignMultipleEmployeesService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { assignments } = req.body;
    const results = yield prisma_1.default.$transaction(assignments.map((assign) => prisma_1.default.employee.update({
        where: { id: assign.id },
        data: { outletId: assign.outletId },
    })));
    return {
        message: "Multiple employees reassigned successfully",
        data: results,
    };
});
exports.reassignMultipleEmployeesService = reassignMultipleEmployeesService;
