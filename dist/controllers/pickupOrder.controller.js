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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupOrderController = void 0;
const client_1 = require("../../prisma/generated/client");
const notification_service_1 = require("../services/notification/notification.service");
const finder_service_1 = require("../services/helpers/finder.service");
const prisma = new client_1.PrismaClient();
class PickupOrderController {
    // ✅ Membuat pickup order hanya berdasarkan addressId dari customer
    createPickupOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const { addressId, distance } = req.body;
                console.log("User ID:", userId);
                console.log("Address ID:", addressId);
                // 🔍 Cek apakah alamat milik user dan belum dihapus
                const address = yield prisma.address.findUnique({
                    where: { id: addressId },
                });
                if (!address || address.customerId !== userId || address.isDeleted) {
                    res.status(404).json({ message: "Alamat tidak ditemukan atau bukan milik Anda." });
                    return;
                }
                // 🔍 Cari outlet terdekat berdasarkan koordinat latitude & longitude
                const nearestOutlet = yield prisma.outlet.findFirst({
                    where: { isDeleted: false },
                    orderBy: {
                        outletAddress: {
                            latitude: "asc", // 🛠️ Bisa diubah dengan fungsi jarak jika perlu
                        },
                    },
                });
                if (!nearestOutlet) {
                    res.status(404).json({ message: "Tidak ada outlet yang tersedia." });
                    return;
                }
                let order = {};
                const driverIds = yield (0, finder_service_1.getIdleEmployees)(nearestOutlet.id, "DRIVER");
                // ✅ Buat pickup order tanpa laundryPrice, laundryWeight, dan items
                yield prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    const newOrder = yield tx.order.create({
                        data: {
                            customerAddressId: addressId,
                            outletId: nearestOutlet.id,
                        },
                    });
                    order = newOrder;
                    const transportJobId = (yield tx.transportJob.create({
                        data: { orderId: newOrder.id, transportType: "PICKUP", distance },
                    })).id;
                    yield tx.notification.createMany({
                        data: (0, notification_service_1.createMultipleNotificationDataService)(driverIds, "Pickup Job alert", " A new pickup job is available!", `${process.env.BASE_URL_FE}/transport-job/${transportJobId}`),
                    });
                }));
                res.status(201).json({ message: "Pickup order berhasil dibuat.", order });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Terjadi kesalahan pada server." });
            }
        });
    }
    // ✅ Mendapatkan satu pickup order berdasarkan ID
    getPickupOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const order = yield prisma.order.findFirst({
                    where: { id: Number(id), isDeleted: false },
                    include: { customerAddress: true, outlet: true },
                });
                if (!order) {
                    res.status(404).json({ message: "Pickup order tidak ditemukan." });
                    return;
                }
                res.status(200).json(order);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Terjadi kesalahan pada server." });
            }
        });
    }
    // ✅ Mendapatkan semua pickup order yang masih aktif
    getPickupOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield prisma.order.findMany({
                    where: { isDeleted: false },
                    include: { customerAddress: true, outlet: true },
                });
                res.status(200).json(orders);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Terjadi kesalahan pada server." });
            }
        });
    }
    // ✅ Memperbarui status pickup order
    updatePickupOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { orderStatus } = req.body;
                const order = yield prisma.order.update({
                    where: { id: Number(id) },
                    data: { orderStatus },
                });
                res.status(200).json({ message: "Pickup order berhasil diperbarui.", order });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Terjadi kesalahan pada server." });
            }
        });
    }
    // ✅ Menghapus pickup order secara soft delete
    deletePickupOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma.order.update({
                    where: { id: Number(id) },
                    data: { isDeleted: true, deletedAt: new Date() },
                });
                res.status(200).json({ message: "Pickup order berhasil dihapus." });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Terjadi kesalahan pada server." });
            }
        });
    }
}
exports.PickupOrderController = PickupOrderController;
