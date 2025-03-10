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
exports.updatePickupOrderStatusService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const client_1 = require("../../../prisma/generated/client");
const updatePickupOrderStatusService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status } = req.body;
    if (!id || !status) {
        return res.status(400).json({
            success: false,
            message: "ID pesanan dan status baru diperlukan",
        });
    }
    try {
        // Validate that the status is a valid OrderStatus enum value
        const validStatuses = Object.values(client_1.OrderStatus);
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Status tidak valid",
                validStatuses: validStatuses,
            });
        }
        // Find the order first to make sure it exists
        const existingOrder = yield prisma_1.default.order.findUnique({
            where: { id: parseInt(id) },
        });
        if (!existingOrder) {
            return res.status(404).json({
                success: false,
                message: "Pesanan tidak ditemukan",
            });
        }
        // Update the order status
        const updatedOrder = yield prisma_1.default.order.update({
            where: { id: parseInt(id) },
            data: { orderStatus: status },
            include: {
                outlet: true,
                customerAddress: true,
                OrderItem: true,
                Payment: true,
                TransportJob: {
                    include: {
                        driver: {
                            include: {
                                user: true
                            }
                        }
                    }
                },
                LaundryJob: {
                    include: {
                        worker: {
                            include: {
                                user: true
                            }
                        }
                    }
                }
            },
        });
        return {
            success: true,
            message: "Status pesanan berhasil diperbarui",
            data: updatedOrder,
        };
    }
    catch (error) {
        console.error("Error updating order status:", error);
        throw error;
    }
});
exports.updatePickupOrderStatusService = updatePickupOrderStatusService;
