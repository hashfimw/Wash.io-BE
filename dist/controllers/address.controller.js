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
exports.AddressController = void 0;
const findNearestOutlet_service_1 = require("../services/address/findNearestOutlet.service");
const getAddressById_service_1 = require("../services/address/getAddressById.service");
const deleteUserAddress_service_1 = require("../services/address/deleteUserAddress.service");
const updateUserAddress_service_1 = require("../services/address/updateUserAddress.service");
class AddressController {
    findNearestOutlet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, findNearestOutlet_service_1.findNearestOutletService)(req, res);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getAddressById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getAddressById_service_1.getAddressByIdService)(req, res);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    createUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getAddressById_service_1.getAddressByIdService)(req, res);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    updateUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, updateUserAddress_service_1.updateUserAddressService)(req, res);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    deleteUserAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, deleteUserAddress_service_1.deleteUserAddressService)(req, res);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.AddressController = AddressController;
