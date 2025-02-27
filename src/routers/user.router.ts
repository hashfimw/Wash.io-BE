import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { checkUser, verifyToken } from "../middlewares/verifyToken";
import { asyncHandler } from "../middlewares/asyncHandler";
import { uploader } from "../services/uploader";

export class UserRouter {
  private userController: UserController;
  private router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      "/",
      // verifyToken,
      // checkUser,
      asyncHandler(this.userController.getUsers)
    );

    this.router.post(
      "/",
      verifyToken,
      checkUser,
      asyncHandler(this.userController.createUser)
    );

    this.router.patch(
      "/avatar-cloud",
      verifyToken,
      uploader("memoryStorage", "avatar").single("file"),
      asyncHandler(this.userController.getUsersId)
    );

    this.router.get(
      "/:id",
      verifyToken,
      checkUser,
      asyncHandler(this.userController.getUsersId)
    );

    this.router.delete(
      "/:id",
      verifyToken,
      checkUser,
      asyncHandler(this.userController.deleteUser)
    );

    this.router.patch(
      "/:id",
      verifyToken,
      checkUser,
      asyncHandler(this.userController.editUser)
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
