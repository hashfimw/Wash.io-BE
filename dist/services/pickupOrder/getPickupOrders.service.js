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
exports.getAllUserOrdersService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getAllUserOrdersService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        if (!userId) {
            res.status(401).json({
                success: false,
                message: "Unauthorized: Please login first"
            });
            return;
        }
        // Get user addresses first to find all associated orders
        const userAddresses = yield prisma_1.default.address.findMany({
            where: {
                customerId: userId,
                isDeleted: false
            },
            select: {
                id: true
            }
        });
        const addressIds = userAddresses.map(address => address.id);
        // Get all orders for all user addresses
        const orders = yield prisma_1.default.order.findMany({
            where: {
                customerAddressId: {
                    in: addressIds
                },
                isDeleted: false
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
                    where: { isDeleted: false },
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
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.status(200).json({
            success: true,
            data: orders
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
exports.getAllUserOrdersService = getAllUserOrdersService;
