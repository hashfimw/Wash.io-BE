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
exports.loginService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../utils/config");
const loginService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Validate email and password presence
        if (!email || !password) {
            return res
                .status(400)
                .send({ message: "Email and password are required!" });
        }
        // Check if user exists
        const user = yield prisma_1.default.user.findFirst({
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
                message: "This account has been deleted. Please contact support for more information",
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
        const isPasswordValid = yield (0, bcrypt_1.compare)(password, user.password);
        if (!isPasswordValid) {
            return res
                .status(400)
                .send({ message: "Incorrect email address or password!" });
        }
        // Generate JWT token
        const payload = { id: user.id, role: user.role };
        const token = (0, jsonwebtoken_1.sign)(payload, config_1.appConfig.SecretKey, { expiresIn: "1d" });
        // Send response with token
        res.status(200).send({
            message: "Login Successfuly! ✅",
            token,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.loginService = loginService;
