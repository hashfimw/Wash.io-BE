"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../middlewares/verifyToken");
const notification_controller_1 = __importDefault(require("../controllers/notification.controller"));
class NotificationRouter {
    constructor() {
        this.controller = new notification_controller_1.default();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", verifyToken_1.verifyToken, this.controller.getNotifications);
        this.router.patch("/", verifyToken_1.verifyToken, this.controller.markAllNotificationsAsRead);
        this.router.patch("/:id", verifyToken_1.verifyToken, this.controller.markNotificationAsReadById);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = NotificationRouter;
