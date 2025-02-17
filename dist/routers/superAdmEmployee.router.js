"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdmEmployeeRouter = void 0;
const express_1 = require("express");
const employeeValidation_middleware_1 = require("../middlewares/employeeValidation.middleware");
const assignValidation_middleware_1 = require("../middlewares/assignValidation.middleware");
const superAdmEmployee_controller_1 = require("../controllers/superAdmEmployee.controller");
const superAdminAuth_middleware_1 = require("../middlewares/superAdminAuth.middleware");
class SuperAdmEmployeeRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new superAdmEmployee_controller_1.SuperAdmEmployeeController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", superAdminAuth_middleware_1.isSuperAdmin, employeeValidation_middleware_1.validateCreateEmployee, this.controller.createEmployeeController); //yang ini nambahin isSuperAdmin nunggu req.user dari fitur kemal
        this.router.get("/", superAdminAuth_middleware_1.isSuperAdmin, this.controller.getAllEmployeesController);
        this.router.put("/:id", superAdminAuth_middleware_1.isSuperAdmin, employeeValidation_middleware_1.validateUpdateEmployee, this.controller.updateEmployeeController); //yang ini nambahin isSuperAdmin nunggu req.user dari fitur kemal
        this.router.delete("/:id", superAdminAuth_middleware_1.isSuperAdmin, employeeValidation_middleware_1.validateDeleteEmployee, this.controller.deleteEmployeeController); //yang ini nambahin isSuperAdmin nunggu req.user dari fitur kemal
        this.router.get("/allusers", superAdminAuth_middleware_1.isSuperAdmin, this.controller.getAllUsersController);
        this.router.post("/assign", superAdminAuth_middleware_1.isSuperAdmin, assignValidation_middleware_1.validateAssignEmployee, this.controller.assignEmployeeToOutletController); //yang ini nambahin isSuperAdmin nunggu req.user dari fitur kemal
        this.router.post("/assign-multiple", superAdminAuth_middleware_1.isSuperAdmin, assignValidation_middleware_1.validateMultipleAssignments, this.controller.reassignMultipleEmployeesController);
    }
    getRouter() {
        return this.router;
    }
}
exports.SuperAdmEmployeeRouter = SuperAdmEmployeeRouter;
