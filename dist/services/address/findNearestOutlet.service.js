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
exports.findNearestOutletService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const haversine_1 = require("../../utils/haversine");
const findNearestOutletService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { latitude, longitude } = req.body;
        if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
            res.status(400).json({
                message: "Latitude dan Longitude diperlukan dan harus berupa angka",
            });
            return;
        }
        const outlets = yield prisma_1.default.outlet.findMany({
            include: { outletAddress: true },
        });
        if (outlets.length === 0) {
            res.status(404).json({ message: "Tidak ada outlet yang tersedia" });
            return;
        }
        const nearestOutlet = outlets
            .map((outlet) => {
            const distance = (0, haversine_1.haversineDistance)(parseFloat(latitude), parseFloat(longitude), parseFloat(outlet.outletAddress.latitude), parseFloat(outlet.outletAddress.longitude));
            return Object.assign(Object.assign({}, outlet), { distance });
        })
            .sort((a, b) => a.distance - b.distance)[0];
        res.json({ nearestOutlet });
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ message: "Terjadi kesalahan dalam pencarian outlet" });
    }
});
exports.findNearestOutletService = findNearestOutletService;
