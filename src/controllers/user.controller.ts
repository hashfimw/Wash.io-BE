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

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getUsersId(req: Request, res: Response) {
    try {
      const result = await getUserIdService(req, res);

      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const result = await createUserservice(req, res);

      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async editUser(req: Request, res: Response) {
    try {
      const result = await editUserService(req, res);

      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const result = await deleteUserService(req, res);

      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async editAvatarCloud(req: Request, res: Response) {
    try {
      const result = await editAvatarCloudService(req, res);

      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
