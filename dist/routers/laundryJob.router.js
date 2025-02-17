"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../middlewares/verifyToken");
const laundryJob_controller_1 = __importDefault(require("../controllers/laundryJob.controller"));
class LaundryJobRouter {
    constructor() {
        this.controller = new laundryJob_controller_1.default();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", verifyToken_1.verifyToken, this.controller.getLaundryJobs);
        this.router.get("/:id", verifyToken_1.verifyToken, this.controller.getLaundryJobById);
        this.router.patch("/:id", verifyToken_1.verifyToken, this.controller.updateLaundryJobById);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = LaundryJobRouter;
