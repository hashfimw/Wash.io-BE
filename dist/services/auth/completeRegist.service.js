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
exports.completeRegistService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../prisma"));
const bcrypt_1 = require("bcrypt");
const config_1 = require("../../utils/config");
const completeRegistService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { token, fullName, password } = req.body;
    // Validate input
    if (!token || !fullName || !password) {
        return { status: 400, message: "Missing required fields!" };
    }
    // Verify the token
    const decoded = (0, jsonwebtoken_1.verify)(token, config_1.appConfig.SecretKey);
    // Find the user and check if the email is already verified
    const user = yield prisma_1.default.user.findUnique({
        where: { id: decoded.id },
    });
    if (!user) {
        return { status: 404, message: "User not found!" };
    }
    // Hash the password
    const salt = yield (0, bcrypt_1.genSalt)(10);
    const hashedPassword = yield (0, bcrypt_1.hash)(password, salt);
    // Update the user with the full name and password
    yield prisma_1.default.user.update({
        where: { id: user === null || user === void 0 ? void 0 : user.id },
        data: {
            fullName,
            password: hashedPassword,
            isVerified: true, // Mark as verified after completing registration
        },
    });
    return {
        status: 200,
        message: "Registration is completed successfully! ✅"
    };
});
exports.completeRegistService = completeRegistService;
