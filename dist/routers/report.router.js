"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportRouter = void 0;
// src/routes/report.routes.ts
const express_1 = require("express");
const report_controller_1 = require("../controllers/report.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
const AdminAuth_middleware_1 = require("../middlewares/validation/AdminAuth.middleware");
const client_1 = require("../../prisma/generated/client");
class ReportRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new report_controller_1.ReportController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/sales", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN, client_1.Role.OUTLET_ADMIN]), this.controller.getSalesReportController);
        this.router.get("/employee-performance", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN, client_1.Role.OUTLET_ADMIN]), this.controller.getEmployeePerformanceController);
    }
    getRouter() {
        return this.router;
    }
}
exports.ReportRouter = ReportRouter;
