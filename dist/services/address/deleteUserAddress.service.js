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
exports.deleteUserAddressService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const deleteUserAddressService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const { addressId } = req.params;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized: Please login first" });
            return;
        }
        // Cari alamat berdasarkan ID dan pastikan alamat milik user yang login
        const address = yield prisma_1.default.address.findFirst({
            where: {
                id: parseInt(addressId),
                customerId: userId, // Pastikan alamat ini milik user yang login
                isDeleted: false, // Pastikan alamat belum dihapus
            },
        });
        if (!address) {
            res.status(404).json({ message: "Alamat tidak ditemukan atau bukan milik Anda" });
            return;
        }
        // Soft delete alamat
        yield prisma_1.default.address.update({
            where: { id: address.id },
            data: { isDeleted: true, deletedAt: new Date() },
        });
        res.status(200).json({ message: "Alamat berhasil dihapus" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan dalam menghapus alamat" });
    }
});
exports.deleteUserAddressService = deleteUserAddressService;
