import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { checkUser, verifyToken } from "../middlewares/verifyToken";
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
    this.router.get("/", verifyToken, checkUser, this.userController.getUsers);

    this.router.post("/", verifyToken, checkUser, this.userController.createUser);

    this.router.patch("/avatar-cloud", verifyToken, uploader("memoryStorage", "avatar").single("file"), this.userController.getUsersId);

    this.router.get("/:id", verifyToken, checkUser, this.userController.getUsersId);

    this.router.delete("/:id", verifyToken, checkUser, this.userController.deleteUser);

    this.router.patch("/:id", verifyToken, checkUser, this.userController.editUser);
  }

  getRouter(): Router {
    return this.router;
  }
}
