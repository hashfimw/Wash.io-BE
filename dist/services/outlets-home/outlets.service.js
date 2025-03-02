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
exports.getOutletsUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getOutletsUserService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 1, limit = 10, sortOrder = "asc", search } = req.query;
        // Filter dasar - hanya tampilkan outlet yang tidak dihapus
        const filter = {
            isDeleted: false,
        };
        // Tambahkan search filter jika ada
        if (search) {
            filter.OR = [
                { outletName: { contains: search, mode: "insensitive" } },
                {
                    outletAddress: {
                        OR: [
                            { addressLine: { contains: search, mode: "insensitive" } },
                            { province: { contains: search, mode: "insensitive" } },
                            { district: { contains: search, mode: "insensitive" } },
                            { regency: { contains: search, mode: "insensitive" } },
                            { village: { contains: search, mode: "insensitive" } },
                        ],
                    },
                },
            ];
        }
        // Query outlets dengan pagination dan search
        const outlets = yield prisma_1.default.outlet.findMany({
            where: filter,
            select: {
                id: true,
                outletName: true,
                outletAddress: {
                    select: {
                        addressLine: true,
                        province: true,
                        regency: true,
                        district: true,
                        village: true,
                        latitude: true,
                        longitude: true,
                    }
                },
            },
            take: Number(limit),
            skip: (Number(page) - 1) * Number(limit),
            orderBy: {
                outletAddress: {
                    province: sortOrder,
                },
            },
        });
        const count = yield prisma_1.default.outlet.count({
            where: filter,
        });
        const total = Math.ceil(count / Number(limit));
        return res.status(200).json({
            message: "Outlets fetched successfully",
            data: outlets,
            meta: {
                page: Number(page),
                limit: Number(limit),
                total,
                totalRecords: count,
            },
        });
    }
    catch (error) {
        console.error("Error fetching outlets:", error);
        return res.status(500).json({
            message: "Failed to fetch outlets",
            data: null,
            meta: null,
            error: error instanceof Error ? error.message : "Unknown error occurred"
        });
    }
});
exports.getOutletsUserService = getOutletsUserService;
