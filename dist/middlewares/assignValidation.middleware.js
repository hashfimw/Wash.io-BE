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
exports.validateMultipleAssignments = exports.validateAssignEmployee = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const client_1 = require("../../prisma/generated/client");
const validateAssignEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, outletId } = req.body; // id dari tabel Employee
        // Validasi input
        if (!id || !outletId) {
            res
                .status(400)
                .json({ message: "Employee ID and Outlet ID are required" });
            return;
        }
        // Validasi employee exists
        const employee = yield prisma_1.default.employee.findFirst({
            where: {
                id: Number(id),
                isDeleted: false,
            },
            include: {
                user: true,
            },
        });
        if (!employee) {
            res.status(404).json({ message: "Employee not found" });
            return;
        }
        // Validasi outlet exists
        const outlet = yield prisma_1.default.outlet.findFirst({
            where: {
                id: Number(outletId),
                isDeleted: false,
            },
        });
        if (!outlet) {
            res.status(404).json({ message: "Outlet not found" });
            return;
        }
        // Validasi jika outlet sudah memiliki outlet admin
        if (employee.user.role === client_1.Role.OUTLET_ADMIN) {
            const existingAdmin = yield prisma_1.default.employee.findFirst({
                where: {
                    outletId: Number(outletId),
                    user: {
                        role: client_1.Role.OUTLET_ADMIN,
                        isDeleted: false,
                    },
                    isDeleted: false,
                    id: { not: Number(id) }, // exclude current employee
                },
            });
            if (existingAdmin) {
                res
                    .status(400)
                    .json({ message: "Outlet already has an admin assigned" });
                return;
            }
        }
        next();
    }
    catch (error) {
        console.error("Assignment validation error:", error);
        res.status(500).json({ message: "Validation error" });
    }
});
exports.validateAssignEmployee = validateAssignEmployee;
const validateMultipleAssignments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { assignments } = req.body;
        if (!Array.isArray(assignments) || assignments.length === 0) {
            res.status(400).json({ message: "Invalid assignments format" });
            return;
        }
        for (const assign of assignments) {
            const { employeeId, outletId } = assign;
            const employee = yield prisma_1.default.user.findFirst({
                where: {
                    id: Number(employeeId),
                    isDeleted: false,
                },
            });
            if (!employee) {
                res.status(404).json({ message: `Employee ${employeeId} not found` });
                return;
            }
            const outlet = yield prisma_1.default.outlet.findFirst({
                where: {
                    id: Number(outletId),
                    isDeleted: false,
                },
            });
            if (!outlet) {
                res.status(404).json({ message: `Outlet ${outletId} not found` });
                return;
            }
        }
        next();
    }
    catch (error) {
        console.error("Multiple assignment validation error:", error);
        res.status(500).json({ message: "Validation error" });
    }
});
exports.validateMultipleAssignments = validateMultipleAssignments;
