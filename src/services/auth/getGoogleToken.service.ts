import { OAuth2Client } from "google-auth-library";
import prisma from "../../prisma";
import { sign } from "jsonwebtoken";
import { appConfig } from "../../utils/config";

const oAuth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

interface LoginGoogleArgs {
  email: string;
  name: string;
  picture: string;
}

export const getGoogleTokenService = async (code: string) => {
  try {
    // 1️⃣ Tukar kode autentikasi dengan token dari Google
    const { tokens } = await oAuth2Client.getToken(code);
    if (!tokens.id_token) {
      throw new Error("Failed to retrieve ID token from Google");
    }

    // 2️⃣ Verifikasi ID token Google
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      throw new Error("Invalid token payload");
    }

    // 3️⃣ Ekstrak data user dari Google
    const userData: LoginGoogleArgs = {
      email: payload.email,
      name: payload.name || "",
      picture: payload.picture || "",
    };

    // 4️⃣ Periksa apakah user sudah ada di database
    let user = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (user) {
      if (user.password) {
        throw new Error("Please login using email and password.");
      }
    } else {
      // 5️⃣ Jika user belum ada, buat user baru
      user = await prisma.user.create({
        data: {
          email: userData.email,
          fullName: userData.name,
          avatar: userData.picture,
          isVerified: true,
        },
      });
    }

    // 6️⃣ Buatkan token JWT yang menyimpan lebih banyak informasi
    const token = sign(
      {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        avatar: user.avatar,
      },
      appConfig.SecretKey,
      { expiresIn: "2h" }
    );

    console.log("🔹 Generated Google Token:", token);

    return {
      message: "Login by Google Success! ✅",
      data: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        avatar: user.avatar,
      },
      token: token,
    };
  } catch (error) {
    console.error("Google Login Error:", error);
    throw new Error("Google login failed. Please try again.");
  }
};
