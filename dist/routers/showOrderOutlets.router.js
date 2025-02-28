"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showOrderRouter = void 0;
// src/routes/order.routes.ts
const express_1 = require("express");
const showOrders_controller_1 = require("../controllers/showOrders.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
const AdminAuth_middleware_1 = require("../middlewares/validation/AdminAuth.middleware");
const client_1 = require("../../prisma/generated/client");
class showOrderRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new showOrders_controller_1.showOrdersController();
        this.initializeRoutes();
    }
    // validaton di matiin sementara buat testing doang
    initializeRoutes() {
        // Super Admin route
        this.router.get("/", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN, client_1.Role.OUTLET_ADMIN]), this.controller.getAllOrdersController);
        this.router.get("/track/:orderId", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN, client_1.Role.OUTLET_ADMIN]), this.controller.trackOrderController);
    }
    getRouter() {
        return this.router;
    }
}
exports.showOrderRouter = showOrderRouter;
