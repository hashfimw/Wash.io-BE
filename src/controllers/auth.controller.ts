import { Request, Response } from "express";
import { registerService } from "../services/auth/register.service";
import { verifEmailService } from "../services/auth/verifyEmail.service";
import { completeRegistService } from "../services/auth/completeRegist.service";
import { loginService } from "../services/auth/login.service";
import { getGoogleTokenService } from "../services/auth/getGoogleToken.service";
import { forgotPasswordService } from "../services/auth/forgotPassword.service";
import { resetPasswrodService } from "../services/auth/resetPassword.service";
import { getSessionService } from "../services/auth/getSession.service";

export class AuthController {
  async registerController(req: Request, res: Response) {
    try {
      const result = await registerService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async verifyEmailController(req: Request, res: Response): Promise<void> {
    try {
      const result = await verifEmailService(req);

      res.status(result.status).json({ message: result.message });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async completeRegistController(req: Request, res: Response) {
    try {
      const result = await completeRegistService(req);

      res.status(result.status).json({ message: result.message });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "An error occurred" });
    }
  }

  async getGoogleTokenController(req: Request, res: Response) {
    try {
      const { code } = req.body;
      const result = await getGoogleTokenService(code);

      res.status(200).json(result);
    } catch (error) {
      console.error("Google Auth Error:", Error);
      res.status(400).json({ message: "Google login failed", error: Error });
    }
  }

  async loginController(req: Request, res: Response): Promise<void> {
    try {
      const result = await loginService(req);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);

      // Safely extract error message
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";

      res.status(400).json({
        message: errorMessage,
      });
    }
  }

  async forgotPasswordController(req: Request, res: Response) {
    try {
      const result = await forgotPasswordService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async resetPasswordController(req: Request, res: Response) {
    try {
      const result = await resetPasswrodService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async getSessionController(req: Request, res: Response): Promise<void> {
    try {
      const result = await getSessionService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }
}
