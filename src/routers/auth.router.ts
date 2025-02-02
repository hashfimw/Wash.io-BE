import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { asyncHandler } from "../middlewares/asyncHandler";

export class AuthRouter {
  private authController: AuthController;
  private router: Router;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      "/register",
      asyncHandler(this.authController.registerController)
    );

    this.router.post(
      "/complete-register",
      asyncHandler(this.authController.completeRegistController)
    );

    this.router.post(
      "/login",
      asyncHandler(this.authController.loginController)
    );

    this.router.post(
      "/google",
      asyncHandler(this.authController.getGoogleTokenController)
    );

    this.router.post(
      "/forgotPassword",
      asyncHandler(this.authController.forgotPasswordController)
    );

    this.router.post(
      "/resetPassword",
      asyncHandler(this.authController.resetPasswordController)
    );

    this.router.patch(
      "/verify/:token",
      asyncHandler(this.authController.verifyEmailController)
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
