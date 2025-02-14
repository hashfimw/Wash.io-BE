// src/routes/bypassProcess.routes.ts
import { Router } from "express";
import { BypassProcessController } from "../controllers/bypassProcess.controller";
import { verifyToken } from "../middlewares/verifyToken";
import {
  validateOutletAdmin,
  validateWorkerBypass,
} from "../middlewares/validation/bypassValidation.middleware";

export class BypassProcessRouter {
  private router: Router;
  private controller: BypassProcessController;

  constructor() {
    this.router = Router();
    this.controller = new BypassProcessController();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.post(
      "/request",
      verifyToken,
      validateWorkerBypass,
      this.controller.requestBypassController
    );

    this.router.post(
      "/handle",
      verifyToken,
      validateOutletAdmin,
      this.controller.handleBypassRequestController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
