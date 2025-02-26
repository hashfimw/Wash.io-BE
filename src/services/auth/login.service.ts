import { Request, Response } from "express";
import prisma from "../../prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { appConfig } from "../../utils/config";

export const loginService = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validate email and password presence
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required!" });
    }

    // Check if user exists
    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!user) {
      return res
        .status(400)
        .send({ message: "Incorrect email address or password!" });
    }

    // Check if the account is deleted
    if (user.isDeleted) {
      return res.status(400).send({
        message:
          "This account has been deleted. Please contact support for more information",
      });
    }

    // Check if the user is trying to login with a Google account
    if (user.avatar && user.avatar.includes("googleusercontent.com")) {
      return res
        .status(400)
        .send({ message: "Please login using your Google account!" });
    }

    // Ensure password is not null and then compare
    if (!user.password) {
      return res
        .status(400)
        .send({ message: "Password not set for this user!" });
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .send({ message: "Incorrect email address or password!" });
    }

    // Generate JWT token
    const payload = { id: user.id };
    const token = sign(payload, appConfig.SecretKey, { expiresIn: "30d" });

    // Send response with token
    res.status(200).send({
      message: "Login Successfuly! ✅",
      token,
    });
  } catch (error) {
    throw error;
  }
};
