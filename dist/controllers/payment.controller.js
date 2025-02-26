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
exports.PaymentController = void 0;
const payment_service_1 = require("../services/payment/payment.service");
class PaymentController {
    constructor() {
        this.createPayment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, payment_service_1.createPaymentService)(req, res);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    success: false,
                    message: "Internal server error"
                });
            }
        });
        this.handlePaymentNotification = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, payment_service_1.handlePaymentNotificationService)(req, res);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    success: false,
                    message: "Internal server error"
                });
            }
        });
        this.getPaymentStatus = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, payment_service_1.getPaymentStatusService)(req, res);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    success: false,
                    message: "Internal server error"
                });
            }
        });
    }
}
exports.PaymentController = PaymentController;
