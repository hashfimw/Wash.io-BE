"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdmEmployeeRouter = void 0;
const express_1 = require("express");
const employeeValidation_middleware_1 = require("../middlewares/validation/employeeValidation.middleware");
const superAdmEmployee_controller_1 = require("../controllers/superAdmEmployee.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
const AdminAuth_middleware_1 = require("../middlewares/validation/AdminAuth.middleware");
const client_1 = require("../../prisma/generated/client");
class SuperAdmEmployeeRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new superAdmEmployee_controller_1.SuperAdmEmployeeController();
        this.initializeRoutes();
    }
    // validaton di matiin sementara buat testing doang
    initializeRoutes() {
        this.router.post("/", 
        // isSuperAdmin,
        verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN]), employeeValidation_middleware_1.validateCreateEmployee, this.controller.createEmployeeController);
        this.router.get("/", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN]), this.controller.getAllEmployeesController);
        this.router.put("/:id", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN]), employeeValidation_middleware_1.validateUpdateEmployee, this.controller.updateEmployeeController);
        this.router.delete("/:id", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN]), employeeValidation_middleware_1.validateDeleteEmployee, this.controller.deleteEmployeeController);
        this.router.get("/allusers", verifyToken_1.verifyToken, (0, AdminAuth_middleware_1.AdminAuth)([client_1.Role.SUPER_ADMIN]), this.controller.getAllUsersController);
    }
    getRouter() {
        return this.router;
    }
}
exports.SuperAdmEmployeeRouter = SuperAdmEmployeeRouter;
