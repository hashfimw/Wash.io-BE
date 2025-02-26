"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdmOutletRouter = void 0;
// src/routes/superAdmOutlet.routes.ts
const express_1 = require("express");
const outletValidation_middleware_1 = require("../middlewares/outletValidation.middleware");
const superAdmOutlets_controller_1 = require("../controllers/superAdmOutlets.controller");
const superAdminAuth_middleware_1 = require("../middlewares/superAdminAuth.middleware");
class SuperAdmOutletRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new superAdmOutlets_controller_1.SuperAdmOutletController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", superAdminAuth_middleware_1.isSuperAdmin, outletValidation_middleware_1.validateCreateOutlet, this.controller.createOutletController);
        this.router.get("/", superAdminAuth_middleware_1.isSuperAdmin, this.controller.getAllOutletsController);
        this.router.get("/:id", superAdminAuth_middleware_1.isSuperAdmin, this.controller.getOutletByIdController);
        this.router.put("/:id", superAdminAuth_middleware_1.isSuperAdmin, outletValidation_middleware_1.validateUpdateOutlet, this.controller.updateOutletController);
        this.router.delete("/:id", superAdminAuth_middleware_1.isSuperAdmin, outletValidation_middleware_1.validateDeleteOutlet, this.controller.deleteOutletController);
    }
    getRouter() {
        return this.router;
    }
}
exports.SuperAdmOutletRouter = SuperAdmOutletRouter;
