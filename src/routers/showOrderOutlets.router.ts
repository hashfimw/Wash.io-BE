// src/routes/order.routes.ts
import { Router } from "express";
import { showOrdersController } from "../controllers/showOrders.controller";
import { isSuperAdmin } from "../middlewares/validation/superAdminAuth.middleware";
import { verifyToken } from "../middlewares/verifyToken";
import { isOutletAdmin } from "../middlewares/validation/outletAdminAuth.middleware";

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
      //   isSuperAdmin,
      //   verifyToken,
      this.controller.getAllOrdersController
    );

    // Outlet Admin route (difilter di service)
    this.router.get(
      "/outlet",
      // isSuperAdmin,
      // isOutletAdmin,
      //   verifyToken,
      this.controller.getOutletOrdersController
    );

    this.router.get(
      "/track/:orderId",
      // isSuperAdmin,
      // isOutletAdmin,
      //   verifyToken,
      this.controller.trackOrderController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
