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
exports.updateLaundryJobByIdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const finder_service_1 = require("../helpers/finder.service");
const notification_service_1 = require("../notification/notification.service");
const getLaundryJob_service_1 = require("./getLaundryJob.service");
const updateLaundryJobByIdService = (laundryJobId, userId, orderItemInput, tzo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const laundryJob = yield (0, getLaundryJob_service_1.getLaundryJobByIdService)(userId, laundryJobId);
        const worker = yield (0, finder_service_1.findUser)(userId);
        const orderId = laundryJob.orderId;
        const station = laundryJob.station;
        let currentOrderStatus = laundryJob.orderStatus;
        let newOrderStatus = "WAITING_FOR_PICKUP_DRIVER";
        if (worker.role != "WORKER")
            throw { message: "This user can't access this feature" };
        if (!worker.Employee.isPresent)
            throw { message: "You need to clock in attendance first!" };
        if (laundryJob.isCompleted)
            throw { message: "Job already completed!" };
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
            yield (0, getLaundryJob_service_1.getIdleWorker)(userId, tzo);
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
            if (laundryJob.employeeId != worker.Employee.id)
                throw { message: "Invalid Worker Id!" };
            const outletId = worker.Employee.outletId;
            if (station == "WASHING") {
                const ironerIds = yield (0, finder_service_1.getIdleEmployees)(outletId, "WORKER", "IRONING");
                notificationData = (0, notification_service_1.createMultipleNotificationDataService)(ironerIds, "Ironing Job Alert", "A new ironing job is available!");
                newOrderStatus = "WASHING_COMPLETED";
            }
            else if (station == "IRONING") {
                const packerIds = yield (0, finder_service_1.getIdleEmployees)(outletId, "WORKER", "PACKING");
                newLaundryJobData.station = "PACKING";
                notificationData = (0, notification_service_1.createMultipleNotificationDataService)(packerIds, "Packing Job Alert", "A new packing job is available!");
                newOrderStatus = "IRONING_COMPLETED";
            }
            else if (station == "PACKING" && laundryJob.isPaid) {
                const driverIds = yield (0, finder_service_1.getIdleEmployees)(outletId, "DRIVER");
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
            var _a;
            yield tx.laundryJob.update(laundryJobData);
            yield tx.employee.update(workerData);
            yield tx.order.update({ where: { id: orderId }, data: { orderStatus: newOrderStatus } });
            if (newOrderStatus == "WAITING_FOR_DELIVERY_DRIVER") {
                const transportJobId = (yield tx.transportJob.create({ data: { transportType: "DELIVERY", orderId, distance } })).id;
                notificationData = notificationData.map((item) => {
                    return Object.assign(Object.assign({}, item), { url: `/employee-dashboard/driver/${transportJobId}` });
                });
                if (notificationData.length > 0)
                    yield tx.notification.createMany({ data: notificationData });
            }
            if (currentOrderStatus == "BEING_WASHED" || currentOrderStatus == "BEING_IRONED") {
                const laundryJobId = (yield tx.laundryJob.create({ data: newLaundryJobData })).id;
                notificationData = notificationData.map((item) => {
                    return Object.assign(Object.assign({}, item), { url: `/employee-dashboard/worker/${laundryJobId}` });
                });
                if (notificationData.length > 0)
                    yield tx.notification.createMany({ data: notificationData });
            }
            if (newOrderStatus == "AWAITING_PAYMENT") {
                const customerId = (_a = (yield tx.order.findFirst({ where: { id: orderId }, include: { customerAddress: true } }))) === null || _a === void 0 ? void 0 : _a.customerAddress.customerId;
                yield tx.notification.create({
                    data: {
                        userId: customerId,
                        title: "Order payment alert",
                        description: "Your fresh laundry has been packed and waiting to be paid before being delivered. Pay your order now!",
                        url: `/order/${orderId}`,
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
exports.updateLaundryJobByIdService = updateLaundryJobByIdService;
