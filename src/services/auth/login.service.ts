 
import { Request, Response } from "express";
import prisma from "../../prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { appConfig } from "../../utils/config";

interface LoginResponse {
  message: string;
  token?: string;
}

export const loginService = async (req: Request): Promise<LoginResponse> => {
  const { email, password } = req.body;

  // Validate email and password presence
  if (!email || !password) {
    throw new Error("Email and password are required!");
  }

  // Check if user exists
  const user = await prisma.user.findFirst({
    where: { email: email },
  });

  if (!user) {
    throw new Error("Incorrect email address or password!");
  }

  // Check if the account is deleted
  if (user.isDeleted) {
    throw new Error(
      "This account has been deleted. Please contact support for more information"
    );
  }

  // Check if the user is trying to login with a Google account
  if (user.avatar && user.avatar.includes("googleusercontent.com")) {
    throw new Error("Please login using your Google account!");
  }

  // Ensure password is not null and then compare
  if (!user.password) {
    throw new Error("Password not set for this user!");
  }

  const isPasswordValid = await compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Incorrect email address or password!");
  }

  // Generate JWT token
  const payload = { id: user.id, role: user.role };
  const token = sign(payload, appConfig.SecretKey, { expiresIn: "1d" });

  // Return response object
  return {
    message: "Login Successfully! ✅",
    token,
  };
};