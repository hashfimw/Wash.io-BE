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
exports.updateDeliveredOrderStatus = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const updateDeliveredOrderStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (yield prisma_1.default.order.findMany({
            where: { orderStatus: "RECEIVED_BY_CUSTOMER" },
            include: { customerAddress: true },
        })).map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const expire = new Date(new Date(item.updatedAt).getTime() + 172800000);
            const now = new Date();
            const userId = item.customerAddress.customerId;
            if (now > expire) {
                yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
                    yield tx.order.update({ where: { id: item.id }, data: { orderStatus: "COMPLETED" } });
                    yield tx.notification.create({
                        data: {
                            userId,
                            title: "Order auto completion alert",
                            description: "Your delivered order is automatically changed its status 2 days after it is delivered.",
                            url: `/order/${item.id}`,
                        },
                    });
                }));
                console.log(`Completed order status updated on order #${item.id}!`);
            }
        }));
    }
    catch (error) {
        throw error;
    }
});
exports.updateDeliveredOrderStatus = updateDeliveredOrderStatus;
