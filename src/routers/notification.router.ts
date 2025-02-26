import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken";
import NotificationController from "../controllers/notification.controller";

export default class NotificationRouter {
  private controller: NotificationController;
  private router: Router;

  constructor() {
    this.controller = new NotificationController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifyToken, this.controller.getNotifications);
    this.router.patch("/", verifyToken, this.controller.markAllNotificationsAsRead);
    this.router.patch("/:id", verifyToken, this.controller.markNotificationAsReadById);
  }

  getRouter(): Router {
    return this.router;
  }
}
