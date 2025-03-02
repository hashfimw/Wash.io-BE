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
exports.getPickupOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getPickupOrderService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const { id } = req.params;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized: Please login first" });
            return;
        }
        // Make sure the order belongs to the authenticated user
        const order = yield prisma_1.default.order.findFirst({
            where: {
                id: Number(id),
                isDeleted: false,
                customerAddress: {
                    customerId: Number(userId)
                }
            },
            include: {
                customerAddress: true,
                outlet: {
                    include: {
                        outletAddress: true
                    }
                },
                OrderItem: {
                    where: { isDeleted: false }
                },
                TransportJob: {
                    where: {
                        isDeleted: false,
                        transportType: "PICKUP"
                    },
                    include: {
                        driver: {
                            include: {
                                user: {
                                    select: {
                                        fullName: true,
                                        avatar: true
                                    }
                                }
                            }
                        }
                    }
                },
                Payment: true
            }
        });
        if (!order) {
            res.status(404).json({ message: "Pickup order tidak ditemukan atau tidak memiliki akses." });
            return;
        }
        res.status(200).json({
            success: true,
            data: order
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Terjadi kesalahan pada server."
        });
    }
});
exports.getPickupOrderService = getPickupOrderService;
