"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BypassRequestRouter = void 0;
// src/routes/bypassRequest.routes.ts
const express_1 = require("express");
const client_1 = require("../../prisma/generated/client");
const bypassProcess_controller_1 = require("../controllers/bypassProcess.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
const AdminAuth_middleware_1 = require("../middlewares/validation/AdminAuth.middleware");
class BypassRequestRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new bypassProcess_controller_1.BypassRequestController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // Route untuk worker mengajukan permintaan bypass
        this.router.post("/request", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.WORKER]), this.controller.requestBypassController);
        // Route untuk admin menangani (menyetujui/menolak) permintaan bypass
        this.router.put("/handle", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.OUTLET_ADMIN, client_1.Role.SUPER_ADMIN]), this.controller.handleBypassRequestController);
        // Route untuk mendapatkan semua permintaan bypass (admin view)
        this.router.get("/", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.OUTLET_ADMIN, client_1.Role.SUPER_ADMIN]), this.controller.getBypassRequestsController);
        // Route untuk mendapatkan detail permintaan bypass
        this.router.get("/:id", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.OUTLET_ADMIN, client_1.Role.SUPER_ADMIN, client_1.Role.WORKER]), this.controller.getBypassRequestByIdController);
    }
    getRouter() {
        return this.router;
    }
}
exports.BypassRequestRouter = BypassRequestRouter;
