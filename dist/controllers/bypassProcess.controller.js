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
exports.BypassRequestController = void 0;
const bypassProcess_service_1 = require("../services/outlets/bypassProcess.service");
class BypassRequestController {
    // Worker mengajukan permintaan bypass
    requestBypassController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, bypassProcess_service_1.requestBypassService)(req, res);
                res.status(201).json(result);
            }
            catch (error) {
                console.log(error);
                res
                    .status(500)
                    .json({ message: error.message || "Internal server error" });
            }
        });
    }
    // Admin menangani (menyetujui/menolak) permintaan bypass
    handleBypassRequestController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, bypassProcess_service_1.handleBypassRequestService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res
                    .status(500)
                    .json({ message: error.message || "Internal server error" });
            }
        });
    }
    // Mendapatkan daftar permintaan bypass (admin only)
    getBypassRequestsController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, bypassProcess_service_1.getBypassRequestsService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res
                    .status(500)
                    .json({ message: error.message || "Internal server error" });
            }
        });
    }
    // Mendapatkan detail permintaan bypass berdasarkan ID
    getBypassRequestByIdController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id || isNaN(Number(id))) {
                    res.status(400).json({ message: "ID permintaan bypass tidak valid" });
                    return;
                }
                const result = yield (0, bypassProcess_service_1.getBypassRequestByIdService)(req, res, Number(id));
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res
                    .status(500)
                    .json({ message: error.message || "Internal server error" });
            }
        });
    }
}
exports.BypassRequestController = BypassRequestController;
