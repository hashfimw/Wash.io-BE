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
exports.getPaymentStatusService = exports.handlePaymentNotificationService = exports.createPaymentService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const midtrans_client_1 = __importDefault(require("midtrans-client"));
const notification_service_1 = require("../notification/notification.service");
const finder_service_1 = require("../helpers/finder.service");
// Initialize Midtrans client
const snap = new midtrans_client_1.default.Snap({
    isProduction: process.env.NODE_ENV === "production",
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
});
const createPaymentService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const { orderId } = req.body;
        if (!userId) {
            res.status(401).json({
                success: false,
                message: "Unauthorized: Please login first",
            });
            return;
        }
        // Find the order and validate it belongs to the user
        const order = yield prisma_1.default.order.findFirst({
            where: {
                id: Number(orderId),
                isDeleted: false,
                customerAddress: {
                    customerId: userId,
                },
            },
            include: {
                customerAddress: {
                    include: {
                        customer: true,
                    },
                },
                OrderItem: {
                    where: {
                        isDeleted: false,
                    },
                },
            },
        });
        if (!order) {
            res.status(404).json({
                success: false,
                message: "Order tidak ditemukan atau tidak memiliki akses.",
            });
            return;
        }
        // Check if order is already paid
        if (order.isPaid) {
            res.status(400).json({
                success: false,
                message: "Order ini sudah dibayar.",
            });
            return;
        }
        // Check if order has laundry price (means admin has processed it)
        if (!order.laundryPrice) {
            res.status(400).json({
                success: false,
                message: "Order belum diproses oleh admin outlet.",
            });
            return;
        }
        // Calculate total price
        const pickupOrder = yield prisma_1.default.transportJob.findFirst({ where: { orderId, transportType: "PICKUP" } });
        const distance = pickupOrder.distance;
        const fare = Math.round(distance * 8000);
        const totalPrice = order.laundryPrice + fare;
        // Check if payment already exists
        const existingPayment = yield prisma_1.default.payment.findUnique({
            where: {
                orderId: order.id,
            },
        });
        // If payment exists but not successful, we can reuse or update it
        // If it doesn't exist, create a new payment record
        let payment;
        // Create transaction payload for Midtrans
        const transactionDetails = {
            order_id: `ORDER-${order.id}-${Date.now()}`,
            gross_amount: totalPrice,
        };
        const customerDetails = {
            first_name: ((_b = order.customerAddress.customer) === null || _b === void 0 ? void 0 : _b.fullName) || "Customer",
            email: ((_c = order.customerAddress.customer) === null || _c === void 0 ? void 0 : _c.email) || "",
            phone: "", // Add phone if available in your schema
        };
        const items = [
            {
                id: "LAUNDRY",
                price: order.laundryPrice,
                quantity: 1,
                name: "Laundry price",
            },
            {
                id: "FARE",
                price: fare,
                quantity: 1,
                name: "Transport fare",
            },
        ];
        // Create Midtrans snap token
        const snapResponse = yield snap.createTransaction({
            transaction_details: transactionDetails,
            customer_details: customerDetails,
            item_details: items,
        });
        // Get token and redirect URL
        const snapToken = snapResponse.token;
        const snapRedirectURL = snapResponse.redirect_url;
        // Create or update payment record
        if (existingPayment) {
            payment = yield prisma_1.default.payment.update({
                where: {
                    id: existingPayment.id,
                },
                data: {
                    totalPrice,
                    paymentStatus: "PENDING",
                    snapToken,
                    snapRedirectURL,
                },
            });
        }
        else {
            payment = yield prisma_1.default.payment.create({
                data: {
                    totalPrice,
                    orderId: order.id,
                    snapToken,
                    snapRedirectURL,
                },
            });
        }
        res.status(200).json({
            success: true,
            data: {
                payment: Object.assign(Object.assign({}, payment), { fare }),
                snapToken,
                snapRedirectURL,
            },
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Terjadi kesalahan pada server.",
        });
    }
});
exports.createPaymentService = createPaymentService;
const handlePaymentNotificationService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notification = req.body;
        // Verify notification from Midtrans
        const statusResponse = yield snap.transaction.notification(notification);
        const orderId = statusResponse.order_id;
        const transactionStatus = statusResponse.transaction_status;
        const fraudStatus = statusResponse.fraud_status;
        // Extract the actual order ID from our format "ORDER-{id}-{timestamp}"
        const extractedOrderId = orderId.split("-")[1];
        if (!extractedOrderId) {
            res.status(400).json({
                success: false,
                message: "Invalid order ID format",
            });
            return;
        }
        // Get payment record
        const payment = yield prisma_1.default.payment.findFirst({
            where: {
                orderId: Number(extractedOrderId),
            },
            include: {
                order: { include: { customerAddress: true } },
            },
        });
        if (!payment) {
            res.status(404).json({
                success: false,
                message: "Payment record not found",
            });
            return;
        }
        let paymentStatus = "PENDING";
        // Handle different transaction statuses
        if (transactionStatus === "capture" || transactionStatus === "settlement") {
            if (fraudStatus === "challenge") {
                // Do nothing, still pending
            }
            else if (fraudStatus === "accept") {
                paymentStatus = "SUCCEEDED";
            }
        }
        else if (transactionStatus === "cancel" ||
            transactionStatus === "deny" ||
            transactionStatus === "failure") {
            paymentStatus = "CANCELLED";
        }
        else if (transactionStatus === "expire") {
            paymentStatus = "EXPIRED";
        }
        else if (transactionStatus === "pending") {
            paymentStatus = "PENDING";
        }
        const order = yield prisma_1.default.order.findFirst({
            where: {
                id: payment.orderId,
            },
        });
        const updateData = { isPaid: true };
        if (order.orderStatus == "AWAITING_PAYMENT")
            updateData.orderStatus = "WAITING_FOR_DELIVERY_DRIVER";
        yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Update payment status
            yield tx.payment.update({
                where: {
                    id: payment.id,
                },
                data: {
                    paymentStatus,
                    paymentMethod: statusResponse.payment_type,
                },
            });
            // If payment succeeded, mark order as paid and update order status
            if (paymentStatus === "SUCCEEDED") {
                yield tx.order.update({
                    where: { id: payment.orderId },
                    data: updateData,
                });
                if (order.orderStatus == "AWAITING_PAYMENT") {
                    const pickupOrder = yield prisma_1.default.transportJob.findFirst({
                        where: { orderId: order.id, transportType: "PICKUP" },
                    });
                    const distance = pickupOrder.distance / 1000;
                    // Create delivery transport job automatically
                    const deliveryJob = yield tx.transportJob.create({
                        data: {
                            transportType: "DELIVERY",
                            distance, // You may calculate this based on coordinates
                            orderId: payment.orderId,
                            isCompleted: false,
                        },
                    });
                    const driverIds = yield (0, finder_service_1.getIdleEmployees)(+orderId, "DRIVER");
                    yield tx.notification.createMany({
                        data: (0, notification_service_1.createMultipleNotificationDataService)(driverIds, "Delivery Job alert", " A new delivery job is available!", `/employee-dashboard/driver/${deliveryJob.id}`),
                    });
                }
                // Create notification for user
                yield tx.notification.create({
                    data: {
                        userId: payment.order.customerAddress.customerId,
                        title: "Pembayaran Berhasil",
                        description: `Pembayaran untuk order #${payment.orderId} telah berhasil. ${(order === null || order === void 0 ? void 0 : order.orderStatus) == "AWAITING_PAYMENT"
                            ? "Pesanan Anda akan segera dikirim"
                            : ""}.`,
                        url: `/order/${payment.orderId}`,
                    },
                });
            }
            res.status(200).json({
                success: true,
                message: "Notification processed successfully",
            });
        }));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Terjadi kesalahan pada server.",
        });
    }
});
exports.handlePaymentNotificationService = handlePaymentNotificationService;
const getPaymentStatusService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const { orderId } = req.params;
        if (!userId) {
            res.status(401).json({
                success: false,
                message: "Unauthorized: Please login first",
            });
            return;
        }
        const payment = yield prisma_1.default.payment.findFirst({
            where: {
                orderId: Number(orderId),
                order: {
                    customerAddress: {
                        customerId: userId,
                    },
                },
            },
        });
        if (!payment) {
            res.status(404).json({
                success: false,
                message: "Payment information not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: payment,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Terjadi kesalahan pada server.",
        });
    }
});
exports.getPaymentStatusService = getPaymentStatusService;
