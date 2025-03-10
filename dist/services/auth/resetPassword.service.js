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
exports.resetPasswordService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../prisma"));
const bcrypt_1 = require("bcrypt");
const config_1 = require("../../utils/config");
const resetPasswordService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, newPassword, confirmPassword } = req.body;
        console.log("Request body: ", req.body);
        if (!token) {
            res.status(400).send({ message: "Token is required !" });
            return;
        }
        if (newPassword !== confirmPassword) {
            res.status(400).send({ message: "Password do not match !" });
            return;
        }
        let decoded;
        try {
            decoded = (0, jsonwebtoken_1.verify)(token, config_1.appConfig.SecretKey);
        }
        catch (error) {
            console.error("Token verification failed:", error);
            res.status(400).send({ message: "Invalid or expired token!" });
            return;
        }
        console.log("Token decoded: ", decoded);
        const user = yield prisma_1.default.user.findUnique({
            where: { id: decoded.id },
        });
        if (!user) {
            res.status(404).send({ message: "User not found!" });
            return;
        }
        const salt = yield (0, bcrypt_1.genSalt)(10);
        const hashedPassword = yield (0, bcrypt_1.hash)(newPassword, salt);
        yield prisma_1.default.user.update({
            where: { id: user.id },
            data: { password: hashedPassword },
        });
        res.status(200).send({ message: "Password has been reset successfully ! ✅" });
    }
    catch (error) {
        throw error;
    }
});
exports.resetPasswordService = resetPasswordService;
