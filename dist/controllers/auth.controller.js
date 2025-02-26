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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const register_service_1 = require("../services/auth/register.service");
const verifyEmail_service_1 = require("../services/auth/verifyEmail.service");
const completeRegist_service_1 = require("../services/auth/completeRegist.service");
const login_service_1 = require("../services/auth/login.service");
const getGoogleToken_service_1 = require("../services/auth/getGoogleToken.service");
const forgotPassword_service_1 = require("../services/auth/forgotPassword.service");
const resetPassword_service_1 = require("../services/auth/resetPassword.service");
const getSession_service_1 = require("../services/auth/getSession.service");
class AuthController {
    registerController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, register_service_1.registerService)(req, res);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    verifyEmailController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, verifyEmail_service_1.verifEmailService)(req, res);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    completeRegistController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, completeRegist_service_1.completeRegistService)(req, res);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getGoogleTokenController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { code } = req.body;
                const result = yield (0, getGoogleToken_service_1.getGoogleTokenService)(code);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    loginController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, login_service_1.loginService)(req, res);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    forgotPasswordController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, forgotPassword_service_1.forgotPasswordService)(req, res);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    resetPasswordController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, resetPassword_service_1.resetPasswrodService)(req, res);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getSessionController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getSession_service_1.getSessionService)(req, res);
                res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.AuthController = AuthController;
