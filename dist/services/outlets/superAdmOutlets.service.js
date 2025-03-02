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
exports.deleteOutletService = exports.updateOutletService = exports.getOutletByIdService = exports.getAllOutletsService = exports.createOutletService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const client_1 = require("../../../prisma/generated/client");
const createOutletService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Pastikan hanya super admin yang bisa membuat outlet
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    if (!user || user.role !== client_1.Role.SUPER_ADMIN) {
        throw new Error("Only Super Admin can create outlets");
    }
    const { outletName, addressLine, province, regency, district, village, latitude, longitude, } = req.body;
    const outlet = yield prisma_1.default.outlet.create({
        data: {
            outletName,
            outletAddress: {
                create: {
                    addressLine,
                    province,
                    regency,
                    district,
                    village,
                    latitude,
                    longitude,
                },
            },
        },
        include: {
            outletAddress: true,
        },
    });
    return {
        message: "Outlet created successfully! ✅",
        data: outlet,
    };
});
exports.createOutletService = createOutletService;
const getAllOutletsService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
        include: {
            Employee: true,
        },
    });
    const { page = 1, limit = 10, sortOrder = "asc", search } = req.query;
    // Buat filter dasar
    const filter = {
        isDeleted: false,
    };
    // Jika user adalah OUTLET_ADMIN, filter hanya outletnya saja
    if ((user === null || user === void 0 ? void 0 : user.role) === client_1.Role.OUTLET_ADMIN && ((_b = user.Employee) === null || _b === void 0 ? void 0 : _b.outletId)) {
        filter.id = user.Employee.outletId;
    }
    else if ((user === null || user === void 0 ? void 0 : user.role) !== client_1.Role.SUPER_ADMIN) {
        // Tambahan keamanan, jika bukan SUPER_ADMIN atau OUTLET_ADMIN
        return res.status(403).json({
            message: "Forbidden: Access denied",
            data: null,
            meta: null,
        });
    }
    // Tambahkan search filter jika ada
    if (search) {
        filter.OR = [
            { outletName: { contains: search, mode: "insensitive" } },
            {
                outletAddress: {
                    OR: [
                        {
                            addressLine: { contains: search, mode: "insensitive" },
                        },
                        { province: { contains: search, mode: "insensitive" } },
                    ],
                },
            },
        ];
    }
    // Query outlets dengan pagination dan search
    const outlets = yield prisma_1.default.outlet.findMany({
        where: filter,
        include: {
            outletAddress: true,
            Employee: {
                include: {
                    user: true,
                },
            },
        },
        take: +limit,
        skip: (+page - 1) * +limit,
        orderBy: {
            outletAddress: {
                province: sortOrder,
            },
        },
    });
    const count = yield prisma_1.default.outlet.count({
        where: filter,
    });
    const total = Math.ceil(count / +limit);
    return {
        message: "Outlets fetched successfully",
        data: outlets,
        meta: {
            page: +page,
            limit: +limit,
            total,
            totalRecords: count,
        },
    };
});
exports.getAllOutletsService = getAllOutletsService;
const getOutletByIdService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Pastikan hanya super admin yang bisa melihat detail outlet
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    if (!user || user.role !== client_1.Role.SUPER_ADMIN) {
        throw new Error("Only Super Admin can view outlet details");
    }
    const { id } = req.params;
    if (!id) {
        return {
            message: "Outlet ID is required",
            data: null,
        };
    }
    try {
        const outletId = Number(id);
        if (isNaN(outletId)) {
            return {
                message: "Invalid outlet ID format",
                data: null,
            };
        }
        const outlet = yield prisma_1.default.outlet.findFirst({
            where: {
                id: outletId,
                isDeleted: false,
            },
            include: {
                outletAddress: true,
                Employee: {
                    include: {
                        user: true,
                    },
                },
            },
        });
        if (!outlet) {
            return {
                message: "Outlet not found",
                data: null,
            };
        }
        return {
            message: "Outlet fetched successfully",
            data: outlet,
        };
    }
    catch (error) {
        console.error("Error fetching outlet:", error);
        return {
            message: "Failed to fetch outlet",
            data: null,
        };
    }
});
exports.getOutletByIdService = getOutletByIdService;
const updateOutletService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Pastikan hanya super admin yang bisa update outlet
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    if (!user || user.role !== client_1.Role.SUPER_ADMIN) {
        throw new Error("Only Super Admin can update outlets");
    }
    const { id } = req.params;
    const { outletName, addressLine, province, regency, district, village, latitude, longitude, } = req.body;
    const outlet = yield prisma_1.default.outlet.update({
        where: { id: Number(id) },
        data: {
            outletName,
            outletAddress: {
                update: {
                    addressLine,
                    province,
                    regency,
                    district,
                    village,
                    latitude,
                    longitude,
                },
            },
        },
        include: {
            outletAddress: true,
        },
    });
    return {
        message: "Outlet updated successfully",
        data: outlet,
    };
});
exports.updateOutletService = updateOutletService;
const deleteOutletService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Pastikan hanya super admin yang bisa delete outlet
    const user = yield prisma_1.default.user.findUnique({
        where: { id: Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) },
    });
    if (!user || user.role !== client_1.Role.SUPER_ADMIN) {
        throw new Error("Only Super Admin can delete outlets");
    }
    const { id } = req.params;
    yield prisma_1.default.$transaction([
        prisma_1.default.address.updateMany({
            where: { Outlet: { id: Number(id) } },
            data: { isDeleted: true, deletedAt: new Date() },
        }),
        prisma_1.default.outlet.update({
            where: { id: Number(id) },
            data: { isDeleted: true, deletedAt: new Date() },
        }),
    ]);
    return {
        message: "Outlet deleted successfully",
    };
});
exports.deleteOutletService = deleteOutletService;
