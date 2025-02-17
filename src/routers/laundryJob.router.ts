import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken";
import LaundryJobController from "../controllers/laundryJob.controller";

export default class LaundryJobRouter {
  private controller: LaundryJobController;
  private router: Router;

  constructor() {
    this.controller = new LaundryJobController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifyToken, this.controller.getLaundryJobs);
    this.router.get("/:id", verifyToken, this.controller.getLaundryJobById);
  }

  getRouter(): Router {
    return this.router;
  }
}
