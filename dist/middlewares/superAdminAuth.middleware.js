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
exports.isSuperAdmin = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const client_1 = require("../../prisma/generated/client");
const isSuperAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Ambil user id dari token
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized - Please login first" });
            return;
        }
        // Check user role - Convert userId to number
        const user = yield prisma_1.default.user.findUnique({
            where: { id: Number(userId) }, // Convert to number
        });
        if (!user || user.role !== client_1.Role.SUPER_ADMIN) {
            res.status(403).json({
                message: "Access denied - Super Admin only",
            });
            return;
        }
        next();
    }
    catch (error) {
        console.error("Super admin auth error:", error);
        res.status(500).json({ message: "Authorization error" });
    }
});
exports.isSuperAdmin = isSuperAdmin;
