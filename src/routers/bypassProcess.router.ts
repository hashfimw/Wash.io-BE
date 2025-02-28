// src/routes/bypassRequest.routes.ts
import { Router } from "express";
import { Role } from "../../prisma/generated/client";
import { BypassRequestController } from "../controllers/bypassProcess.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { AdminAuth } from "../middlewares/validation/AdminAuth.middleware";

export class BypassRequestRouter {
  router: Router;
  controller: BypassRequestController;

  constructor() {
    this.router = Router();
    this.controller = new BypassRequestController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Route untuk worker mengajukan permintaan bypass
    this.router.post(
      "/request",
      verifyToken,
      AdminAuth([Role.WORKER]),
      this.controller.requestBypassController
    );

    // Route untuk admin menangani (menyetujui/menolak) permintaan bypass
    this.router.put(
      "/handle",
      verifyToken,
      AdminAuth([Role.OUTLET_ADMIN, Role.SUPER_ADMIN]),
      this.controller.handleBypassRequestController
    );

    // Route untuk mendapatkan semua permintaan bypass (admin view)
    this.router.get(
      "/",
      verifyToken,
      AdminAuth([Role.OUTLET_ADMIN, Role.SUPER_ADMIN]),
      this.controller.getBypassRequestsController
    );

    // Route untuk mendapatkan detail permintaan bypass
    this.router.get(
      "/:id",
      verifyToken,
      AdminAuth([Role.OUTLET_ADMIN, Role.SUPER_ADMIN, Role.WORKER]),
      this.controller.getBypassRequestByIdController
    );
  }
  getRouter(): Router {
    return this.router;
  }
}
