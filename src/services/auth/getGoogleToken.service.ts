import { OAuth2Client } from "google-auth-library";
import prisma from "../../prisma";
import { sign } from "jsonwebtoken";
import { appConfig } from "../../utils/config";

const oAuth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI // Update this based on your frontend redirect
);

interface LoginGoogleArgs {
  email: string;
  name: string;
  picture: string;
}

export const getGoogleTokenService = async (code: string) => {
  try {
    // Exchange authorization code for tokens
    const { tokens } = await oAuth2Client.getToken(code);
    console.log(code);
    console.log("Client ID:", process.env.CLIENT_ID);
    console.log("Client Secret:", process.env.CLIENT_SECRET);

    if (!tokens.id_token) {
      throw new Error("Failed to retrieve ID token from Google");
    }

    // Verify and decode the ID token securely
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      throw new Error("Invalid token payload");
    }

    const decode: LoginGoogleArgs = {
      email: payload.email,
      name: payload.name || "",
      picture: payload.picture || "",
    };

    // Check if the user already exists in the database
    const existingUser = await prisma.user.findFirst({
      where: { email: decode.email },
    });

    if (
      existingUser &&
      existingUser.avatar?.includes("googleusercontent.com")
    ) {
      const token = sign({ id: existingUser.id }, appConfig.SecretKey, {
        expiresIn: "2h",
      });

      return {
        message: "Login by Google Success",
        data: existingUser,
        token: token,
      };
    }

    if (existingUser?.password) {
      throw new Error("Please login using email and password");
    }

    // Create a new user if they don't exist
    const newUser = await prisma.user.create({
      data: {
        email: decode.email,
        fullName: decode.name,
        avatar: decode.picture,
        isVerified: true,
      },
    });

    const token = sign({ id: newUser.id }, appConfig.SecretKey, {
      expiresIn: "2h",
    });

    return {
      message: "Login by Google Success ! ✅",
      data: newUser,
      token: token,
    };
  } catch (error) {
    console.error("Google Login Error:", error);
    throw new Error("Google login failed. Please try again.");
  }
};
