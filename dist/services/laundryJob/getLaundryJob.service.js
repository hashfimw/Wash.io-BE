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
exports.getOngoingLaundryJobService = exports.getLaundryJobByIdService = exports.getLaundryJobsService = exports.getIdleWorker = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const finder_service_1 = require("../helpers/finder.service");
const dateTime_service_1 = require("../helpers/dateTime.service");
const getIdleWorker = (id, tzo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const worker = yield (0, finder_service_1.findUser)(id);
        const workShift = (0, dateTime_service_1.shiftChecker)(tzo);
        if (tzo < -840 || tzo > 720 || !tzo)
            throw { message: "Invalid time zone offset!" };
        if (worker.Employee.workShift != workShift)
            throw { message: "You're out of your shift hours!" };
        if (!worker.Employee.isPresent)
            throw { message: "You need to clock in attendance first!" };
        if (worker.Employee.isWorking)
            throw { message: "You can't access this feature if you're assigned on ongoing job!" };
        return worker;
    }
    catch (error) {
        throw error;
    }
});
exports.getIdleWorker = getIdleWorker;
const getLaundryJobs = (filter, meta) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const laundryJobs = yield prisma_1.default.laundryJob.findMany({
            where: filter,
            skip: (meta.page - 1) * meta.limit,
            take: meta.limit,
            orderBy: { [meta.sortBy]: meta.sortOrder },
        });
        const total_data = yield prisma_1.default.laundryJob.count({ where: filter });
        const total_pages = Math.ceil(total_data / meta.limit);
        if (total_pages > 0 && +meta.page > total_pages)
            throw { message: "Invalid page!" };
        return { data: laundryJobs, meta: { page: meta.page, limit: meta.limit, total_pages: total_pages, total_data: total_data } };
    }
    catch (error) {
        throw error;
    }
});
const getLaundryJobsService = (queries) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dates = (0, dateTime_service_1.dateValidator)(queries.startDate, queries.endDate);
        const worker = yield (0, finder_service_1.findUser)(queries.userId);
        if (worker.role != "WORKER")
            throw { message: "This user can't access this feature" };
        const filter = {};
        filter.station = worker.Employee.station;
        if (queries.requestType == "request") {
            const outletId = (yield (0, exports.getIdleWorker)(queries.userId, queries.tzo)).Employee.outletId;
            const orderIds = yield (0, finder_service_1.findOutletsOrderIds)(outletId);
            filter.orderId = { in: orderIds };
            filter.workerId = { equals: null };
        }
        else if (queries.requestType == "history") {
            filter.workerId = worker.Employee.id;
            filter.isCompleted = true;
            filter.createdAt = { gt: dates.start, lt: dates.end };
        }
        else
            throw { message: "Invalid request type!" };
        return yield getLaundryJobs(filter, queries);
    }
    catch (error) {
        throw error;
    }
});
exports.getLaundryJobsService = getLaundryJobsService;
const getLaundryJobByIdService = (userId, laundryJobId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessor = yield (0, finder_service_1.findUser)(userId);
        const laundryJob = yield prisma_1.default.laundryJob.findUnique({
            where: { id: laundryJobId },
            include: { worker: { include: { user: true } }, order: { include: { customerAddress: { include: { customer: true } }, OrderItem: true } } },
        });
        if (!laundryJob)
            throw { message: "Invalid Laundry Job id!" };
        if (!accessor.Employee)
            throw { message: "User is not an employee!" };
        if (accessor.role == "DRIVER")
            throw { message: "Driver cannot access this page!" };
        if (accessor.role != "SUPER_ADMIN" && accessor.Employee.outletId != laundryJob.order.outletId)
            throw { message: "Invalid Outlet Id!" };
        if (accessor.role == "WORKER") {
            if (laundryJob.station != accessor.Employee.station)
                throw { message: "Invalid station!" };
            if (laundryJob.isCompleted && laundryJob.workerId != accessor.Employee.id)
                throw { message: "Invalid Employee Id!" };
        }
        const { worker, order } = laundryJob, jobDetails = __rest(laundryJob, ["worker", "order"]);
        const _a = order.customerAddress, { customer } = _a, address = __rest(_a, ["customer"]);
        return Object.assign(Object.assign({}, jobDetails), { orderStatus: order.orderStatus, isPaid: order.isPaid, workerId: worker === null || worker === void 0 ? void 0 : worker.id, workerName: worker === null || worker === void 0 ? void 0 : worker.user.fullName, outletId: order.outletId, orderItem: order.OrderItem, customerName: customer.fullName, address });
    }
    catch (error) {
        throw error;
    }
});
exports.getLaundryJobByIdService = getLaundryJobByIdService;
const getOngoingLaundryJobService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const worker = yield (0, finder_service_1.findUser)(userId);
        if (worker.role != "WORKER")
            throw { message: "Invalid role!" };
        const laundryJob = yield prisma_1.default.laundryJob.findFirst({
            where: { workerId: worker.Employee.id, isCompleted: false },
            include: { worker: { include: { user: true } }, order: { include: { customerAddress: { include: { customer: true } }, OrderItem: true } } },
        });
        if (laundryJob) {
            const { worker, order } = laundryJob, jobDetails = __rest(laundryJob, ["worker", "order"]);
            const _a = order.customerAddress, { customer } = _a, address = __rest(_a, ["customer"]);
            return Object.assign(Object.assign({}, jobDetails), { orderStatus: order.orderStatus, isPaid: order.isPaid, workerId: worker === null || worker === void 0 ? void 0 : worker.id, workerName: worker === null || worker === void 0 ? void 0 : worker.user.fullName, outletId: order.outletId, orderItem: order.OrderItem, customerName: customer.fullName, address });
        }
        else
            throw { message: "You aren't assigned to a job right now!" };
    }
    catch (error) {
        throw error;
    }
});
exports.getOngoingLaundryJobService = getOngoingLaundryJobService;
