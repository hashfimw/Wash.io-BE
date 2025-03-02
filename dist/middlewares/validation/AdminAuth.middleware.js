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
exports.AdminAuth = void 0;
const client_1 = require("../../../prisma/generated/client");
const prisma_1 = __importDefault(require("../../prisma"));
const AdminAuth = (allowedRoles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            if (!userId) {
                res.status(401).json({ message: "Unauthorized - Please login first" });
                return;
            }
            // Check user role
            const user = yield prisma_1.default.user.findUnique({
                where: { id: Number(userId) },
                include: {
                    Employee: true,
                },
            });
            // Cek apakah role user ada di daftar allowed roles
            if (!user || !allowedRoles.includes(user.role)) {
                res.status(403).json({
                    message: "Access denied - Unauthorized role",
                });
                return;
            }
            // Tambahan logika untuk OUTLET_ADMIN
            if (user.role === client_1.Role.OUTLET_ADMIN) {
                if (!((_b = user.Employee) === null || _b === void 0 ? void 0 : _b.outletId)) {
                    res.status(403).json({
                        message: "Outlet Admin not assigned to any outlet",
                    });
                    return;
                }
                req.outletId = user.Employee.outletId;
            }
            next();
        }
        catch (error) {
            console.error("Multi-role auth error:", error);
            res.status(500).json({ message: "Authorization error" });
        }
    });
};
exports.AdminAuth = AdminAuth;
