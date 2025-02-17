import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken";
import TransportJobController from "../controllers/transportJob.controller";

export default class TransportJobRouter {
  private controller: TransportJobController;
  private router: Router;

  constructor() {
    this.controller = new TransportJobController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifyToken, this.controller.getTransportJobs);
    this.router.get("/:id", verifyToken, this.controller.getTransportJobById);
    this.router.patch("/:id", verifyToken, this.controller.updateTransportJobById);
  }

  getRouter(): Router {
    return this.router;
  }
}
