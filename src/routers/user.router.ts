import { Router } from "express";
import { checkUser, verifyToken } from "../middlewares/verifyToken";
import { uploader } from "../services/uploader";
import { UserController } from "../controllers/user.controller";

export class UserRouter {
  private userController: UserController;
  private router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use(verifyToken);
    this.router.use(checkUser);

    this.router.get("/", this.userController.getUsers);
    this.router.post("/", this.userController.createUser);
    this.router.patch(
      "/avatar-cloud",
      uploader("memoryStorage", "avatar").single("file"),
      this.userController.editAvatarCloud
    );
    this.router.get("/:id", this.userController.getUsersId);
    this.router.delete("/:id", this.userController.deleteUser);
    this.router.patch("/:id", this.userController.editUser);
  }

  getRouter(): Router {
    return this.router;
  }
}
