"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutletsRouter = void 0;
const express_1 = require("express");
const outlets_controller_1 = require("../controllers/outlets.controller");
class OutletsRouter {
    constructor() {
        this.publicOutletController = new outlets_controller_1.PublicOutletController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.publicOutletController.getPublicOutlets.bind(this.publicOutletController));
    }
    getRouter() {
        return this.router;
    }
}
exports.OutletsRouter = OutletsRouter;
