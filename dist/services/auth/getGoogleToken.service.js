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
const oAuth2Client = new google_auth_library_1.OAuth2Client(process.env.CLIENT_ID, process.env.CLIENT_SECRET, 'urn:ietf:wg:oauth:2.0:oob' // Update this based on your frontend redirect
);
const getGoogleTokenService = (code) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Exchange authorization code for tokens
        const { tokens } = yield oAuth2Client.getToken(code);
        if (!tokens.id_token) {
            throw new Error("Failed to retrieve ID token from Google");
        }
        // Verify and decode the ID token securely
        const ticket = yield oAuth2Client.verifyIdToken({
            idToken: tokens.id_token,
            audience: process.env.CLIENT_ID,
        });
        const payload = ticket.getPayload();
        if (!payload || !payload.email) {
            throw new Error("Invalid token payload");
        }
        const decode = {
            email: payload.email,
            name: payload.name || "",
            picture: payload.picture || "",
        };
        // Check if the user already exists in the database
        const existingUser = yield prisma_1.default.user.findFirst({
            where: { email: decode.email },
        });
        if (existingUser &&
            ((_a = existingUser.avatar) === null || _a === void 0 ? void 0 : _a.includes("googleusercontent.com"))) {
            const token = (0, jsonwebtoken_1.sign)({ id: existingUser.id }, config_1.appConfig.jwtSecretKey, {
                expiresIn: "2h",
            });
            return {
                message: "Login by Google Success",
                data: existingUser,
                token: token,
            };
        }
        if (existingUser === null || existingUser === void 0 ? void 0 : existingUser.password) {
            throw new Error("Please login using email and password");
        }
        // Create a new user if they don't exist
        const newUser = yield prisma_1.default.user.create({
            data: {
                email: decode.email,
                fullName: decode.name,
                avatar: decode.picture,
                isVerified: true,
            },
        });
        const token = (0, jsonwebtoken_1.sign)({ id: newUser.id }, config_1.appConfig.jwtSecretKey, {
            expiresIn: "2h",
        });
        return {
            message: "Login by Google Success",
            data: newUser,
            token: token,
        };
    }
    catch (error) {
        console.error("Google Login Error:", error);
        throw new Error("Google login failed. Please try again.");
    }
});
exports.getGoogleTokenService = getGoogleTokenService;
