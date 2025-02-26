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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserAddressService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const updateUserAddressService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const { addressId } = req.params;
        const _b = req.body, { isPrimary } = _b, updateData = __rest(_b, ["isPrimary"]);
        if (!userId) {
            res.status(401).json({ message: "Unauthorized: Please login first" });
            return;
        }
        const existingAddress = yield prisma_1.default.address.findFirst({
            where: {
                id: parseInt(addressId),
                customerId: userId,
                isDeleted: false,
            },
        });
        if (!existingAddress) {
            res.status(404).json({ message: "Alamat tidak ditemukan atau bukan milik Anda" });
            return;
        }
        // Jika ingin menjadikan alamat ini sebagai primary, set alamat lain menjadi non-primary
        if (isPrimary) {
            yield prisma_1.default.address.updateMany({
                where: { customerId: userId, isPrimary: true },
                data: { isPrimary: false },
            });
        }
        // Update alamat
        const updatedAddress = yield prisma_1.default.address.update({
            where: { id: existingAddress.id },
            data: Object.assign(Object.assign({}, updateData), { isPrimary }),
        });
        res.status(200).json(updatedAddress);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan dalam memperbarui alamat" });
    }
});
exports.updateUserAddressService = updateUserAddressService;
