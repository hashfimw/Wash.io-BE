"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRouter = void 0;
const express_1 = require("express");
const address_controller_1 = require("../controllers/address.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
class AddressRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.addressController = new address_controller_1.AddressController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.use(verifyToken_1.verifyToken);
        this.router.use(verifyToken_1.checkUser);
        this.router.post("/nearest-outlet", this.addressController.findNearestOutlet.bind(this.addressController));
        this.router.get("/", this.addressController.getUserAddresses.bind(this.addressController));
        this.router.post("/", this.addressController.createUserAddress.bind(this.addressController));
        this.router.get("/:addressId", this.addressController.getAddressById.bind(this.addressController));
        this.router.patch("/:addressId", this.addressController.updateUserAddress.bind(this.addressController));
        this.router.delete("/:addressId", this.addressController.deleteUserAddress.bind(this.addressController));
    }
    getRouter() {
        return this.router;
    }
}
exports.AddressRouter = AddressRouter;
