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
const findNearestOutlet_service_1 = require("../services/address/findNearestOutlet.service");
const getAddressById_service_1 = require("../services/address/getAddressById.service");
const deleteUserAddress_service_1 = require("../services/address/deleteUserAddress.service");
const updateUserAddress_service_1 = require("../services/address/updateUserAddress.service");
const createUserAddress_service_1 = require("../services/address/createUserAddress.service");
const prisma_1 = __importDefault(require("../prisma"));
class AddressController {
    findNearestOutlet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, findNearestOutlet_service_1.findNearestOutletService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
    getUserAddresses(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                if (!userId) {
                    res.status(401).json({ message: "Unauthorized: Please login first" });
                }
                const addresses = yield prisma_1.default.address.findMany({
                    where: { customerId: userId, isDeleted: false },
                });
                res.status(200).send({ data: addresses });
            }
            catch (error) {
                console.error(error);
                res
                    .status(500)
                    .json({ message: "Terjadi kesalahan dalam mengambil alamat" });
            }
        });
    }
    getAddressById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getAddressById_service_1.getAddressByIdService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
    createUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, createUserAddress_service_1.createUserAddressService)(req, res);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
    updateUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, updateUserAddress_service_1.updateUserAddressService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
    deleteUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, deleteUserAddress_service_1.deleteUserAddressService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
}
exports.AddressController = AddressController;
