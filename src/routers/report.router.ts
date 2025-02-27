// src/routes/report.routes.ts
import { Router } from "express";
import { ReportController } from "../controllers/report.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { AdminAuth } from "../middlewares/validation/AdminAuth.middleware";
import { Role } from "@prisma/client";

export class ReportRouter {
  private router: Router;
  private controller: ReportController;

  constructor() {
    this.router = Router();
    this.controller = new ReportController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      "/sales",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN, Role.OUTLET_ADMIN]),
      this.controller.getSalesReportController
    );

    this.router.get(
      "/employee-performance",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN, Role.OUTLET_ADMIN]),
      this.controller.getEmployeePerformanceController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
