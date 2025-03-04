import { Request, Response } from "express";
import { getUserService } from "../services/user/getUser.service";
import { getUserIdService } from "../services/user/getUserId.service";
import { createUserservice } from "../services/user/createUser.service";
import { editUserService } from "../services/user/editUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";
import { editAvatarCloudService } from "../services/auth/editAvatarCloud.service";

export class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const result = await getUserService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async getUsersId(req: Request, res: Response) {
    try {
      const result = await getUserIdService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const result = await createUserservice(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async editUser(req: Request, res: Response) {
    try {
      const result = await editUserService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const result = await deleteUserService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async editAvatarCloud(req: Request, res: Response) {
    try {
      const result = await editAvatarCloudService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }
}
