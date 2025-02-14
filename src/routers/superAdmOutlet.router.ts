// src/routes/superAdmOutlet.routes.ts
import { Router } from "express";
import {
  validateCreateOutlet,
  validateDeleteOutlet,
  validateUpdateOutlet,
} from "../middlewares/validation/outletValidation.middleware";
import { SuperAdmOutletController } from "../controllers/superAdmOutlets.controller";
import { isSuperAdmin } from "../middlewares/validation/superAdminAuth.middleware";

export class SuperAdmOutletRouter {
  private router: Router;
  private controller: SuperAdmOutletController;

  constructor() {
    this.router = Router();
    this.controller = new SuperAdmOutletController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/",
      isSuperAdmin,
      validateCreateOutlet,
      this.controller.createOutletController
    );

    this.router.get("/", isSuperAdmin, this.controller.getAllOutletsController);

    this.router.get(
      "/:id",
      isSuperAdmin,
      this.controller.getOutletByIdController
    );

    this.router.put(
      "/:id",
      isSuperAdmin,
      validateUpdateOutlet,
      this.controller.updateOutletController
    );

    this.router.delete(
      "/:id",
      isSuperAdmin,
      validateDeleteOutlet,
      this.controller.deleteOutletController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
