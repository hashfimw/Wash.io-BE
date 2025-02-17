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
exports.updateLaundryJobByIdService = exports.getLaundryJobByIdService = exports.getLaundryJobsService = void 0;
const transportJob_service_1 = require("../transportJob/transportJob.service");
const prisma_1 = __importDefault(require("../../prisma"));
const finder_service_1 = require("../helpers/finder.service");
const dateTime_service_1 = require("../helpers/dateTime.service");
const notification_service_1 = require("../notification/notification.service");
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
const getLaundryJobs = (filter, meta) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const laundryJobs = yield prisma_1.default.laundryJob.findMany({
            where: filter,
            skip: (+meta.page - 1) * +meta.limit,
            take: +meta.limit,
            orderBy: { [meta.sortBy]: meta.sortOrder },
        });
        const count = yield prisma_1.default.laundryJob.count({ where: filter });
        const total = Math.ceil(count / +meta.limit);
        return { data: laundryJobs, meta: { page: meta.page, limit: meta.limit, total: total } };
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
            const outletId = (yield getIdleWorker(queries.userId, +queries.tzo)).Employee.outletId;
            const orderIds = yield (0, transportJob_service_1.findOutletsOrderIds)(outletId);
            filter.orderId = { in: orderIds };
            filter.workerId = { equals: null };
        }
        else if (queries.requestType == "history") {
            filter.workerId = queries.userId;
            filter.isCompleted = Boolean(+queries.isCompleted);
            filter.createdAt = { gt: dates.start };
            filter.createdAt = { lt: dates.end };
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
const getLaundryJobByIdService = (laundryJobId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const laundryJob = yield prisma_1.default.laundryJob.findUnique({
            where: { id: laundryJobId },
            include: { worker: { include: { user: true } }, order: { include: { customerAddress: { include: { customer: true } }, OrderItem: true } } },
        });
        if (!laundryJob)
            throw { message: "Invalid Laundry Job id!" };
        const { worker, order } = laundryJob, jobDetails = __rest(laundryJob, ["worker", "order"]);
        const _a = order.customerAddress, { customer } = _a, address = __rest(_a, ["customer"]);
        return Object.assign(Object.assign({}, jobDetails), { orderStatus: order.orderStatus, isPaid: order.isPaid, workerId: worker === null || worker === void 0 ? void 0 : worker.id, workerName: worker === null || worker === void 0 ? void 0 : worker.user.fullName, outletId: order.outletId, orderItem: order.OrderItem, customerName: customer.fullName, address });
    }
    catch (error) {
        throw error;
    }
});
exports.getLaundryJobByIdService = getLaundryJobByIdService;
const updateLaundryJobByIdService = (laundryJobId, userId, orderItemInput, tzo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const laundryJob = yield (0, exports.getLaundryJobByIdService)(laundryJobId);
        const worker = yield (0, finder_service_1.findUser)(userId);
        const orderId = laundryJob.orderId;
        const station = laundryJob.station;
        let currentOrderStatus = laundryJob.orderStatus;
        let newOrderStatus = "WAITING_FOR_PICKUP_DRIVER";
        if (worker.role != "WORKER")
            throw { message: "This user can't access this feature" };
        if (laundryJob.outletId != worker.Employee.outletId)
            throw { message: "Invalid Outlet Id!" };
        if (!worker.Employee.isPresent)
            throw { message: "You need to clock in attendance first!" };
        if (laundryJob.isCompleted)
            throw { message: "Job already completed!" };
        if (worker.Employee.station != laundryJob.station)
            throw { message: "Invalid station!" };
        const laundryJobData = {
            where: { id: laundryJobId },
            data: {},
        };
        const workerData = {
            where: { id: worker.Employee.id },
            data: {},
        };
        let distance = 0;
        let newLaundryJobData = { orderId, station: "IRONING" };
        let notificationData = [];
        if (currentOrderStatus == "READY_FOR_WASHING" || currentOrderStatus == "WASHING_COMPLETED" || currentOrderStatus == "IRONING_COMPLETED") {
            yield getIdleWorker(userId, +tzo);
            const orderItems = laundryJob.orderItem.map((item) => {
                return { orderItemId: item.id, qty: item.qty };
            });
            if (JSON.stringify(orderItems) != JSON.stringify(orderItemInput))
                throw { message: "Invalid Order Item input(s)!" };
            if (station == "WASHING")
                newOrderStatus = "BEING_WASHED";
            else if (station == "IRONING")
                newOrderStatus = "BEING_IRONED";
            else if (station == "PACKING")
                newOrderStatus = "BEING_PACKED";
            laundryJobData.data.workerId = worker.Employee.id;
            workerData.data.isWorking = true;
        }
        else if (currentOrderStatus == "BEING_WASHED" || currentOrderStatus == "BEING_IRONED" || currentOrderStatus == "BEING_PACKED") {
            if (laundryJob.workerId != worker.Employee.id)
                throw { message: "Invalid Worker Id!" };
            const outletId = worker.Employee.outletId;
            if (station == "WASHING") {
                const ironerIds = yield (0, finder_service_1.getIdleEmployees)(outletId, "WORKER", "IRONING");
                if (ironerIds.length == 0)
                    throw { message: "No idle Ironer present at the outlet!" };
                notificationData = (0, notification_service_1.createMultipleNotificationDataService)(ironerIds, "Ironing Job Alert", "A new ironing job is available!");
                newOrderStatus = "WASHING_COMPLETED";
            }
            else if (station == "IRONING") {
                const packerIds = yield (0, finder_service_1.getIdleEmployees)(outletId, "WORKER", "PACKING");
                if (packerIds.length == 0)
                    throw { message: "No idle Packer present at the outlet!" };
                newLaundryJobData.station = "PACKING";
                notificationData = (0, notification_service_1.createMultipleNotificationDataService)(packerIds, "Packing Job Alert", "A new packing job is available!");
                newOrderStatus = "IRONING_COMPLETED";
            }
            else if (station == "PACKING" && laundryJob.isPaid) {
                const driverIds = yield (0, finder_service_1.getIdleEmployees)(outletId, "DRIVER");
                if (driverIds.length == 0)
                    throw { message: "No idle Driver present at the outlet!" };
                distance = (yield prisma_1.default.transportJob.findFirst({
                    where: { orderId, transportType: "PICKUP" },
                })).distance;
                notificationData = (0, notification_service_1.createMultipleNotificationDataService)(driverIds, "Delivery Job Alert", "A new delivery job is available!");
                newOrderStatus = "WAITING_FOR_DELIVERY_DRIVER";
            }
            else if (station == "PACKING" && !laundryJob.isPaid)
                newOrderStatus = "AWAITING_PAYMENT";
            laundryJobData.data.isCompleted = true;
            workerData.data.isWorking = false;
        }
        else
            throw { message: "Invalid Order Status!" };
        yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            yield tx.laundryJob.update(laundryJobData);
            yield tx.employee.update(workerData);
            yield tx.order.update({ where: { id: orderId }, data: { orderStatus: newOrderStatus } });
            if (newOrderStatus == "WAITING_FOR_DELIVERY_DRIVER") {
                const transportJobId = (yield tx.transportJob.create({ data: { transportType: "DELIVERY", orderId, distance } })).id;
                notificationData = notificationData.map((item) => {
                    return Object.assign(Object.assign({}, item), { url: `${process.env.BASE_URL_FE}/transport-job/${transportJobId}` });
                });
                yield tx.notification.createMany({ data: notificationData });
            }
            if (currentOrderStatus == "BEING_WASHED" || currentOrderStatus == "BEING_IRONED") {
                const laundryJobId = (yield tx.laundryJob.create({ data: newLaundryJobData })).id;
                notificationData = notificationData.map((item) => {
                    return Object.assign(Object.assign({}, item), { url: `${process.env.BASE_URL_FE}/laundry-job/${laundryJobId}` });
                });
                yield tx.notification.createMany({ data: notificationData });
            }
        }));
        return;
    }
    catch (error) {
        throw error;
    }
});
exports.updateLaundryJobByIdService = updateLaundryJobByIdService;
