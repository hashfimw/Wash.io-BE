"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemsRouter = void 0;
// src/routes/order.routes.ts
const express_1 = require("express");
const verifyToken_1 = require("../middlewares/verifyToken");
const processOrderItems_controller_1 = require("../controllers/processOrderItems.controller");
const AdminAuth_middleware_1 = require("../middlewares/validation/AdminAuth.middleware");
const client_1 = require("../../prisma/generated/client");
class OrderItemsRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new processOrderItems_controller_1.processOrderItemController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/process-order", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN, client_1.Role.OUTLET_ADMIN]), this.controller.processOrders);
        this.router.post("/items", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN, client_1.Role.OUTLET_ADMIN]), this.controller.createLaundryItemController);
        this.router.get("/items", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN, client_1.Role.OUTLET_ADMIN]), this.controller.geOrdersItemsByOutletController);
        this.router.put("/items/:id", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN]), this.controller.updateLaundryItemController);
        this.router.delete("/items/:id", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN]), this.controller.deleteLaundryItemController);
    }
    getRouter() {
        return this.router;
    }
}
exports.OrderItemsRouter = OrderItemsRouter;
