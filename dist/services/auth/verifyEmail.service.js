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
const verifEmailService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.params;
        if (!token || typeof token !== "string") {
            return res.status(400).send({ message: "Invalid or missing token!" });
        }
        // Verify the token
        const decoded = (0, jsonwebtoken_1.verify)(token, config_1.appConfig.SecretKey);
        // Find the user and mark them as verified
        const user = yield prisma_1.default.user.findUnique({
            where: { id: decoded.id },
        });
        if (!user) {
            return res.status(404).send({ message: "User not found!" });
        }
        if (user.isVerified) {
            return res.status(400).send({ message: "Email already verified!" });
        }
        yield prisma_1.default.user.update({
            where: { id: user.id },
            data: { isVerified: true },
        });
        res.status(200).send({ message: "Email successfully verified ! ✅" });
    }
    catch (error) {
        throw error;
    }
});
exports.verifEmailService = verifEmailService;
