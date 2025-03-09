import { Request } from "express";
import { verify, TokenExpiredError } from "jsonwebtoken";
import prisma from "../../prisma";
import { appConfig } from "../../utils/config";

interface VerifyResult {
  message: string;
  status: number;
}

export const verifEmailService = async (
  req: Request
): Promise<VerifyResult> => {
  try {
    const { token } = req.params;
    console.log("Received token:", token); // 🐛 Debugging token

    if (!token || typeof token !== "string") {
      return {
        status: 400,
        message: "Invalid or missing token!",
      };
    }

    let decoded;
    try {
      decoded = verify(token, appConfig.SecretKey);
      console.log("Decoded token:", decoded); // 🐛 Debugging decoded data
    } catch (error: any) {
      if (error instanceof TokenExpiredError) {
        return {
          status: 401,
          message: "Token expired, request a new verification link.",
        };
      }
      return {
        status: 400,
        message: "Invalid token!",
      };
    }

    // Cari user berdasarkan ID yang ada di dalam token
    const user = await prisma.user.findUnique({
      where: { id: (decoded as any).id },
    });

    if (!user) {
      return {
        status: 404,
        message: "User not found!",
      };
    }

    if (user.isVerified) {
      return {
        status: 400,
        message: "Email already verified!",
      };
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { isVerified: true },
    });

    return {
      status: 200,
      message: "Email successfully verified! ✅",
    };
  } catch (error) {
    console.error("Verification error:", error);
    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
};
