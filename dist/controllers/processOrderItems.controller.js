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
exports.processOrderItemController = void 0;
const processOrderItems_service_1 = require("../services/outlets/processOrderItems.service");
class processOrderItemController {
    constructor() {
        this.processOrders = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, processOrderItems_service_1.processOrderService)(req, res);
                res.status(201).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.createLaundryItemController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, processOrderItems_service_1.createOrderItemService)(req, res);
                res.status(201).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.updateLaundryItemController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, processOrderItems_service_1.updateOrderItemService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.deleteLaundryItemController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, processOrderItems_service_1.deleteOrderItemService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.geOrdersItemsByOutletController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, processOrderItems_service_1.getOrderItemService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
}
exports.processOrderItemController = processOrderItemController;
