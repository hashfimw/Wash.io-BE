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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOngoingTransportJobService = exports.getTransportJobByIdService = exports.getTransportJobsService = exports.getIdleDriver = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const finder_service_1 = require("../helpers/finder.service");
const dateTime_service_1 = require("../helpers/dateTime.service");
const getIdleDriver = (userId, tzo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const driver = yield (0, finder_service_1.findUser)(userId);
        const workShift = (0, dateTime_service_1.shiftChecker)(tzo);
        if (tzo < -840 || tzo > 720 || !tzo)
            throw { message: "Invalid time zone offset!" };
        if (driver.role != "DRIVER")
            throw { message: "This user can't access this feature" };
        if (driver.Employee.workShift != workShift)
            throw { message: "You're out of your shift hours!" };
        if (!driver.Employee.isPresent)
            throw { message: "You need to clock in attendance first!" };
        if (driver.Employee.isWorking)
            throw { message: "You can't access this feature if you're assigned on ongoing job!" };
        return driver;
    }
    catch (error) {
        throw error;
    }
});
exports.getIdleDriver = getIdleDriver;
const getTransportJobs = (filter, meta) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transportJobs = yield prisma_1.default.transportJob.findMany({
            where: filter,
            skip: (meta.page - 1) * meta.limit,
            take: meta.limit,
            orderBy: { [meta.sortBy]: meta.sortOrder },
            select: { id: true, orderId: true, createdAt: true },
        });
        const total_data = yield prisma_1.default.transportJob.count({ where: filter });
        const total_pages = Math.ceil(total_data / meta.limit);
        if (total_pages > 0 && +meta.page > total_pages)
            throw { message: "Invalid page!" };
        const data = transportJobs.map((item) => {
            const { createdAt } = item, details = __rest(item, ["createdAt"]);
            return Object.assign(Object.assign({}, details), { date: createdAt });
        });
        return { data, meta: { page: meta.page, limit: meta.limit, total_pages: total_pages, total_data: total_data } };
    }
    catch (error) {
        throw error;
    }
});
const getTransportJobsService = (queries) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dates = (0, dateTime_service_1.dateValidator)(queries.startDate, queries.endDate);
        const filter = {};
        if (queries.transportType)
            filter.transportType = queries.transportType;
        if (queries.requestType == "request") {
            const outletId = (yield (0, exports.getIdleDriver)(queries.userId, queries.tzo)).Employee.outletId;
            const orderIds = yield (0, finder_service_1.findOutletsOrderIds)(outletId);
            filter.orderId = { in: orderIds };
            filter.driverId = { equals: null };
        }
        else if (queries.requestType == "history") {
            const driver = yield (0, finder_service_1.findUser)(queries.userId);
            if (driver.role != "DRIVER")
                throw { message: "This user can't access this feature" };
            filter.driverId = driver.Employee.id;
            filter.isCompleted = true;
            filter.createdAt = { gt: dates.start, lt: dates.end };
        }
        else
            throw { message: "Invalid request type!" };
        return yield getTransportJobs(filter, queries);
    }
    catch (error) {
        throw error;
    }
});
exports.getTransportJobsService = getTransportJobsService;
const getTransportJobById = (transportJobId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transportJob = yield prisma_1.default.transportJob.findUnique({
            where: { id: transportJobId },
            include: { driver: { include: { user: true } }, order: { include: { customerAddress: { include: { customer: true } } } } },
        });
        if (transportJob) {
            const { driverId, driver, order } = transportJob, jobDetails = __rest(transportJob, ["driverId", "driver", "order"]);
            const _a = order.customerAddress, { customer } = _a, address = __rest(_a, ["customer"]);
            return Object.assign(Object.assign({}, jobDetails), { orderStatus: order.orderStatus, isPaid: order.isPaid, employeeId: driverId, employeeName: driver === null || driver === void 0 ? void 0 : driver.user.fullName, outletId: order.outletId, customerName: customer.fullName, address });
        }
        else
            throw { message: "Invalid Transport Job id!" };
    }
    catch (error) {
        throw error;
    }
});
const getTransportJobByIdService = (userId, transportJobId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessor = yield (0, finder_service_1.findUser)(userId);
        const transportJob = yield getTransportJobById(transportJobId);
        if (!accessor.Employee)
            throw { message: "User is not an employee!" };
        if (accessor.role == "WORKER")
            throw { message: "Worker cannot access this page!" };
        if (accessor.role != "SUPER_ADMIN" && accessor.Employee.outletId != transportJob.outletId)
            throw { message: "Invalid Outlet Id!" };
        if (accessor.role == "DRIVER" && transportJob.isCompleted && transportJob.employeeId != accessor.Employee.id)
            throw { message: "Invalid Employee Id!" };
        return transportJob;
    }
    catch (error) {
        throw error;
    }
});
exports.getTransportJobByIdService = getTransportJobByIdService;
const getOngoingTransportJobService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const driver = yield (0, finder_service_1.findUser)(userId);
        if (driver.role != "DRIVER")
            throw { message: "Invalid role!" };
        const transportJob = yield prisma_1.default.transportJob.findFirst({
            where: { driverId: driver.Employee.id, isCompleted: false },
            select: { id: true },
        });
        if (transportJob) {
            return yield getTransportJobById(transportJob.id);
        }
        else
            throw { message: "You aren't assigned to a job right now!" };
    }
    catch (error) {
        throw error;
    }
});
exports.getOngoingTransportJobService = getOngoingTransportJobService;
