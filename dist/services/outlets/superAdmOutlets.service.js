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
const createOutletService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const outlets = yield prisma_1.default.outlet.findMany({
        where: { isDeleted: false },
        include: {
            outletAddress: true,
            Employee: {
                include: {
                    user: true,
                },
            },
        },
    });
    return {
        message: "Outlets fetched successfully",
        data: outlets,
    };
});
exports.getAllOutletsService = getAllOutletsService;
const getOutletByIdService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const outlet = yield prisma_1.default.outlet.findFirst({
        where: {
            id: Number(id),
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
    return {
        message: "Outlet fetched successfully",
        data: outlet,
    };
});
exports.getOutletByIdService = getOutletByIdService;
const updateOutletService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
