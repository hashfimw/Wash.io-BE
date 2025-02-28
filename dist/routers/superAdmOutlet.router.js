"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdmOutletRouter = void 0;
// src/routes/superAdmOutlet.routes.ts
const express_1 = require("express");
const outletValidation_middleware_1 = require("../middlewares/validation/outletValidation.middleware");
const superAdmOutlets_controller_1 = require("../controllers/superAdmOutlets.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
const AdminAuth_middleware_1 = require("../middlewares/validation/AdminAuth.middleware");
const client_1 = require("../../prisma/generated/client");
class SuperAdmOutletRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new superAdmOutlets_controller_1.SuperAdmOutletController();
        this.initializeRoutes();
    }
    // validaton di matiin sementara buat testing doang
    initializeRoutes() {
        this.router.post("/", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN]), outletValidation_middleware_1.validateCreateOutlet, this.controller.createOutletController);
        this.router.get("/", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN, client_1.Role.OUTLET_ADMIN]), this.controller.getAllOutletsController);
        this.router.get("/:id", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN, client_1.Role.OUTLET_ADMIN]), this.controller.getOutletByIdController);
        this.router.put("/:id", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN]), outletValidation_middleware_1.validateUpdateOutlet, this.controller.updateOutletController);
        this.router.delete("/:id", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN]), outletValidation_middleware_1.validateDeleteOutlet, this.controller.deleteOutletController);
    }
    getRouter() {
        return this.router;
    }
}
exports.SuperAdmOutletRouter = SuperAdmOutletRouter;
