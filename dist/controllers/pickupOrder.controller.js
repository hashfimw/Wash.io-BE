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
const createPickupOrder_service_1 = require("../services/pickupOrder/createPickupOrder.service");
const getPickupOrder_service_1 = require("../services/pickupOrder/getPickupOrder.service");
const deletePickupOrder_service_1 = require("../services/pickupOrder/deletePickupOrder.service");
const getPickupOrders_service_1 = require("../services/pickupOrder/getPickupOrders.service");
class PickupOrderController {
    createPickupOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, createPickupOrder_service_1.createPickupOrderService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
    getPickupOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getPickupOrder_service_1.getPickupOrderService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
    getPickupOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, getPickupOrders_service_1.getAllUserOrdersService)(req, res);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    success: false,
                    message: "Terjadi kesalahan pada server."
                });
            }
        });
    }
    deletePickupOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, deletePickupOrder_service_1.deletePickupOrderService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
}
exports.PickupOrderController = PickupOrderController;
