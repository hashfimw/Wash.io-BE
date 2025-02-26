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
exports.SuperAdmOutletController = void 0;
const superAdmOutlets_service_1 = require("../services/outlets/superAdmOutlets.service");
class SuperAdmOutletController {
    constructor() {
        this.createOutletController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, superAdmOutlets_service_1.createOutletService)(req, res);
                res.status(201).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.getAllOutletsController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, superAdmOutlets_service_1.getAllOutletsService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.getOutletByIdController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, superAdmOutlets_service_1.getOutletByIdService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.updateOutletController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, superAdmOutlets_service_1.updateOutletService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.deleteOutletController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, superAdmOutlets_service_1.deleteOutletService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
}
exports.SuperAdmOutletController = SuperAdmOutletController;
