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
    var _a, _b, _c, _d;
    try {
        const authHeader = req.headers.authorization;
        if (!(authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith("Bearer "))) {
            res.status(401).send({ message: "Unauthorized: No token provided" });
            return;
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            res.status(401).send({ message: "Unauthorized: Token missing" });
            return;
        }
        // Verify token
        let decoded;
        try {
            decoded = (0, jsonwebtoken_1.verify)(token, config_1.appConfig.SecretKey);
        }
        catch (tokenError) {
            res.status(403).send({ message: "Forbidden: Invalid token" });
            return;
        }
        if (!(decoded === null || decoded === void 0 ? void 0 : decoded.role)) {
            res.status(403).send({ message: "Forbidden: Invalid token payload" });
            return;
        }
        // Fetch user session from database
        const user = yield prisma_1.default.user.findUnique({
            where: {
                id: decoded.id,
                isDeleted: false
            },
            select: {
                id: true,
                fullName: true,
                email: true,
                avatar: true,
                role: true,
                isVerified: true,
                Employee: {
                    select: {
                        id: true,
                        outletId: true
                    }
                },
            },
        });
        if (!user) {
            res.status(404).send({ message: "User not found" });
            return;
        }
        // Create response data
        const responseData = {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            isVerified: user.isVerified,
            employeeId: (_b = (_a = user.Employee) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null,
            outletId: (_d = (_c = user.Employee) === null || _c === void 0 ? void 0 : _c.outletId) !== null && _d !== void 0 ? _d : null,
        };
        res.status(200).send(responseData);
    }
    catch (error) {
        throw error;
    }
});
exports.getSessionService = getSessionService;
