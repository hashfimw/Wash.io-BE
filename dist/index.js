"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const superAdmOutlet_router_1 = require("./routers/superAdmOutlet.router");
const superAdmEmployee_router_1 = require("./routers/superAdmEmployee.router");
const node_cron_1 = __importDefault(require("node-cron"));
const path_1 = __importDefault(require("path"));
const auth_router_1 = require("./routers/auth.router");
const user_router_1 = require("./routers/user.router");
const address_router_1 = require("./routers/address.router");
const pickupOrder_router_1 = require("./routers/pickupOrder.router");
const attendance_router_1 = __importDefault(require("./routers/attendance.router"));
const attendanceScheduler_service_1 = __importDefault(require("./services/attendance/attendanceScheduler.service"));
const transportJob_router_1 = __importDefault(require("./routers/transportJob.router"));
const laundryJob_router_1 = __importDefault(require("./routers/laundryJob.router"));
const notification_router_1 = __importDefault(require("./routers/notification.router"));
const temporary_1 = require("./temporary");
const verifyToken_1 = require("./middlewares/verifyToken");
dotenv_1.default.config();
const PORT = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    methods: "GET, POST, PATCH, DELETE, OPTIONS",
    optionsSuccessStatus: 200,
    origin: `${process.env.BASE_URL_FE}`,
    credentials: true,
}));
app.get("/api", (res) => {
    res.status(200).send("Welcome to my API");
});
node_cron_1.default.schedule("*/15 * * * *", attendanceScheduler_service_1.default);
// Initialize routers
const superAdmEmployee = new superAdmEmployee_router_1.SuperAdmEmployeeRouter();
const superAdmOutlets = new superAdmOutlet_router_1.SuperAdmOutletRouter();
// Routes
app.use("/api/adm-employee", superAdmEmployee.getRouter());
app.use("/api/adm-outlets", superAdmOutlets.getRouter());
app.use("/api/public", express_1.default.static(path_1.default.join(__dirname, "../public")));
const authRouter = new auth_router_1.AuthRouter();
const userRouter = new user_router_1.UserRouter();
const addressRouter = new address_router_1.AddressRouter();
const pickupOrderRouter = new pickupOrder_router_1.PickupOrderRouter();
const attendanceRouter = new attendance_router_1.default();
const transportJobRouter = new transportJob_router_1.default();
const laundryJobRouter = new laundryJob_router_1.default();
const notificationRouter = new notification_router_1.default();
app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/address", addressRouter.getRouter());
app.use("/api/pickup-orders", pickupOrderRouter.getRouter());
app.use("/api/attendances", attendanceRouter.getRouter());
app.use("/api/transport-jobs", transportJobRouter.getRouter());
app.use("/api/laundry-jobs", laundryJobRouter.getRouter());
app.use("/api/notifications", notificationRouter.getRouter());
app.get("/api/outlets/nearest", verifyToken_1.verifyToken, temporary_1.getNearestOutlets);
app.post("/api/orders", temporary_1.createOrder);
app.patch("/api/orders/:id", temporary_1.updateOrder);
app.patch("/api/payments/:id", temporary_1.payOrder);
app.listen(PORT, () => {
    console.log(`server is running on => http://localhost:${PORT}/api`);
});
exports.default = app;
