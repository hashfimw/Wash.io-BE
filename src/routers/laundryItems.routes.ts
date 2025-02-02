// src/routes/outletLaundryItem.routes.ts
import { Router } from "express";
import {
  createLaundryItem,
  getLaundryItems,
  updateLaundryItem,
  deleteLaundryItem,
} from "../controllers/outletLaundryItem.controller";
import { isOutletAdminOrSuperAdmin } from "../middleware/auth.middleware";

export class OutletLaundryItemRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Outlet Admin & Super Admin bisa akses
    this.router.get("/", isOutletAdminOrSuperAdmin, getLaundryItems);

    // Hanya Outlet Admin yang bisa create/update/delete
    this.router.post(
      "/:outletId",
      isOutletAdminOrSuperAdmin,
      createLaundryItem
    );
    this.router.put(
      "/:outletId/:id",
      isOutletAdminOrSuperAdmin,
      updateLaundryItem
    );
    this.router.delete(
      "/:outletId/:id",
      isOutletAdminOrSuperAdmin,
      deleteLaundryItem
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
