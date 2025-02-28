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
exports.validateDeleteOutlet = exports.validateUpdateOutlet = exports.validateCreateOutlet = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const validateCreateOutlet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { outletName, addressLine, province, regency, district, village, latitude, longitude, } = req.body;
        // Validasi field yang required
        if (!outletName ||
            !addressLine ||
            !province ||
            !regency ||
            !district ||
            !village) {
            res.status(400).json({ message: "Missing required fields" });
            return;
        }
        // Validasi nama outlet unik
        const existingOutlet = yield prisma_1.default.outlet.findFirst({
            where: {
                outletName,
                isDeleted: false,
            },
        });
        if (existingOutlet) {
            res.status(400).json({ message: "Outlet name already exists" });
            return;
        }
        next();
    }
    catch (error) {
        console.error("Create outlet validation error:", error);
        res.status(500).json({ message: "Validation error" });
    }
});
exports.validateCreateOutlet = validateCreateOutlet;
const validateUpdateOutlet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { outletName, addressLine, province, regency, district, village, latitude, longitude, } = req.body;
        // Validasi outlet exists
        const existingOutlet = yield prisma_1.default.outlet.findFirst({
            where: {
                id: Number(id),
                isDeleted: false,
            },
        });
        if (!existingOutlet) {
            res.status(404).json({ message: "Outlet not found" });
            return;
        }
        // Validasi nama outlet unik jika diubah
        if (outletName && outletName !== existingOutlet.outletName) {
            const nameExists = yield prisma_1.default.outlet.findFirst({
                where: {
                    outletName,
                    id: { not: Number(id) },
                    isDeleted: false,
                },
            });
            if (nameExists) {
                res.status(400).json({ message: "Outlet name already exists" });
                return;
            }
        }
        // Validasi format koordinat jika diubah
        if (latitude || longitude) {
            const latRegex = /^-?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;
            const longRegex = /^-?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
            if (latitude && !latRegex.test(latitude)) {
                res.status(400).json({ message: "Invalid latitude format" });
                return;
            }
            if (longitude && !longRegex.test(longitude)) {
                res.status(400).json({ message: "Invalid longitude format" });
                return;
            }
        }
        next();
    }
    catch (error) {
        console.error("Update outlet validation error:", error);
        res.status(500).json({ message: "Validation error" });
    }
});
exports.validateUpdateOutlet = validateUpdateOutlet;
const validateDeleteOutlet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Validasi id format
        if (!id || isNaN(Number(id))) {
            res.status(400).json({ message: "Invalid outlet ID" });
            return;
        }
        // Validasi outlet exists
        const existingOutlet = yield prisma_1.default.outlet.findFirst({
            where: {
                id: Number(id),
                isDeleted: false,
            },
            include: {
                Employee: {
                    where: { isDeleted: false },
                },
                Order: {
                    where: {
                        isDeleted: false,
                        orderStatus: {
                            notIn: [
                                "COMPLETED",
                                "CANCELLED_BY_CUSTOMER",
                                "CANCELLED_BY_OUTLET",
                            ],
                        },
                    },
                },
            },
        });
        if (!existingOutlet) {
            res.status(404).json({ message: "Outlet not found or already deleted" });
            return;
        }
        // Validasi tidak ada employee aktif
        if (existingOutlet.Employee.length > 0) {
            res.status(400).json({
                message: "Cannot delete outlet with active employees. Please reassign or remove employees first",
            });
            return;
        }
        // Validasi tidak ada order aktif
        if (existingOutlet.Order.length > 0) {
            res.status(400).json({
                message: "Cannot delete outlet with active orders. Please wait until all orders are completed",
            });
            return;
        }
        next();
    }
    catch (error) {
        console.error("Delete outlet validation error:", error);
        res.status(500).json({ message: "Validation error" });
    }
});
exports.validateDeleteOutlet = validateDeleteOutlet;
