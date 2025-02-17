"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
const uploader_1 = require("../services/uploader");
class UserRouter {
    constructor() {
        this.userController = new user_controller_1.UserController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", verifyToken_1.verifyToken, verifyToken_1.checkUser, this.userController.getUsers);
        this.router.post("/", verifyToken_1.verifyToken, verifyToken_1.checkUser, this.userController.createUser);
        this.router.patch("/avatar-cloud", verifyToken_1.verifyToken, (0, uploader_1.uploader)("memoryStorage", "avatar").single("file"), this.userController.getUsersId);
        this.router.get("/:id", verifyToken_1.verifyToken, verifyToken_1.checkUser, this.userController.getUsersId);
        this.router.delete("/:id", verifyToken_1.verifyToken, verifyToken_1.checkUser, this.userController.deleteUser);
        this.router.patch("/:id", verifyToken_1.verifyToken, verifyToken_1.checkUser, this.userController.editUser);
    }
    getRouter() {
        return this.router;
    }
}
exports.UserRouter = UserRouter;
