"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRouter = void 0;
const express_1 = require("express");
const verifyToken_1 = require("../middlewares/verifyToken");
const payment_controller_1 = require("../controllers/payment.controller");
class PaymentRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new payment_controller_1.PaymentController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // Create payment (get payment token)
        this.router.post("/", verifyToken_1.verifyToken, this.controller.createPayment);
        // Get payment status
        this.router.get("/:orderId", verifyToken_1.verifyToken, this.controller.getPaymentStatus);
        // Handle notification from Midtrans (no auth - public endpoint)
        this.router.post("/notification", this.controller.handlePaymentNotification);
    }
    getRouter() {
        return this.router;
    }
}
exports.PaymentRouter = PaymentRouter;
