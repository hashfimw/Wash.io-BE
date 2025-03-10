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
exports.verifEmailService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../prisma"));
const config_1 = require("../../utils/config");
const verifEmailService = (req) => __awaiter(void 0, void 0, void 0, function* () {
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
            decoded = (0, jsonwebtoken_1.verify)(token, config_1.appConfig.SecretKey);
            console.log("Decoded token:", decoded); // 🐛 Debugging decoded data
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.TokenExpiredError) {
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
        const user = yield prisma_1.default.user.findUnique({
            where: { id: decoded.id },
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
        // await prisma.user.update({
        //   where: { id: user.id },
        //   data: { isVerified: true },
        // });
        return {
            status: 200,
            message: "Email successfully verified! ✅",
        };
    }
    catch (error) {
        console.error("Verification error:", error);
        return {
            status: 500,
            message: "Internal Server Error",
        };
    }
});
exports.verifEmailService = verifEmailService;
