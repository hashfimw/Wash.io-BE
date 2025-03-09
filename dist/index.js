"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const auth_router_1 = require("./routers/auth.router");
const user_router_1 = require("./routers/user.router");
const address_router_1 = require("./routers/address.router");
const pickupOrder_router_1 = require("./routers/pickupOrder.router");
const payment_router_1 = require("./routers/payment.router");
const superAdmOutlet_router_1 = require("./routers/superAdmOutlet.router");
const superAdmEmployee_router_1 = require("./routers/superAdmEmployee.router");
const showOrderOutlets_router_1 = require("./routers/showOrderOutlets.router");
const processOrder_routes_1 = require("./routers/processOrder.routes");
const bypassProcess_router_1 = require("./routers/bypassProcess.router");
const report_router_1 = require("./routers/report.router");
const attendance_router_1 = __importDefault(require("./routers/attendance.router"));
const transportJob_router_1 = __importDefault(require("./routers/transportJob.router"));
const laundryJob_router_1 = __importDefault(require("./routers/laundryJob.router"));
const notification_router_1 = __importDefault(require("./routers/notification.router"));
const outlets_router_1 = require("./routers/outlets.router");
const contact_router_1 = require("./routers/contact.router");
dotenv_1.default.config();
const PORT = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    methods: "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    optionsSuccessStatus: 200,
    origin: `${process.env.BASE_URL_FE}`,
    credentials: true,
}));
app.get("/api", (res) => {
    res.status(200).send("Welcome to my API");
});
app.use("/api/public", express_1.default.static(path_1.default.join(__dirname, "../public")));
const authRouter = new auth_router_1.AuthRouter();
const userRouter = new user_router_1.UserRouter();
const addressRouter = new address_router_1.AddressRouter();
const pickupOrderRouter = new pickupOrder_router_1.PickupOrderRouter();
const paymentRouter = new payment_router_1.PaymentRouter();
const outletsRouter = new outlets_router_1.OutletsRouter();
const contactRouter = new contact_router_1.ContactRouter();
const superAdmEmployee = new superAdmEmployee_router_1.SuperAdmEmployeeRouter();
const superAdmOutlets = new superAdmOutlet_router_1.SuperAdmOutletRouter();
const attendanceRouter = new attendance_router_1.default();
const orderItemsRouter = new processOrder_routes_1.OrderItemsRouter();
const showOrder = new showOrderOutlets_router_1.showOrderRouter();
const bypassProcess = new bypassProcess_router_1.BypassRequestRouter();
const reportRouter = new report_router_1.ReportRouter();
const transportJobRouter = new transportJob_router_1.default();
const laundryJobRouter = new laundryJob_router_1.default();
const notificationRouter = new notification_router_1.default();
app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/address", addressRouter.getRouter());
app.use("/api/pickup-orders", pickupOrderRouter.getRouter());
app.use("/api/payments", paymentRouter.getRouter());
app.use("/api/outlets", outletsRouter.getRouter());
app.use("/api/contact", contactRouter.getRouter());
app.use("/api/adm-employees", superAdmEmployee.getRouter());
app.use("/api/adm-outlets", superAdmOutlets.getRouter());
app.use("/api/orders", orderItemsRouter.getRouter());
app.use("/api/orders/show-order", showOrder.getRouter());
app.use("/api/bypass", bypassProcess.getRouter());
app.use("/api/reports", reportRouter.getRouter());
app.use("/api/attendances", attendanceRouter.getRouter());
app.use("/api/transport-jobs", transportJobRouter.getRouter());
app.use("/api/laundry-jobs", laundryJobRouter.getRouter());
app.use("/api/notifications", notificationRouter.getRouter());
app.listen(PORT, () => {
    console.log(`server is running on => http://localhost:${PORT}/api`);
});
exports.default = app;
