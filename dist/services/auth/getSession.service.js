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
exports.getSessionService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../prisma"));
const config_1 = require("../../utils/config");
const getSessionService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers.authorization;
        console.log("🔹 Received token:", authHeader); // ✅ Debugging token
        if (!(authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith("Bearer "))) {
            res.status(401).send({ message: "Unauthorized: No token provided" });
            return;
        }
        const token = authHeader.split(" ")[1];
        const decoded = (0, jsonwebtoken_1.verify)(token, config_1.appConfig.SecretKey);
        if (!(decoded === null || decoded === void 0 ? void 0 : decoded.id)) {
            res.status(403).send({ message: "Forbidden: Invalid token payload" });
            return;
        }
        const user = yield prisma_1.default.user.findUnique({
            where: { id: decoded.id, isDeleted: false },
        });
        if (!user) {
            res.status(404).send({ message: "User not found" });
            return;
        }
        res.status(200).send(user);
    }
    catch (error) {
        console.error("🔴 Session Error:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});
exports.getSessionService = getSessionService;
