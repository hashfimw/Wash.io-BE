import { Request, Response } from "express";
import { registerService } from "../services/auth/register.service";
import { verifEmailService } from "../services/auth/verifyEmail.service";
import { completeRegistService } from "../services/auth/completeRegist.service";
import { loginService } from "../services/auth/login.service";
import { getGoogleTokenService } from "../services/auth/getGoogleToken.service";
import { forgotPasswordService } from "../services/auth/forgotPassword.service";
import { resetPasswrodService } from "../services/auth/resetPassword.service";

export class AuthController {
  async registerController(req: Request, res: Response) {
    try {
      const result = await registerService(req, res);

      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async verifyEmailController(req: Request, res: Response) {
    try {
      const result = await verifEmailService(req, res);

      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async completeRegistController(req: Request, res: Response) {
    try {
      const result = await completeRegistService(req, res);

      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getGoogleTokenController(req: Request, res: Response) {
    try {
      const { code } = req.body;
      const result = await getGoogleTokenService(code);

      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async loginController(req: Request, res: Response) {
    try {
      const result = await loginService(req, res);

      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async forgotPasswordController(req: Request, res: Response) {
    try {
      const result = await forgotPasswordService(req, res);

      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async resetPasswordController(req: Request, res: Response) {
    try {
      const result = await resetPasswrodService(req, res);

      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
