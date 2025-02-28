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
const prisma_1 = __importDefault(require("../prisma"));
class NotificationController {
    constructor() {
        this.getNotifications = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { requestType = "unread", limit = "10", page = "1" } = req.query;
                const filter = { userId: +req.user.id };
                if (requestType != "all") {
                    if (requestType == "unread")
                        filter.isRead = false;
                    else if (requestType == "read")
                        filter.isRead = true;
                }
                const notifications = yield prisma_1.default.notification.findMany({
                    where: filter,
                    orderBy: { createdAt: "desc" },
                    skip: (+page - 1) * +limit,
                    take: +limit,
                });
                const total_data = yield prisma_1.default.notification.count({ where: filter });
                const total_pages = Math.ceil(total_data / +limit);
                res.status(200).send({ data: notifications, meta: { page: +page, limit: +limit, total_pages: +total_pages, total_data: +total_data } });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
        this.markAllNotificationsAsRead = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.default.notification.updateMany({
                    where: { userId: +req.user.id, isRead: false },
                    data: { isRead: true },
                });
                res.status(201).send({ message: "Notification(s) are marked read by the user!" });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
        this.markNotificationAsReadById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.default.notification.update({ where: { id: +req.params.id }, data: { isRead: true } });
                res.status(201).send({ message: "Notification is marked read by the user!" });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.default = NotificationController;
