import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

export class AuthRouter {
  private authController: AuthController;
  private router: Router;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/register", this.authController.registerController);
    this.router.post(
      "/complete-register",
      this.authController.completeRegistController
    );
    this.router.post("/login", this.authController.loginController);
    this.router.post("/google", this.authController.getGoogleTokenController);
    this.router.post(
      "/forgotPassword",
      this.authController.forgotPasswordController
    );
    this.router.post(
      "/resetPassword",
      this.authController.resetPasswordController
    );
    this.router.patch(
      "/verify/:token",
      this.authController.verifyEmailController
    );
    this.router.get("/session", this.authController.getSessionController);
  }

  getRouter(): Router {
    return this.router;
  }
}
