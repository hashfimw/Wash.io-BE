import { Router } from "express";
import { PickupOrderController } from "../controllers/pickupOrder.controller";
import { verifyToken, checkUser } from "../middlewares/verifyToken";

export class PickupOrderRouter {
  private router: Router;
  private pickupOrderController: PickupOrderController;

  constructor() {
    this.router = Router();
    this.pickupOrderController = new PickupOrderController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use(verifyToken);
    this.router.use(checkUser);

    this.router.get(
      "/",
      this.pickupOrderController.getPickupOrders.bind(
        this.pickupOrderController
      )
    );
    this.router.post(
      "/",
      this.pickupOrderController.createPickupOrder.bind(
        this.pickupOrderController
      )
    );
    this.router.put("/:id/status", this.pickupOrderController.updateOrderStatus);
    this.router.get(
      "/:id",
      this.pickupOrderController.getPickupOrder.bind(this.pickupOrderController)
    );
    this.router.delete(
      "/:id",
      this.pickupOrderController.deletePickupOrder.bind(
        this.pickupOrderController
      )
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
