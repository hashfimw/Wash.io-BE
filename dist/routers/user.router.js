"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const verifyToken_1 = require("../middlewares/verifyToken");
const uploader_1 = require("../services/uploader");
const user_controller_1 = require("../controllers/user.controller");
class UserRouter {
    constructor() {
        this.userController = new user_controller_1.UserController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.use(verifyToken_1.verifyToken);
        this.router.use(verifyToken_1.checkUser);
        this.router.get("/", this.userController.getUsers);
        this.router.post("/", this.userController.createUser);
        this.router.patch("/avatar-cloud", (0, uploader_1.uploader)("memoryStorage", "avatar").single("file"), this.userController.getUsersId);
        this.router.get("/:id", this.userController.getUsersId);
        this.router.delete("/:id", this.userController.deleteUser);
        this.router.patch("/:id", this.userController.editUser);
    }
    getRouter() {
        return this.router;
    }
}
exports.UserRouter = UserRouter;
