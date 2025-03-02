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
exports.validateOutletAdmin = exports.validateWorkerBypass = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const validateWorkerBypass = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validasi keberadaan user
        if (!req.user) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        // Validasi worker dan data employee
        const worker = yield prisma_1.default.user.findUnique({
            where: { id: Number(req.user.id) },
            include: {
                Employee: {
                    include: {
                        outlet: true,
                    },
                },
            },
        });
        if (!worker || !worker.Employee || worker.role !== "WORKER") {
            res
                .status(403)
                .json({ message: "Unauthorized - Only workers can request bypass" });
            return;
        }
        // Validasi laundry job berada di outlet yang sama dengan worker
        const { laundryJobId } = req.body;
        const laundryJob = yield prisma_1.default.laundryJob.findFirst({
            where: {
                id: Number(laundryJobId),
                order: {
                    outletId: worker.Employee.outletId,
                },
            },
        });
        if (!laundryJob) {
            res.status(404).json({ message: "Laundry job not found in this outlet" });
            return;
        }
        // Menyimpan data worker untuk digunakan di service
        res.locals.worker = worker;
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Validation error" });
    }
});
exports.validateWorkerBypass = validateWorkerBypass;
const validateOutletAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const admin = yield prisma_1.default.user.findUnique({
            where: { id: Number(req.user.id) },
            include: {
                Employee: {
                    include: {
                        outlet: true,
                    },
                },
            },
        });
        if (!admin || !admin.Employee || admin.role !== "OUTLET_ADMIN") {
            res.status(403).json({
                message: "Unauthorized - Only outlet admin can access this resource",
            });
            return;
        }
        // Validasi laundry job berada di outlet yang sama
        const { laundryJobId } = req.body;
        const laundryJob = yield prisma_1.default.laundryJob.findFirst({
            where: {
                id: Number(laundryJobId),
                order: {
                    outletId: admin.Employee.outletId,
                },
            },
        });
        if (!laundryJob) {
            res.status(404).json({ message: "Laundry job not found in this outlet" });
            return;
        }
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Authorization error" });
    }
});
exports.validateOutletAdmin = validateOutletAdmin;
