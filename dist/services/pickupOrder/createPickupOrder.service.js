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
exports.createPickupOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const haversine_1 = require("../../utils/haversine");
const finder_service_1 = require("../helpers/finder.service");
const notification_service_1 = require("../notification/notification.service");
const findNearestOutlet = (latitude, longitude) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
            throw {
                message: "Latitude dan Longitude diperlukan dan harus berupa angka",
            };
        }
        const outlets = yield prisma_1.default.outlet.findMany({
            include: { outletAddress: true },
        });
        if (outlets.length === 0) {
            throw { message: "Tidak ada outlet yang tersedia" };
        }
        const nearestOutlet = outlets
            .map((outlet) => {
            const distance = (0, haversine_1.haversineDistance)(parseFloat(latitude), parseFloat(longitude), parseFloat(outlet.outletAddress.latitude), parseFloat(outlet.outletAddress.longitude));
            return Object.assign(Object.assign({}, outlet), { distance });
        })
            .sort((a, b) => a.distance - b.distance)[0];
        return nearestOutlet;
    }
    catch (error) {
        throw error;
    }
});
const createPickupOrderService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log("Request body:", req.body);
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const { addressId } = req.body;
        console.log("User ID:", userId);
        console.log("Address ID:", addressId);
        // Cek apakah alamat milik user dan belum dihapus
        const address = yield prisma_1.default.address.findUnique({
            where: { id: addressId },
        });
        if (!address || address.customerId !== userId || address.isDeleted) {
            res.status(404).json({ message: "Alamat tidak ditemukan atau bukan milik Anda." });
            return;
        }
        // Cari outlet terdekat berdasarkan koordinat latitude & longitude
        const nearestOutlet = yield findNearestOutlet(address.latitude, address.longitude);
        if (!nearestOutlet) {
            res.status(404).json({ message: "Tidak ada outlet yang tersedia." });
            return;
        }
        yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const order = yield tx.order.create({
                data: {
                    customerAddressId: addressId,
                    outletId: nearestOutlet.id,
                    orderStatus: "WAITING_FOR_PICKUP_DRIVER",
                },
            });
            const driverIds = yield (0, finder_service_1.getIdleEmployees)(nearestOutlet.id, "DRIVER");
            const distance = Math.round(nearestOutlet.distance);
            const transportJobId = (yield tx.transportJob.create({
                data: { orderId: order.id, transportType: "PICKUP", distance: distance },
            })).id;
            if (driverIds.length > 0) {
                yield tx.notification.createMany({
                    data: (0, notification_service_1.createMultipleNotificationDataService)(driverIds, "Pickup Job alert", " A new pickup job is available!", `${process.env.BASE_URL_FE}/employee-dashboard/driver/${transportJobId}`),
                });
            }
            res.status(201).json({ message: "Pickup order berhasil dibuat.", order });
        }));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
});
exports.createPickupOrderService = createPickupOrderService;
