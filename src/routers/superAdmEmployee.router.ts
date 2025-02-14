import { Router } from "express";
import {
  validateCreateEmployee,
  validateDeleteEmployee,
  validateUpdateEmployee,
} from "../middlewares/validation/employeeValidation.middleware";
import {
  validateAssignEmployee,
  validateMultipleAssignments,
} from "../middlewares/assignValidation.middleware";
import { SuperAdmEmployeeController } from "../controllers/superAdmEmployee.controller";
import { isSuperAdmin } from "../middlewares/validation/superAdminAuth.middleware";

export class SuperAdmEmployeeRouter {
  private router: Router;
  private controller: SuperAdmEmployeeController;

  constructor() {
    this.router = Router();
    this.controller = new SuperAdmEmployeeController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/",
      isSuperAdmin,
      validateCreateEmployee,
      this.controller.createEmployeeController
    );
    this.router.get(
      "/",
      isSuperAdmin,
      this.controller.getAllEmployeesController
    );
    this.router.put(
      "/:id",
      isSuperAdmin,
      validateUpdateEmployee,
      this.controller.updateEmployeeController
    );
    this.router.delete(
      "/:id",
      isSuperAdmin,
      validateDeleteEmployee,
      this.controller.deleteEmployeeController
    );
    this.router.get(
      "/allusers",
      isSuperAdmin,
      this.controller.getAllUsersController
    );
    this.router.post(
      "/assign",
      isSuperAdmin,
      validateAssignEmployee,
      this.controller.assignEmployeeToOutletController
    );

    this.router.post(
      "/assign-multiple",
      isSuperAdmin,
      validateMultipleAssignments,
      this.controller.reassignMultipleEmployeesController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
