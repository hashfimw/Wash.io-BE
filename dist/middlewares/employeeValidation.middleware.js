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
exports.validateDeleteEmployee = exports.validateUpdateEmployee = exports.validateCreateEmployee = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const client_1 = require("../../prisma/generated/client");
const validateCreateEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, email, password, role, workShift, station, outletId } = req.body;
        // Validasi input dasar
        if (!fullName || !email || !password || !role || !workShift || !outletId) {
            res.status(400).json({ message: "Missing required fields" });
            return;
        }
        // Validasi email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            res.status(400).json({ message: "Invalid email format" });
            return;
        }
        // Validasi email unik
        const existingUser = yield prisma_1.default.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            res.status(400).json({ message: "Email already exists" });
            return;
        }
        // Validasi outlet exists
        const outletExists = yield prisma_1.default.outlet.findFirst({
            where: {
                id: outletId,
                isDeleted: false,
            },
        });
        if (!outletExists) {
            res.status(404).json({ message: "Outlet not found" });
            return;
        }
        // Validasi role dan station
        if (role === client_1.Role.WORKER && !station) {
            res.status(400).json({ message: "Worker must have a station" });
            return;
        }
        if (role === client_1.Role.DRIVER && station) {
            res.status(400).json({ message: "Driver cannot have a station" });
            return;
        }
        if (station && !Object.values(client_1.WorkerStation).includes(station)) {
            res.status(400).json({ message: "Invalid station type" });
            return;
        }
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Validation error" });
    }
});
exports.validateCreateEmployee = validateCreateEmployee;
const validateUpdateEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { email, station, outletId } = req.body;
        // Validasi employee exists
        const existingEmployee = yield prisma_1.default.user.findFirst({
            where: {
                id: Number(id),
                isDeleted: false,
            },
            include: { Employee: true },
        });
        if (!existingEmployee) {
            res.status(404).json({ message: "Employee not found" });
            return;
        }
        // Validasi email jika diubah
        if (email && email !== existingEmployee.email) {
            const emailExists = yield prisma_1.default.user.findFirst({
                where: {
                    email,
                    id: { not: Number(id) },
                },
            });
            if (emailExists) {
                res.status(400).json({ message: "Email already exists" });
                return;
            }
        }
        // Validasi outlet jika diubah
        if (outletId) {
            const outletExists = yield prisma_1.default.outlet.findFirst({
                where: {
                    id: outletId,
                    isDeleted: false,
                },
            });
            if (!outletExists) {
                res.status(404).json({ message: "Outlet not found" });
                return;
            }
        }
        // Validasi station berdasarkan role
        if (station) {
            if (existingEmployee.role === client_1.Role.DRIVER) {
                res.status(400).json({ message: "Cannot assign station to driver" });
                return;
            }
            if (!Object.values(client_1.WorkerStation).includes(station)) {
                res.status(400).json({ message: "Invalid station type" });
                return;
            }
        }
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Validation error" });
    }
});
exports.validateUpdateEmployee = validateUpdateEmployee;
const validateDeleteEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id } = req.params;
        // Validasi id format
        if (!id || isNaN(Number(id))) {
            res.status(400).json({ message: "Invalid employee ID" });
            return;
        }
        // Validasi employee exists dan belum dihapus
        const existingEmployee = yield prisma_1.default.user.findFirst({
            where: {
                id: Number(id),
                isDeleted: false,
            },
            include: {
                Employee: true,
            },
        });
        if (!existingEmployee) {
            res
                .status(404)
                .json({ message: "Employee not found or already deleted" });
            return;
        }
        // Validasi role (optional: jika ada role yang tidak boleh dihapus)
        if (existingEmployee.role === client_1.Role.SUPER_ADMIN) {
            res.status(403).json({ message: "Cannot delete super admin account" });
            return;
        }
        // Validasi employee masih aktif bekerja
        if ((_a = existingEmployee.Employee) === null || _a === void 0 ? void 0 : _a.isWorking) {
            res
                .status(400)
                .json({ message: "Cannot delete employee while they are working" });
            return;
        }
        next();
    }
    catch (error) {
        console.error("Delete validation error:", error);
        res.status(500).json({ message: "Validation error" });
    }
});
exports.validateDeleteEmployee = validateDeleteEmployee;
