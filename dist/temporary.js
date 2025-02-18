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
exports.payOrder = exports.updateOrder = exports.createOrder = exports.getNearestOutlets = void 0;
const prisma_1 = __importDefault(require("./prisma"));
const notification_service_1 = require("./services/notification/notification.service");
const finder_service_1 = require("./services/helpers/finder.service");
// const findAddress = async (addressId: number) => {
//   try {
//     return await prisma.address.findFirst({
//       where: { id: addressId },
//     });
//   } catch (error) {
//     throw error;
//   }
// };
const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const dLat = ((lat2 - lat1) * Math.PI) / 180.0;
    const dLon = ((lon2 - lon1) * Math.PI) / 180.0;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180.0) * Math.cos((lat2 * Math.PI) / 180.0) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return 6371 * c;
};
const getNearestOutlets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addressId = req.query.addressId;
        const limit = req.query.limit || "10";
        const page = req.query.page || "1";
        const address = yield prisma_1.default.address.findFirst({
            where: { id: +addressId },
            select: { province: true, latitude: true, longitude: true, customerId: true },
        });
        if (!address)
            throw { message: "Invalid Address Id!" };
        if (address.customerId != +req.user.id)
            throw { message: "Mismatched customer Id!" };
        if (!address.customerId)
            throw { message: "Outlet address is prohibited in this feature!" };
        const outletAdresses = (yield prisma_1.default.address.findMany({
            where: { Outlet: { NOT: {}, isDeleted: false }, isDeleted: false },
            include: { Outlet: true },
        }))
            .map((item) => {
            const distance = Math.round(haversineDistance(+address.latitude, +address.longitude, +item.latitude, +item.longitude) * 100) / 100;
            const { Outlet, id } = item, addressDetails = __rest(item, ["Outlet", "id"]);
            return Object.assign(Object.assign({ outletId: Outlet === null || Outlet === void 0 ? void 0 : Outlet.id, outletName: Outlet === null || Outlet === void 0 ? void 0 : Outlet.outletName, addressId: id }, addressDetails), { distance });
        })
            .filter((item) => {
            return item.distance < 15;
        })
            .sort((a, b) => a.distance - b.distance);
        const total = outletAdresses.length;
        const take = (+page - 1) * +limit;
        const paginatedData = outletAdresses.splice(take, +limit);
        res.status(200).send({ data: paginatedData, meta: { page: +page, limit: +limit, total: +total } });
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
exports.getNearestOutlets = getNearestOutlets;
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queries = {
            outletId: req.query.outletId,
            customerAddressId: req.query.customerAddressId,
            distance: req.query.distance,
        };
        const outlet = yield prisma_1.default.outlet.findFirst({
            where: { id: +queries.outletId },
        });
        if (!outlet)
            throw { message: "Invalid Outlet id!" };
        if (!queries.distance)
            throw { message: "Invalid distance!" };
        const driverIds = yield (0, finder_service_1.getIdleEmployees)(+queries.outletId, "DRIVER");
        // if (driverIds.length == 0) throw { message: "No idle Driver present at the outlet!" };
        // const customerAddress = await findAddress(+queries.customerAddressId);
        // const outletAddress = await findAddress(outlet!.outletAddressId);
        // const distance = haversineDistance(+customerAddress!.latitude, +customerAddress!.longitude, +outletAddress!.latitude, +outletAddress!.longitude);
        yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const order = yield tx.order.create({
                data: { outletId: +queries.outletId, customerAddressId: +queries.customerAddressId },
            });
            const transportJobId = (yield tx.transportJob.create({
                data: { orderId: order.id, transportType: "PICKUP", distance: +queries.distance },
            })).id;
            if (driverIds.length > 0) {
                yield tx.notification.createMany({
                    data: (0, notification_service_1.createMultipleNotificationDataService)(driverIds, "Pickup Job alert", " A new pickup job is available!", `https://example.com/transport-job/${transportJobId}`),
                });
            }
        }));
        res.status(201).send({ message: `Order created successfully!` });
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
exports.createOrder = createOrder;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = {
            weight: req.body.weight,
            orderItem: req.body.orderItem,
        };
        const outletId = (yield prisma_1.default.order.findFirst({
            where: { id: +id },
            select: { outletId: true },
        })).outletId;
        const orderItem = body.orderItem.map((item) => {
            return {
                qty: +item.qty,
                orderItemName: item.orderItemName,
            };
        });
        let laundryPrice = 20000;
        if (+body.weight > 2)
            laundryPrice = +body.weight * 10000;
        const order = yield prisma_1.default.order.findFirst({
            where: { id: +id },
        });
        if (order.orderStatus != "ARRIVED_AT_OUTLET")
            throw { message: "Invalid order status!" };
        const washerIds = yield (0, finder_service_1.getIdleEmployees)(outletId, "WORKER", "WASHING");
        if (washerIds.length == 0)
            throw { message: "No idle Washer present at the outlet!" };
        yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            yield tx.order.update({
                where: { id: +id },
                data: { laundryWeight: +body.weight, laundryPrice, OrderItem: { createMany: { data: orderItem } }, orderStatus: "READY_FOR_WASHING" },
            });
            const laundryJobId = (yield tx.laundryJob.create({
                data: { station: "WASHING", orderId: +id },
            })).id;
            yield tx.notification.createMany({
                data: (0, notification_service_1.createMultipleNotificationDataService)(washerIds, "Washing Job alert", " A new washing job is available!", `https://example.com/laundry-job/${laundryJobId}`),
            });
        }));
        res.status(201).send({ message: `Order updated successfully!` });
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
exports.updateOrder = updateOrder;
const payOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield prisma_1.default.transportJob.findFirst({
            where: { orderId: +id, transportType: "PICKUP" },
            select: { distance: true, order: { select: { outletId: true, orderStatus: true, isPaid: true } } },
        });
        const driverIds = yield (0, finder_service_1.getIdleEmployees)(data.order.outletId, "DRIVER");
        if (data.order.isPaid)
            throw { message: "Order already paid!" };
        const updateData = { isPaid: true };
        if (data.order.orderStatus == "AWAITING_PAYMENT")
            updateData.orderStatus = "WAITING_FOR_DELIVERY_DRIVER";
        yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            yield tx.order.update({ where: { id: +id }, data: updateData });
            if (data.order.orderStatus == "AWAITING_PAYMENT") {
                const transportJobId = (yield tx.transportJob.create({
                    data: { orderId: +id, transportType: "DELIVERY", distance: data.distance },
                })).id;
                yield tx.notification.createMany({
                    data: (0, notification_service_1.createMultipleNotificationDataService)(driverIds, "Delivery Job alert", " A new delivery job is available!", `https://example.com/transport-job/${transportJobId}`),
                });
            }
        }));
        res.status(201).send({ message: `Order paid successfully!` });
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
exports.payOrder = payOrder;
// export const nearestOutlets = async (req: Request, res: Response) => {
//   try {
//     const addressId = req.query.addressId as string;
//     const address = await prisma.address.findFirst({
//       where: { id: +addressId },
//       select: { latitude: true, longitude: true },
//     });
//     if (!address) throw { message: "Invalid Address Id!" };
//     const outletAdresses = prisma.address.findMany({
//       where: { Outlet: { NOT: {} } },
//     });
//     res.status(200).send({ outletAdresses });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// };
