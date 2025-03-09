import { Router } from "express";
import { ContactController } from "../controllers/contact.controller";
import { asyncHandler } from "../middlewares/asyncHandler";

export class ContactRouter {
  private contactController: ContactController;
  private router: Router;

  constructor() {
    this.contactController = new ContactController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      "/",
      asyncHandler(this.contactController.sendContactEmail)
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
