// src/routes/order.routes.ts
import { Router } from "express";
import { showOrdersController } from "../controllers/showOrders.controller";
import { isSuperAdmin } from "../middlewares/validation/superAdminAuth.middleware";
import { verifyToken } from "../middlewares/verifyToken";

export class showOrderRouter {
  private router: Router;
  private controller: showOrdersController;

  constructor() {
    this.router = Router();
    this.controller = new showOrdersController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Super Admin route
    this.router.get(
      "/",
      isSuperAdmin,
      verifyToken,
      this.controller.getAllOrdersController
    );

    // Outlet Admin route (akan difilter di service)
    this.router.get(
      "/outlet",
      verifyToken,
      this.controller.getOutletOrdersController
    );

    // Track order route
    this.router.get(
      "/track/:orderId",
      verifyToken,
      this.controller.trackOrderController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
