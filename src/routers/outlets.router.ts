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
    // Endpoint untuk mendapatkan daftar outlet tanpa autentikasi
    this.router.get("/", this.publicOutletController.getPublicOutlets);
    
    // Tambahkan endpoint publik lainnya di sini jika diperlukan
  }

  getRouter(): Router {
    return this.router;
  }
}