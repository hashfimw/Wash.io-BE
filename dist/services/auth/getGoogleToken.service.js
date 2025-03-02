"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoogleTokenService = void 0;
const google_auth_library_1 = require("google-auth-library");
const prisma_1 = __importDefault(require("../../prisma"));
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../utils/config");
const oAuth2Client = new google_auth_library_1.OAuth2Client(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
const getGoogleTokenService = (code) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 1️⃣ Tukar kode autentikasi dengan token dari Google
        const { tokens } = yield oAuth2Client.getToken(code);
        if (!tokens.id_token) {
            throw new Error("Failed to retrieve ID token from Google");
        }
        // 2️⃣ Verifikasi ID token Google
        const ticket = yield oAuth2Client.verifyIdToken({
            idToken: tokens.id_token,
            audience: process.env.CLIENT_ID,
        });
        const payload = ticket.getPayload();
        if (!payload || !payload.email) {
            throw new Error("Invalid token payload");
        }
        // 3️⃣ Ekstrak data user dari Google
        const userData = {
            email: payload.email,
            name: payload.name || "",
            picture: payload.picture || "",
        };
        // 4️⃣ Periksa apakah user sudah ada di database
        let user = yield prisma_1.default.user.findUnique({
            where: { email: userData.email },
        });
        if (user) {
            if (user.password) {
                throw new Error("Please login using email and password.");
            }
        }
        else {
            // 5️⃣ Jika user belum ada, buat user baru
            user = yield prisma_1.default.user.create({
                data: {
                    email: userData.email,
                    fullName: userData.name,
                    avatar: userData.picture,
                    isVerified: true,
                },
            });
        }
        // 6️⃣ Buatkan token JWT yang menyimpan lebih banyak informasi
        const token = (0, jsonwebtoken_1.sign)({
            id: user.id,
            email: user.email,
            fullName: user.fullName,
            avatar: user.avatar,
        }, config_1.appConfig.SecretKey, { expiresIn: "2h" });
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
    }
    catch (error) {
        console.error("Google Login Error:", error);
        throw new Error("Google login failed. Please try again.");
    }
});
exports.getGoogleTokenService = getGoogleTokenService;
