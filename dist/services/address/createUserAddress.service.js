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
exports.createUserAddressService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const createUserAddressService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        res.status(500).json({ message: "Terjadi kesalahan dalam membuat alamat" });
    }
});
exports.createUserAddressService = createUserAddressService;
