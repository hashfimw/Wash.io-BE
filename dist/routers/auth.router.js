"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const asyncHandler_1 = require("../middlewares/asyncHandler");
class AuthRouter {
    constructor() {
        this.authController = new auth_controller_1.AuthController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/register", (0, asyncHandler_1.asyncHandler)(this.authController.registerController));
        this.router.post("/complete-register", (0, asyncHandler_1.asyncHandler)(this.authController.completeRegistController));
        this.router.post("/login", (0, asyncHandler_1.asyncHandler)(this.authController.loginController));
        this.router.post("/google", (0, asyncHandler_1.asyncHandler)(this.authController.getGoogleTokenController));
        this.router.post("/forgotPassword", (0, asyncHandler_1.asyncHandler)(this.authController.forgotPasswordController));
        this.router.post("/resetPassword", (0, asyncHandler_1.asyncHandler)(this.authController.resetPasswordController));
        this.router.patch("/verify/:token", (0, asyncHandler_1.asyncHandler)(this.authController.verifyEmailController));
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRouter = AuthRouter;
