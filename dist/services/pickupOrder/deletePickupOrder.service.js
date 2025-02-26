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
exports.deletePickupOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const client_1 = require("../../../prisma/generated/client");
const deletePickupOrderService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const userRole = (_b = req.user) === null || _b === void 0 ? void 0 : _b.role;
        const { id } = req.params;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized: Please login first" });
            return;
        }
        // Hanya customer yang boleh membatalkan order
        if (userRole !== client_1.Role.CUSTOMER) {
            res
                .status(403)
                .json({ message: "Hanya pelanggan yang dapat membatalkan pesanan." });
            return;
        }
        // Cari order berdasarkan ID dan pastikan belum dihapus
        const order = yield prisma_1.default.order.findUnique({
            where: { id: Number(id), isDeleted: false },
        });
        if (!order) {
            res
                .status(404)
                .json({ message: "Order tidak ditemukan atau sudah dihapus." });
            return;
        }
        // Hanya bisa dibatalkan jika masih dalam tahap pickup
        if (order.orderStatus !== client_1.OrderStatus.WAITING_FOR_PICKUP_DRIVER) {
            res
                .status(403)
                .json({ message: "Order tidak dapat dibatalkan pada tahap ini." });
            return;
        }
        // Update status menjadi CANCELLED_BY_CUSTOMER
        yield prisma_1.default.order.update({
            where: { id: Number(id) },
            data: {
                orderStatus: client_1.OrderStatus.CANCELLED_BY_CUSTOMER,
                isDeleted: true,
                deletedAt: new Date(),
            },
        });
        res.status(200).json({ message: "Pickup order berhasil dibatalkan." });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
});
exports.deletePickupOrderService = deletePickupOrderService;
