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
exports.deleteOrderItemService = exports.updateOrderItemService = exports.getOrderItemService = exports.createOrderItemService = exports.processOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const client_1 = require("../../../prisma/generated/client");
const finder_service_1 = require("../helpers/finder.service");
const notification_service_1 = require("../notification/notification.service");
const processOrderService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Cek role pengguna
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
        include: { Employee: true },
    });
    const { orderId, laundryWeight, orderItems } = req.body;
    if (!orderId || !laundryWeight || !orderItems || !Array.isArray(orderItems)) {
        throw new Error("Invalid input data");
    }
    // Hitung total harga berdasarkan berat
    const pricePerKilo = 8000;
    const laundryPrice = laundryWeight * pricePerKilo;
    // Helper function untuk membuat template items
    const createOrderTemplateItems = (items, prismaInstance) => __awaiter(void 0, void 0, void 0, function* () {
        for (const item of items) {
            // Cek apakah template sudah ada
            const existingTemplate = yield prismaInstance.orderItem.findFirst({
                where: {
                    orderItemName: item.orderItemName,
                    orderId: null,
                    isDeleted: false,
                },
            });
            // Jika belum ada, buat template baru
            if (!existingTemplate) {
                yield prismaInstance.orderItem.create({
                    data: {
                        orderItemName: item.orderItemName,
                        // qty dan orderId tidak diisi untuk template
                    },
                });
            }
        }
    });
    // Logika berbeda berdasarkan role
    if ((user === null || user === void 0 ? void 0 : user.role) === client_1.Role.SUPER_ADMIN) {
        // Super admin bisa proses order dari semua outlet
        const result = yield prisma_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            // Buat template items terlebih dahulu
            yield createOrderTemplateItems(orderItems, prisma);
            const updatedOrder = yield prisma.order.update({
                where: { id: Number(orderId) },
                data: {
                    laundryWeight,
                    laundryPrice,
                    orderStatus: "READY_FOR_WASHING",
                    OrderItem: {
                        createMany: {
                            data: orderItems.map((item) => ({
                                orderItemName: item.orderItemName,
                                qty: item.qty,
                            })),
                        },
                    },
                },
                include: { customerAddress: true }
            });
            // Buat laundry job
            const laundryJob = yield prisma.laundryJob.create({
                data: {
                    orderId: updatedOrder.id,
                    station: client_1.WorkerStation.WASHING,
                    workerId: null,
                    isCompleted: false,
                    isByPassRequested: false,
                },
            });
            const washerIds = yield (0, finder_service_1.getIdleEmployees)(updatedOrder.outletId, "WORKER", "WASHING");
            yield prisma.notification.createMany({
                data: (0, notification_service_1.createMultipleNotificationDataService)(washerIds, "Washing Job alert", " A new washing job is available!", `/employee-dashboard/worker/${laundryJob.id}`),
            });
            yield prisma.notification.create({
                data: {
                    userId: updatedOrder.customerAddress.customerId,
                    title: "Order Payment Alert",
                    description: `Your order no #${updatedOrder.id} is now ready to be paid`,
                    url: `/order/${updatedOrder.id}`,
                },
            });
        }));
        return {
            message: "Pickup order processed successfully",
            data: result,
        };
    }
    else if ((user === null || user === void 0 ? void 0 : user.role) === client_1.Role.OUTLET_ADMIN) {
        // Outlet admin hanya bisa proses order di outlet miliknya
        const result = yield prisma_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            // Buat template items terlebih dahulu
            yield createOrderTemplateItems(orderItems, prisma);
            const updatedOrder = yield prisma.order.update({
                where: {
                    id: Number(orderId),
                    outletId: (_a = user.Employee) === null || _a === void 0 ? void 0 : _a.outletId, // Pastikan order di outlet admin
                },
                data: {
                    laundryWeight,
                    laundryPrice,
                    orderStatus: "READY_FOR_WASHING",
                    OrderItem: {
                        createMany: {
                            data: orderItems.map((item) => ({
                                orderItemName: item.orderItemName,
                                qty: item.qty,
                            })),
                        },
                    },
                },
            });
            // Buat laundry job
            yield prisma.laundryJob.create({
                data: {
                    orderId: updatedOrder.id,
                    station: client_1.WorkerStation.WASHING,
                    workerId: null,
                    isCompleted: false,
                    isByPassRequested: false,
                },
            });
            return prisma.order.findUnique({
                where: { id: updatedOrder.id },
                include: {
                    OrderItem: true,
                    LaundryJob: true,
                    outlet: true,
                    customerAddress: true,
                },
            });
        }));
        return {
            message: "Pickup order processed successfully",
            data: result,
        };
    }
    else {
        throw new Error("Unauthorized to process order");
    }
});
exports.processOrderService = processOrderService;
const createOrderItemService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Cek role pengguna
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    // Baik super admin maupun outlet admin bisa membuat item
    if (!user ||
        (user.role !== client_1.Role.SUPER_ADMIN && user.role !== client_1.Role.OUTLET_ADMIN)) {
        throw new Error("Unauthorized to create order item");
    }
    const { orderItemName } = req.body;
    // Cek apakah item dengan nama yang sama sudah ada
    const existingItem = yield prisma_1.default.orderItem.findFirst({
        where: {
            orderItemName: orderItemName,
            orderId: null, // Template item
            isDeleted: false,
        },
    });
    if (existingItem) {
        throw new Error("Item with this name already exists");
    }
    const item = yield prisma_1.default.orderItem.create({
        data: {
            orderItemName,
            // qty dan orderId tidak diisi
        },
    });
    return {
        message: "Item template created successfully",
        data: item,
    };
});
exports.createOrderItemService = createOrderItemService;
const getOrderItemService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Cek role pengguna
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    // Baik super admin maupun outlet admin bisa melihat item
    if (!user ||
        (user.role !== client_1.Role.SUPER_ADMIN && user.role !== client_1.Role.OUTLET_ADMIN)) {
        throw new Error("Unauthorized to view order items");
    }
    // Selalu gunakan findMany untuk mendapatkan data lengkap dengan ID
    const items = yield prisma_1.default.orderItem.findMany({
        where: {
            orderId: null,
            isDeleted: false,
        },
        orderBy: {
            orderItemName: "asc",
        },
    });
    // Jika tidak ada items template (dengan orderId null),
    // cari item yang memiliki orderItemName unik sebagai template
    if (items.length === 0) {
        // Dapatkan distinct item names beserta id dan timestamp
        const distinctItemNames = yield prisma_1.default.orderItem.findMany({
            where: {
                isDeleted: false,
            },
            distinct: ["orderItemName"],
            orderBy: {
                orderItemName: "asc",
            },
        });
        return {
            message: "Distinct item templates fetched successfully",
            data: distinctItemNames,
        };
    }
    return {
        message: "Item templates fetched successfully",
        data: items,
    };
});
exports.getOrderItemService = getOrderItemService;
const updateOrderItemService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Cek role pengguna
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    // Hanya super admin yang bisa update
    if ((user === null || user === void 0 ? void 0 : user.role) !== client_1.Role.SUPER_ADMIN) {
        throw new Error("Only Super Admin can update order items");
    }
    const { id } = req.params;
    const { orderItemName } = req.body;
    // Perbaikan: pastikan id dikonversi ke number
    const item = yield prisma_1.default.orderItem.update({
        where: {
            id: Number(id), // Pastikan id dikonversi ke number
        },
        data: {
            orderItemName,
        },
    });
    return {
        message: "Item template updated successfully",
        data: item,
    };
});
exports.updateOrderItemService = updateOrderItemService;
const deleteOrderItemService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Cek role pengguna
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    // Hanya super admin yang bisa delete
    if ((user === null || user === void 0 ? void 0 : user.role) !== client_1.Role.SUPER_ADMIN) {
        throw new Error("Only Super Admin can delete order items");
    }
    const { id } = req.params;
    yield prisma_1.default.orderItem.update({
        where: {
            id: Number(id),
        },
        data: {
            isDeleted: true,
            deletedAt: new Date(),
        },
    });
    return {
        message: "Item template deleted successfully",
    };
});
exports.deleteOrderItemService = deleteOrderItemService;
