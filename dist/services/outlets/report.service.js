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
exports.getEmployeePerformanceService = exports.getSalesReportService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getSalesReportService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { startDate, endDate, outletId, period = "daily", page = 1, limit = 10, } = req.query;
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
        include: { Employee: true },
    });
    // Verifikasi akses - Outlet Admin hanya bisa melihat outlet sendiri
    if ((user === null || user === void 0 ? void 0 : user.role) !== "SUPER_ADMIN" &&
        outletId &&
        Number(outletId) !== ((_b = user === null || user === void 0 ? void 0 : user.Employee) === null || _b === void 0 ? void 0 : _b.outletId)) {
        throw new Error("You can only access reports for your own outlet");
    }
    const whereClause = Object.assign(Object.assign({ createdAt: {
            gte: startDate ? new Date(String(startDate)) : undefined,
            lte: endDate ? new Date(String(endDate)) : undefined,
        }, isPaid: true, isDeleted: false }, ((user === null || user === void 0 ? void 0 : user.role) !== "SUPER_ADMIN"
        ? { outletId: (_c = user === null || user === void 0 ? void 0 : user.Employee) === null || _c === void 0 ? void 0 : _c.outletId }
        : {})), (outletId ? { outletId: Number(outletId) } : {}));
    // Count total untuk pagination
    const totalCount = yield prisma_1.default.order.count({
        where: whereClause,
    });
    // Apply pagination
    const orders = yield prisma_1.default.order.findMany({
        where: whereClause,
        include: {
            outlet: {
                select: {
                    id: true,
                    outletName: true,
                },
            },
        },
        skip: (Number(page) - 1) * Number(limit),
        take: Number(limit),
    });
    let report;
    switch (period) {
        case "yearly":
            report = orders.reduce((acc, order) => {
                const year = order.createdAt.getFullYear();
                acc[year] = (acc[year] || 0) + (order.laundryPrice || 0);
                return acc;
            }, {});
            break;
        case "monthly":
            report = orders.reduce((acc, order) => {
                // Format bulan dengan leading zero untuk konsistensi
                const month = `${order.createdAt.getFullYear()}-${String(order.createdAt.getMonth() + 1).padStart(2, "0")}`;
                acc[month] = (acc[month] || 0) + (order.laundryPrice || 0);
                return acc;
            }, {});
            break;
        default:
            report = orders.reduce((acc, order) => {
                const day = order.createdAt.toISOString().split("T")[0];
                acc[day] = (acc[day] || 0) + (order.laundryPrice || 0);
                return acc;
            }, {});
    }
    return {
        data: report,
        meta: {
            total: totalCount,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.ceil(totalCount / Number(limit)),
        },
    };
});
exports.getSalesReportService = getSalesReportService;
const getEmployeePerformanceService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    // Destructure pagination parameters with defaults
    const { startDate, endDate, outletId, page = 1, limit = 10, sortBy = "totalJobs", sortOrder = "desc", } = req.query;
    // Convert to numbers and handle pagination
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
        include: { Employee: true },
    });
    // Verifikasi akses - Outlet Admin hanya bisa melihat outlet sendiri
    if ((user === null || user === void 0 ? void 0 : user.role) !== "SUPER_ADMIN" &&
        outletId &&
        Number(outletId) !== ((_b = user === null || user === void 0 ? void 0 : user.Employee) === null || _b === void 0 ? void 0 : _b.outletId)) {
        throw new Error("You can only access reports for your own outlet");
    }
    // Filter dasar untuk outlet
    const outletFilter = (user === null || user === void 0 ? void 0 : user.role) !== "SUPER_ADMIN"
        ? { outletId: (_c = user === null || user === void 0 ? void 0 : user.Employee) === null || _c === void 0 ? void 0 : _c.outletId }
        : outletId
            ? { outletId: Number(outletId) }
            : {};
    // Get worker performance with name info and pagination
    const workersQuery = prisma_1.default.employee.findMany({
        where: Object.assign(Object.assign({}, outletFilter), { isDeleted: false, station: { not: null } }),
        include: {
            user: {
                select: {
                    fullName: true,
                },
            },
            outlet: {
                select: {
                    outletName: true,
                },
            },
        },
        skip,
        take: limitNumber,
    });
    // Count total workers for pagination
    const totalWorkersCount = yield prisma_1.default.employee.count({
        where: Object.assign(Object.assign({}, outletFilter), { isDeleted: false, station: { not: null } }),
    });
    // Get worker jobs count with sorting
    const workers = yield workersQuery;
    const workerPerformance = yield Promise.all(workers.map((worker) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const jobCount = yield prisma_1.default.laundryJob.count({
            where: {
                workerId: worker.id,
                createdAt: {
                    gte: startDate ? new Date(String(startDate)) : undefined,
                    lte: endDate ? new Date(String(endDate)) : undefined,
                },
            },
        });
        return {
            workerId: worker.id,
            workerName: ((_a = worker.user) === null || _a === void 0 ? void 0 : _a.fullName) || "Unknown",
            outletName: ((_b = worker.outlet) === null || _b === void 0 ? void 0 : _b.outletName) || "Unknown",
            station: worker.station,
            totalJobs: jobCount,
        };
    })));
    // Sort worker performance
    const sortedWorkerPerformance = workerPerformance.sort((a, b) => {
        if (sortBy === "totalJobs") {
            return sortOrder === "desc"
                ? b.totalJobs - a.totalJobs
                : a.totalJobs - b.totalJobs;
        }
        // Add more sorting options if needed
        return 0;
    });
    // Get drivers with pagination
    const driversQuery = prisma_1.default.employee.findMany({
        where: Object.assign(Object.assign({}, outletFilter), { isDeleted: false, user: {
                role: "DRIVER",
            } }),
        include: {
            user: {
                select: {
                    fullName: true,
                },
            },
            outlet: {
                select: {
                    outletName: true,
                },
            },
        },
        skip,
        take: limitNumber,
    });
    // Count total drivers for pagination
    const totalDriversCount = yield prisma_1.default.employee.count({
        where: Object.assign(Object.assign({}, outletFilter), { isDeleted: false, user: {
                role: "DRIVER",
            } }),
    });
    // Get driver jobs count
    const drivers = yield driversQuery;
    const driverPerformance = yield Promise.all(drivers.map((driver) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const jobCount = yield prisma_1.default.transportJob.count({
            where: {
                driverId: driver.id,
                createdAt: {
                    gte: startDate ? new Date(String(startDate)) : undefined,
                    lte: endDate ? new Date(String(endDate)) : undefined,
                },
            },
        });
        return {
            driverId: driver.id,
            driverName: ((_a = driver.user) === null || _a === void 0 ? void 0 : _a.fullName) || "Unknown",
            outletName: ((_b = driver.outlet) === null || _b === void 0 ? void 0 : _b.outletName) || "Unknown",
            totalJobs: jobCount,
        };
    })));
    // Sort driver performance
    const sortedDriverPerformance = driverPerformance.sort((a, b) => {
        if (sortBy === "totalJobs") {
            return sortOrder === "desc"
                ? b.totalJobs - a.totalJobs
                : a.totalJobs - b.totalJobs;
        }
        // Add more sorting options if needed
        return 0;
    });
    return {
        data: {
            workers: sortedWorkerPerformance,
            drivers: sortedDriverPerformance,
        },
        pagination: {
            workers: {
                currentPage: pageNumber,
                totalPages: Math.ceil(totalWorkersCount / limitNumber),
                totalItems: totalWorkersCount,
                itemsPerPage: limitNumber,
            },
            drivers: {
                currentPage: pageNumber,
                totalPages: Math.ceil(totalDriversCount / limitNumber),
                totalItems: totalDriversCount,
                itemsPerPage: limitNumber,
            },
        },
        sortOptions: {
            sortBy: String(sortBy),
            sortOrder: String(sortOrder),
        },
    };
});
exports.getEmployeePerformanceService = getEmployeePerformanceService;
