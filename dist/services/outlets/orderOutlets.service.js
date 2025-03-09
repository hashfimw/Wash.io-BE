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
exports.trackOrderService = exports.getAllOrdersService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const client_1 = require("../../../prisma/generated/client");
const getAllOrdersService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    // Cek role pengguna
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
        include: { Employee: true },
    });
    const { outletId, page = 1, limit = 20, sortOrder = "desc", orderStatus, search, startDate, endDate, } = req.query;
    // Base where clause
    const whereClause = {
        isDeleted: false,
    };
    // Logika filter berbeda berdasarkan role
    if ((user === null || user === void 0 ? void 0 : user.role) === client_1.Role.SUPER_ADMIN) {
        if (outletId) {
            whereClause.outletId = Number(outletId);
        }
    }
    else if ((user === null || user === void 0 ? void 0 : user.role) === client_1.Role.OUTLET_ADMIN) {
        if (!((_b = user.Employee) === null || _b === void 0 ? void 0 : _b.outletId)) {
            throw new Error("Outlet not found for this user");
        }
        whereClause.outletId = user.Employee.outletId;
    }
    else {
        throw new Error("Unauthorized to view orders");
    }
    // Filter tambahan
    if (orderStatus && orderStatus !== "all status") {
        whereClause.orderStatus = orderStatus;
    }
    // Add date range filter
    if (startDate && endDate) {
        whereClause.createdAt = {
            gte: new Date(startDate),
            lte: new Date(endDate),
        };
    }
    // Query dengan pagination
    const orders = yield prisma_1.default.order.findMany({
        where: whereClause,
        include: {
            outlet: true,
            customerAddress: true,
            OrderItem: true,
            LaundryJob: {
                include: {
                    worker: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
            TransportJob: {
                include: {
                    driver: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
        },
        orderBy: {
            createdAt: sortOrder,
        },
        skip: (+page - 1) * +limit,
        take: +limit,
    });
    // Hitung total orders untuk pagination dengan filter yang sama
    const totalOrders = yield prisma_1.default.order.count({
        where: whereClause,
    });
    const totalPages = Math.ceil(totalOrders / +limit);
    return {
        message: "Orders fetched successfully",
        data: orders,
        meta: {
            page: +page,
            limit: +limit,
            total: totalPages,
            totalRecords: totalOrders,
        },
    };
});
exports.getAllOrdersService = getAllOrdersService;
const trackOrderService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    // Cek role pengguna
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
        include: { Employee: true },
    });
    const { orderId } = req.params;
    // Logika berbeda berdasarkan role
    const whereClause = {
        id: Number(orderId),
        isDeleted: false,
    };
    if ((user === null || user === void 0 ? void 0 : user.role) === client_1.Role.OUTLET_ADMIN) {
        // Outlet admin hanya bisa track order di outlet miliknya
        if (!((_b = user.Employee) === null || _b === void 0 ? void 0 : _b.outletId)) {
            throw new Error("Outlet not found for this user");
        }
        whereClause.outletId = user.Employee.outletId;
    }
    const order = yield prisma_1.default.order.findFirst({
        where: whereClause,
        include: {
            outlet: true,
            OrderItem: true,
            Payment: true,
            customerAddress: true,
            LaundryJob: {
                include: {
                    worker: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
            TransportJob: {
                include: {
                    driver: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
        },
    });
    if (!order) {
        throw new Error("Order not found or unauthorized to access this order");
    }
    // Map LaundryJob dan TransportJob ke timeline
    const timeline = [
        ...order.LaundryJob.map((job) => {
            var _a;
            return ({
                stage: job.station,
                worker: (_a = job.worker) === null || _a === void 0 ? void 0 : _a.user.fullName,
                status: job.isCompleted ? "Completed" : "In Progress",
                timestamp: job.createdAt,
            });
        }),
        ...order.TransportJob.map((job) => {
            var _a;
            return ({
                stage: job.transportType,
                driver: (_a = job.driver) === null || _a === void 0 ? void 0 : _a.user.fullName,
                status: job.isCompleted ? "Completed" : "In Progress",
                timestamp: job.createdAt,
            });
        }),
    ];
    // Dapatkan TransportJob terakhir untuk driver info
    const lastTransportJob = order.TransportJob[order.TransportJob.length - 1];
    const lastDriverName = (_c = lastTransportJob === null || lastTransportJob === void 0 ? void 0 : lastTransportJob.driver) === null || _c === void 0 ? void 0 : _c.user.fullName;
    // Add additional stages based on order status
    // Membuat objek sebagai TransportType untuk menyesuaikan dengan tipe yang diharapkan
    if (order.orderStatus === client_1.OrderStatus.RECEIVED_BY_CUSTOMER || order.orderStatus === client_1.OrderStatus.COMPLETED) {
        timeline.push({
            stage: "RECEIVED_BY_CUSTOMER", // Cast ke TransportType agar sesuai dengan tipe
            driver: lastDriverName, // Menggunakan driver dari last transport job
            status: "Completed",
            timestamp: order.updatedAt,
        });
    }
    if (order.orderStatus === client_1.OrderStatus.COMPLETED) {
        timeline.push({
            stage: "COMPLETED",
            driver: lastDriverName,
            status: "Completed",
            timestamp: order.updatedAt,
        });
    }
    // Sort the timeline by timestamp
    const sortedTimeline = timeline.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    // Format payment information
    const paymentInfo = order.Payment
        ? {
            isPaid: order.isPaid,
            paymentStatus: order.Payment.paymentStatus,
            paymentMethod: order.Payment.paymentMethod,
            totalPrice: order.Payment.totalPrice,
            snapRedirectURL: order.Payment.snapRedirectURL,
        }
        : {
            isPaid: order.isPaid,
            paymentStatus: null,
            paymentMethod: null,
            totalPrice: null,
            snapRedirectURL: null,
        };
    return {
        message: "Order tracking fetched successfully",
        data: {
            order,
            timeline: sortedTimeline,
            payment: paymentInfo,
        },
    };
});
exports.trackOrderService = trackOrderService;
