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
exports.getIdleEmployees = exports.findUser = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const findUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const user = yield prisma_1.default.user.findFirst({
            where: { id: id },
            include: {
                Address: true,
                Employee: { include: { outlet: true, LaundryJob: true, TransportJob: true, EmployeeAttendance: true } },
                Notification: true,
            },
        });
        if (!user)
            throw { message: "User not found!" };
        if (user.isDeleted)
            throw { message: "User has been deleted!" };
        if (((_a = user.Employee) === null || _a === void 0 ? void 0 : _a.employmentStatus) != "EMPLOYED")
            throw { message: "User is no longer employed!" };
        if ((_b = user.Employee) === null || _b === void 0 ? void 0 : _b.isDeleted)
            throw { message: "User's employement data has been deleted!" };
        return user;
    }
    catch (error) {
        throw error;
    }
});
exports.findUser = findUser;
const getIdleEmployees = (outletId_1, role_1, ...args_1) => __awaiter(void 0, [outletId_1, role_1, ...args_1], void 0, function* (outletId, role, station = null) {
    try {
        const filter = { outletId, isPresent: true, isWorking: false, isDeleted: false, user: { role } };
        if (station != null)
            filter.station = station;
        const ids = yield prisma_1.default.employee.findMany({
            where: filter,
            select: { userId: true },
        });
        return ids.map((item) => item.userId);
    }
    catch (error) {
        throw error;
    }
});
exports.getIdleEmployees = getIdleEmployees;
