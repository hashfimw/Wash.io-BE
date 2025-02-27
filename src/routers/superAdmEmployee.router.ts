import { Router } from "express";
import {
  validateCreateEmployee,
  validateDeleteEmployee,
  validateUpdateEmployee,
} from "../middlewares/validation/employeeValidation.middleware";
import { SuperAdmEmployeeController } from "../controllers/superAdmEmployee.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { isOutletAdmin } from "../middlewares/validation/outletAdminAuth.middleware";
import { AdminAuth } from "../middlewares/validation/AdminAuth.middleware";
import { Role } from "@prisma/client";

export class SuperAdmEmployeeRouter {
  private router: Router;
  private controller: SuperAdmEmployeeController;

  constructor() {
    this.router = Router();
    this.controller = new SuperAdmEmployeeController();
    this.initializeRoutes();
  }
  // validaton di matiin sementara buat testing doang
  private initializeRoutes() {
    this.router.post(
      "/",
      // isSuperAdmin,
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN]),
      validateCreateEmployee,
      this.controller.createEmployeeController
    );
    this.router.get(
      "/",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN]),
      this.controller.getAllEmployeesController
    );
    this.router.put(
      "/:id",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN]),
      validateUpdateEmployee,
      this.controller.updateEmployeeController
    );
    this.router.delete(
      "/:id",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN]),
      validateDeleteEmployee,
      this.controller.deleteEmployeeController
    );
    this.router.get(
      "/allusers",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN]),
      this.controller.getAllUsersController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
