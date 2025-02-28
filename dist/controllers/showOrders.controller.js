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
exports.showOrdersController = void 0;
const orderOutlets_service_1 = require("../services/outlets/orderOutlets.service");
class showOrdersController {
    constructor() {
        this.getAllOrdersController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, orderOutlets_service_1.getAllOrdersService)(req, res);
                res.status(200).json({
                    message: "Get all orders success",
                    data: result,
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.trackOrderController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, orderOutlets_service_1.trackOrderService)(req, res);
                res.status(200).json({
                    message: "Track order success",
                    data: result,
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
}
exports.showOrdersController = showOrdersController;
