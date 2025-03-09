"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupOrderRouter = void 0;
const express_1 = require("express");
const pickupOrder_controller_1 = require("../controllers/pickupOrder.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
class PickupOrderRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.pickupOrderController = new pickupOrder_controller_1.PickupOrderController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.use(verifyToken_1.verifyToken);
        this.router.use(verifyToken_1.checkUser);
        this.router.get("/", this.pickupOrderController.getPickupOrders.bind(this.pickupOrderController));
        this.router.post("/", this.pickupOrderController.createPickupOrder.bind(this.pickupOrderController));
        this.router.put("/:id/status", this.pickupOrderController.updateOrderStatus);
        this.router.get("/:id", this.pickupOrderController.getPickupOrder.bind(this.pickupOrderController));
        this.router.delete("/:id", this.pickupOrderController.deletePickupOrder.bind(this.pickupOrderController));
    }
    getRouter() {
        return this.router;
    }
}
exports.PickupOrderRouter = PickupOrderRouter;
