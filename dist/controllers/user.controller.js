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
exports.UserController = void 0;
const getUser_service_1 = require("../services/user/getUser.service");
const getUserId_service_1 = require("../services/user/getUserId.service");
const createUser_service_1 = require("../services/user/createUser.service");
const editUser_service_1 = require("../services/user/editUser.service");
const deleteUser_service_1 = require("../services/user/deleteUser.service");
const editAvatarCloud_service_1 = require("../services/auth/editAvatarCloud.service");
class UserController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getUser_service_1.getUserService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
    getUsersId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getUserId_service_1.getUserIdService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, createUser_service_1.createUserservice)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
    editUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, editUser_service_1.editUserService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, deleteUser_service_1.deleteUserService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
    editAvatarCloud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, editAvatarCloud_service_1.editAvatarCloudService)(req, res);
            }
            catch (error) {
                console.log(error);
                res.status(400);
            }
        });
    }
}
exports.UserController = UserController;
