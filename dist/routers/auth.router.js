"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
class AuthRouter {
    constructor() {
        this.authController = new auth_controller_1.AuthController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/register", this.authController.registerController);
        this.router.post("/complete-register", this.authController.completeRegistController);
        this.router.post("/login", this.authController.loginController);
        this.router.post("/google", this.authController.getGoogleTokenController);
        this.router.post("/forgotPassword", this.authController.forgotPasswordController);
        this.router.post("/resetPassword", this.authController.resetPasswordController);
        this.router.patch("/verify/:token", this.authController.verifyEmailController);
        this.router.get("/session", this.authController.getSessionController);
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRouter = AuthRouter;
