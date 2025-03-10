import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken";
import { PaymentController } from "../controllers/payment.controller";

export class PaymentRouter {
  private router: Router;
  private controller: PaymentController;

  constructor() {
    this.router = Router();
    this.controller = new PaymentController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Create payment (get payment token)
    this.router.post("/notification", this.controller.handlePaymentNotification);
    this.router.post("/", verifyToken, this.controller.createPayment);

    // Get payment status
    this.router.get("/:orderId", verifyToken, this.controller.getPaymentStatus);

    // Handle notification from Midtrans (no auth - public endpoint)
  }

  getRouter(): Router {
    return this.router;
  }
}
