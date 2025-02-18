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
exports.updateTransportJobByIdService = exports.getTransportJobByIdService = exports.getTransportJobsService = exports.findOutletsOrderIds = void 0;
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
const getTransportJobs = (filter, meta) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transportJobs = yield prisma_1.default.transportJob.findMany({
            where: filter,
            skip: (+meta.page - 1) * +meta.limit,
            take: +meta.limit,
            orderBy: { [meta.sortBy]: meta.sortOrder },
        });
        const count = yield prisma_1.default.transportJob.count({ where: filter });
        const total = Math.ceil(count / +meta.limit);
        return { data: transportJobs, meta: { page: +meta.page, limit: +meta.limit, total: total } };
    }
    catch (error) {
        throw error;
    }
});
const findOutletsOrderIds = (outletId_1, ...args_1) => __awaiter(void 0, [outletId_1, ...args_1], void 0, function* (outletId, orderStatus = null) {
    try {
        const filter = { outletId };
        if (orderStatus != null)
            filter.orderStatus = orderStatus;
        const ids = yield prisma_1.default.order.findMany({
            where: filter,
            select: { id: true },
        });
        return ids.map((item) => item.id);
    }
    catch (error) {
        throw error;
    }
});
exports.findOutletsOrderIds = findOutletsOrderIds;
const getTransportJobsService = (queries) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dates = (0, dateTime_service_1.dateValidator)(queries.startDate, queries.endDate);
        const filter = {};
        if (queries.transportType != "all") {
            filter.transportType = queries.transportType;
        }
        if (queries.requestType == "request") {
            const outletId = (yield getIdleDriver(queries.userId, +queries.tzo)).Employee.outletId;
            const orderIds = yield (0, exports.findOutletsOrderIds)(outletId);
            filter.orderId = { in: orderIds };
            filter.driverId = { equals: null };
        }
        else if (queries.requestType == "order") {
            const outletAdmin = yield (0, finder_service_1.findUser)(queries.userId);
            if (outletAdmin.role != "OUTLET_ADMIN")
                throw { message: "This user can't access this feature" };
            const orderIds = yield (0, exports.findOutletsOrderIds)(outletAdmin.Employee.outletId, "ARRIVED_AT_OUTLET");
            filter.orderId = { in: orderIds };
            filter.transportType = "PICKUP";
            filter.isCompleted = true;
        }
        else if (queries.requestType == "history") {
            const driver = yield (0, finder_service_1.findUser)(queries.userId);
            if (driver.role != "DRIVER")
                throw { message: "This user can't access this feature" };
            filter.driverId = driver.id;
            filter.isCompleted = Boolean(+queries.isCompleted);
            filter.createdAt = { gt: dates.start };
            filter.createdAt = { lt: dates.end };
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
const getTransportJobByIdService = (transportJobId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transportJob = yield prisma_1.default.transportJob.findUnique({
            where: { id: transportJobId },
            include: { driver: { include: { user: true } }, order: { include: { customerAddress: { include: { customer: true } } } } },
        });
        if (!transportJob)
            throw { message: "Invalid Transport Job id!" };
        const { driver, order } = transportJob, jobDetails = __rest(transportJob, ["driver", "order"]);
        const _a = order.customerAddress, { customer } = _a, address = __rest(_a, ["customer"]);
        return Object.assign(Object.assign({}, jobDetails), { orderStatus: order.orderStatus, isPaid: order.isPaid, driverId: driver === null || driver === void 0 ? void 0 : driver.id, driverName: driver === null || driver === void 0 ? void 0 : driver.user.fullName, outletId: order.outletId, customerName: customer.fullName, address });
    }
    catch (error) {
        throw error;
    }
});
exports.getTransportJobByIdService = getTransportJobByIdService;
const updateTransportJobByIdService = (transportJobId, userId, tzo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transportJob = yield (0, exports.getTransportJobByIdService)(transportJobId);
        const driver = yield (0, finder_service_1.findUser)(userId);
        const orderId = transportJob.orderId;
        const transportType = transportJob.transportType;
        const currentOrderStatus = transportJob.orderStatus;
        let newOrderStatus = "WAITING_FOR_PICKUP_DRIVER";
        if (driver.role != "DRIVER")
            throw { message: "This user can't access this feature" };
        if (transportJob.outletId != driver.Employee.outletId)
            throw { message: "Invalid Outlet Id!" };
        if (!driver.Employee.isPresent)
            throw { message: "You need to clock in attendance first!" };
        if (transportJob.isCompleted)
            throw { message: "Job already completed!" };
        const transportJobData = {
            where: { id: transportJobId },
            data: {},
        };
        const driverData = {
            where: { id: driver.Employee.id },
            data: {},
        };
        if (currentOrderStatus == "WAITING_FOR_PICKUP_DRIVER" || currentOrderStatus == "WAITING_FOR_DELIVERY_DRIVER") {
            yield getIdleDriver(userId, +tzo);
            if (transportType == "PICKUP")
                newOrderStatus = "ON_THE_WAY_TO_CUSTOMER";
            else if (transportType == "DELIVERY")
                newOrderStatus = "BEING_DELIVERED_TO_CUSTOMER";
            transportJobData.data.driverId = driver.Employee.id;
            driverData.data.isWorking = true;
        }
        else if (currentOrderStatus == "ON_THE_WAY_TO_CUSTOMER") {
            if (transportJob.driverId != driver.Employee.id)
                throw { message: "Invalid Driver Id!" };
            newOrderStatus = "ON_THE_WAY_TO_OUTLET";
            driverData.data.isWorking = true;
        }
        else if (currentOrderStatus == "ON_THE_WAY_TO_OUTLET" || currentOrderStatus == "BEING_DELIVERED_TO_CUSTOMER") {
            if (transportJob.driverId != driver.Employee.id)
                throw { message: "Invalid Driver Id!" };
            if (transportType == "PICKUP")
                newOrderStatus = "ARRIVED_AT_OUTLET";
            if (transportType == "DELIVERY")
                newOrderStatus = "RECEIVED_BY_CUSTOMER";
            transportJobData.data.isCompleted = true;
            driverData.data.isWorking = false;
        }
        else
            throw { message: "Invalid Order Status!" };
        yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            yield tx.transportJob.update(transportJobData);
            yield tx.employee.update(driverData);
            yield tx.order.update({ where: { id: orderId }, data: { orderStatus: newOrderStatus } });
            if (newOrderStatus == "ARRIVED_AT_OUTLET") {
                const outletAdminId = (yield tx.user.findFirst({
                    where: { Employee: { outletId: driver.Employee.outletId }, role: "OUTLET_ADMIN" },
                })).id;
                yield tx.notification.create({
                    data: {
                        userId: outletAdminId,
                        title: "New order alert",
                        description: "A new order arrived at the outlet!",
                        url: `${process.env.BASE_URL_FE}/order/${orderId}`,
                    },
                });
            }
        }));
        return;
    }
    catch (error) {
        throw error;
    }
});
exports.updateTransportJobByIdService = updateTransportJobByIdService;
