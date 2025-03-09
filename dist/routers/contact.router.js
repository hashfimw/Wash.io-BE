"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRouter = void 0;
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact.controller");
const asyncHandler_1 = require("../middlewares/asyncHandler");
class ContactRouter {
    constructor() {
        this.contactController = new contact_controller_1.ContactController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", (0, asyncHandler_1.asyncHandler)(this.contactController.sendContactEmail));
    }
    getRouter() {
        return this.router;
    }
}
exports.ContactRouter = ContactRouter;
