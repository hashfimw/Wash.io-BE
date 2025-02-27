// src/routes/superAdmOutlet.routes.ts
import { Router } from "express";
import {
  validateCreateOutlet,
  validateDeleteOutlet,
  validateUpdateOutlet,
} from "../middlewares/validation/outletValidation.middleware";
import { SuperAdmOutletController } from "../controllers/superAdmOutlets.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { AdminAuth } from "../middlewares/validation/AdminAuth.middleware";
import { Role } from "@prisma/client";

export class SuperAdmOutletRouter {
  private router: Router;
  private controller: SuperAdmOutletController;

  constructor() {
    this.router = Router();
    this.controller = new SuperAdmOutletController();
    this.initializeRoutes();
  }
  // validaton di matiin sementara buat testing doang
  private initializeRoutes() {
    this.router.post(
      "/",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN]),
      validateCreateOutlet,
      this.controller.createOutletController
    );

    this.router.get(
      "/",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN, Role.OUTLET_ADMIN]),
      this.controller.getAllOutletsController
    );

    this.router.get(
      "/:id",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN, Role.OUTLET_ADMIN]),
      this.controller.getOutletByIdController
    );

    this.router.put(
      "/:id",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN]),
      validateUpdateOutlet,
      this.controller.updateOutletController
    );

    this.router.delete(
      "/:id",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN]),
      validateDeleteOutlet,
      this.controller.deleteOutletController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
