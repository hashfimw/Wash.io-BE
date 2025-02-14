// src/routes/order.routes.ts
import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken";
import { processOrderItemController } from "../controllers/orderItems.controller";

export class OrderItemsRouter {
  private router: Router;
  private controller: processOrderItemController;

  constructor() {
    this.router = Router();
    this.controller = new processOrderItemController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Order routes
    this.router.post(
      "/process-order",
      verifyToken,
      this.controller.processOrders
    );

    // Laundry Item routes
    this.router.post(
      "/items",
      verifyToken,
      this.controller.createLaundryItemController
    );

    this.router.get(
      "/items",
      verifyToken,
      this.controller.getLaundryItemsByOutletController
    );

    this.router.put(
      "/items/:id",
      verifyToken,
      this.controller.updateLaundryItemController
    );

    this.router.delete(
      "/items/:id",
      verifyToken,
      this.controller.deleteLaundryItemController
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
