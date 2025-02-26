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
exports.updateTransportJobByIdService = void 0;
const finder_service_1 = require("../helpers/finder.service");
const getTransportJob_service_1 = require("./getTransportJob.service");
const notification_service_1 = require("../notification/notification.service");
const prisma_1 = __importDefault(require("../../prisma"));
const updateTransportJobByIdService = (transportJobId, userId, tzo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transportJob = yield (0, getTransportJob_service_1.getTransportJobByIdService)(userId, transportJobId);
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
            yield (0, getTransportJob_service_1.getIdleDriver)(userId, tzo);
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
            var _a;
            yield tx.transportJob.update(transportJobData);
            yield tx.employee.update(driverData);
            yield tx.order.update({ where: { id: orderId }, data: { orderStatus: newOrderStatus } });
            if (newOrderStatus == "ARRIVED_AT_OUTLET") {
                const outletAdminId = (yield tx.user.findFirst({
                    where: { Employee: { outletId: driver.Employee.outletId }, role: "OUTLET_ADMIN" },
                })).id;
                const superAdminIds = (yield tx.user.findMany({ where: { role: "SUPER_ADMIN" } })).map((item) => item.id);
                yield tx.notification.createMany({
                    data: (0, notification_service_1.createMultipleNotificationDataService)([...superAdminIds, outletAdminId], "New order alert", "A new order arrived at the outlet!", `${process.env.BASE_URL_FE}/order/${orderId}`),
                });
            }
            if (newOrderStatus == "RECEIVED_BY_CUSTOMER") {
                const customerId = (_a = (yield tx.order.findFirst({ where: { id: orderId }, include: { customerAddress: true } }))) === null || _a === void 0 ? void 0 : _a.customerAddress.customerId;
                yield tx.notification.create({
                    data: {
                        userId: customerId,
                        title: "Laundry arrival alert",
                        description: "Your fresh laundry has been succesfully delivered to you by our driver. Confirm to finalize your order now!",
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
