import { Router } from "express";
import { AddressController } from "../controllers/address.controller";
import { checkUser, verifyToken } from "../middlewares/verifyToken";

export class AddressRouter {
  private router: Router;
  private addressController: AddressController;

  constructor() {
    this.router = Router();
    this.addressController = new AddressController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use(verifyToken);
    this.router.use(checkUser);

    this.router.post(
      "/nearest-outlet",
      this.addressController.findNearestOutlet.bind(this.addressController)
    );
    this.router.post(
      "/",
      this.addressController.createUserAddress.bind(this.addressController)
    );
    this.router.get(
      "/:addressId",
      this.addressController.getAddressById.bind(this.addressController)
    );
    this.router.patch(
      "/:addressId",
      this.addressController.updateUserAddress.bind(this.addressController)
    );
    this.router.delete(
      "/:addressId",
      this.addressController.deleteUserAddress.bind(this.addressController)
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
