import jwt from "jsonwebtoken";
import { UserPayload } from "../custom"; // Pastikan path sesuai
import { appConfig } from "./config"; // Pastikan path sesuai

export const generateToken = (user: UserPayload): string => {
  return jwt.sign(
    { id: user.id, role: user.role }, // ✅ Pastikan struktur sesuai dengan UserPayload
    appConfig.SecretKey,
    { expiresIn: "7d" } // Atur expiry sesuai kebutuhan
  );
};
