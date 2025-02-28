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
exports.getAddressByIdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getAddressByIdService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const { addressId } = req.params;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized: Please login first" });
            return;
        }
        const address = yield prisma_1.default.address.findFirst({
            where: {
                id: Number(addressId),
                customerId: userId,
                isDeleted: false,
            },
        });
        if (!address) {
            res.status(404).json({ message: "Alamat tidak ditemukan atau bukan milik Anda" });
            return;
        }
        res.status(200).json(address);
    }
    catch (error) {
        console.error("Error mengambil alamat:", error);
        res.status(500).json({ message: "Terjadi kesalahan dalam mengambil alamat" });
    }
});
exports.getAddressByIdService = getAddressByIdService;
