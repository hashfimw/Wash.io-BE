import { Router } from "express";
import {
  validateCreateEmployee,
  validateDeleteEmployee,
  validateUpdateEmployee,
} from "../middlewares/employeeValidation.middleware";
import {
  validateAssignEmployee,
  validateMultipleAssignments,
} from "../middlewares/assignValidation.middleware";
import { SuperAdmEmployeeController } from "../controllers/superAdmEmployee.controller";

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
      validateCreateEmployee,
      this.controller.createEmployeeController
    ); //yang ini nambahin isSuperAdmin nunggu req.user dari fitur kemal
    this.router.get("/", this.controller.getAllEmployeesController);
    this.router.put(
      "/:id",
      validateUpdateEmployee,
      this.controller.updateEmployeeController
    ); //yang ini nambahin isSuperAdmin nunggu req.user dari fitur kemal
    this.router.delete(
      "/:id",
      validateDeleteEmployee,
      this.controller.deleteEmployeeController
    ); //yang ini nambahin isSuperAdmin nunggu req.user dari fitur kemal
    this.router.get("/allusers", this.controller.getAllUsersController);
    this.router.post(
      "/assign",
      validateAssignEmployee,
      this.controller.assignEmployeeToOutletController
    ); //yang ini nambahin isSuperAdmin nunggu req.user dari fitur kemal

    this.router.post(
      "/assign-multiple",
      validateMultipleAssignments,
      this.controller.reassignMultipleEmployeesController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
