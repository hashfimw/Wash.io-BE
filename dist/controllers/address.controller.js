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
exports.AddressController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class AddressController {
    constructor() {
        this.haversineDistance = (lat1, lon1, lat2, lon2) => {
            const toRad = (value) => (value * Math.PI) / 180;
            const R = 6371; // Radius bumi dalam km
            const dLat = toRad(lat2 - lat1);
            const dLon = toRad(lon2 - lon1);
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRad(lat1)) *
                    Math.cos(toRad(lat2)) *
                    Math.sin(dLon / 2) *
                    Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c; // Jarak dalam km
        };
    }
    findNearestOutlet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { latitude, longitude } = req.body;
                if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
                    res.status(400).json({
                        message: "Latitude dan Longitude diperlukan dan harus berupa angka",
                    });
                    return;
                }
                const outlets = yield prisma_1.default.outlet.findMany({
                    include: { outletAddress: true },
                });
                if (outlets.length === 0) {
                    res.status(404).json({ message: "Tidak ada outlet yang tersedia" });
                    return;
                }
                const nearestOutlet = outlets
                    .map((outlet) => {
                    const distance = this.haversineDistance(parseFloat(latitude), parseFloat(longitude), parseFloat(outlet.outletAddress.latitude), parseFloat(outlet.outletAddress.longitude));
                    return Object.assign(Object.assign({}, outlet), { distance });
                })
                    .sort((a, b) => a.distance - b.distance)[0];
                res.json({ nearestOutlet });
            }
            catch (error) {
                console.error(error);
                res
                    .status(500)
                    .json({ message: "Terjadi kesalahan dalam pencarian outlet" });
            }
        });
    }
    getUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.params;
                const addresses = yield prisma_1.default.address.findMany({
                    where: { customerId: parseInt(userId), isDeleted: false },
                });
                res.json(addresses);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ message: "Terjadi kesalahan dalam mengambil alamat pengguna" });
            }
        });
    }
    getAddressById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { addressId } = req.params;
                const address = yield prisma_1.default.address.findUnique({
                    where: { id: parseInt(addressId), isDeleted: false },
                });
                if (!address) {
                    res.status(404).json({ message: "Alamat tidak ditemukan" });
                    return;
                }
                res.json(address);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ message: "Terjadi kesalahan dalam mengambil alamat" });
            }
        });
    }
    createUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { customerId, addressLine, province, regency, district, village, latitude, longitude, isPrimary, } = req.body;
                if (isPrimary) {
                    yield prisma_1.default.address.updateMany({
                        where: { customerId, isPrimary: true },
                        data: { isPrimary: false },
                    });
                }
                const address = yield prisma_1.default.address.create({
                    data: {
                        customerId,
                        addressLine,
                        province,
                        regency,
                        district,
                        village,
                        latitude,
                        longitude,
                        isPrimary,
                    },
                });
                res.status(201).json(address);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ message: "Terjadi kesalahan dalam membuat alamat" });
            }
        });
    }
    updateUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { addressId } = req.params;
                const data = req.body;
                if (data.isPrimary) {
                    yield prisma_1.default.address.updateMany({
                        where: { customerId: data.customerId, isPrimary: true },
                        data: { isPrimary: false },
                    });
                }
                const updatedAddress = yield prisma_1.default.address.update({
                    where: { id: parseInt(addressId), isDeleted: false },
                    data,
                });
                res.json(updatedAddress);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ message: "Terjadi kesalahan dalam memperbarui alamat" });
            }
        });
    }
    deleteUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { addressId } = req.params;
                yield prisma_1.default.address.update({
                    where: { id: parseInt(addressId) },
                    data: { isDeleted: true, deletedAt: new Date() },
                });
                res.json({ message: "Alamat berhasil dihapus" });
            }
            catch (error) {
                res
                    .status(500)
                    .json({ message: "Terjadi kesalahan dalam menghapus alamat" });
            }
        });
    }
}
exports.AddressController = AddressController;
