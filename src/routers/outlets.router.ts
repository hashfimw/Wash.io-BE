import { Router } from "express";
import { PublicOutletController } from "../controllers/outlets.controller";

export class OutletsRouter {
  private publicOutletController: PublicOutletController;
  private router: Router;

  constructor() {
    this.publicOutletController = new PublicOutletController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/", this.publicOutletController.getPublicOutlets.bind(this.publicOutletController));
  }

  getRouter(): Router {
    return this.router;
  }
}
