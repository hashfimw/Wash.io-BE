// src/routes/order.routes.ts
import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken";
import { processOrderItemController } from "../controllers/processOrderItems.controller";
import { AdminAuth } from "../middlewares/validation/AdminAuth.middleware";
import { Role } from "../../prisma/generated/client";

export class OrderItemsRouter {
  private router: Router;
  private controller: processOrderItemController;

  constructor() {
    this.router = Router();
    this.controller = new processOrderItemController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/process-order",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN, Role.OUTLET_ADMIN]),
      this.controller.processOrders
    );

    this.router.post(
      "/items",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN, Role.OUTLET_ADMIN]),
      this.controller.createLaundryItemController
    );

    this.router.get(
      "/items",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN, Role.OUTLET_ADMIN]),
      this.controller.geOrdersItemsByOutletController
    );

    this.router.put(
      "/items/:id",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN]),
      this.controller.updateLaundryItemController
    );

    this.router.delete(
      "/items/:id",
      verifyToken,
      AdminAuth([Role.SUPER_ADMIN]),
      this.controller.deleteLaundryItemController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
