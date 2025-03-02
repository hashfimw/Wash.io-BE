// src/routes/order.routes.ts
import { Router } from "express";
import { showOrdersController } from "../controllers/showOrders.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { AdminAuth } from "../middlewares/validation/AdminAuth.middleware";
import { Role } from "../../prisma/generated/client";

export class showOrderRouter {
  private router: Router;
  private controller: showOrdersController;

  constructor() {
    this.router = Router();
    this.controller = new showOrdersController();
    this.initializeRoutes();
  }
  // validaton di matiin sementara buat testing doang
  private initializeRoutes() {
    // Super Admin route
    this.router.get(
      "/",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN, Role.OUTLET_ADMIN]),
      this.controller.getAllOrdersController
    );

    this.router.get(
      "/track/:orderId",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN, Role.OUTLET_ADMIN]),
      this.controller.trackOrderController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
