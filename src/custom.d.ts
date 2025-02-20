import { Role } from "@prisma/client"; 
import "express";

export type UserPayload = {
  id: number; // ✅ Sesuai jika ID di database berupa angka
  role: Role; // ✅ Gunakan role untuk otorisasi pengguna
};

declare global {
  namespace Express {
    export interface Request {
      user?: UserPayload;
    }
  }
}
