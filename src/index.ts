import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cron from "node-cron";
import path from "path";
import { AuthRouter } from "./routers/auth.router";
import { UserRouter } from "./routers/user.router";
import { AddressRouter } from "./routers/address.router";
import { PickupOrderRouter } from "./routers/pickupOrder.router";
import { PaymentRouter } from "./routers/payment.router";
import { SuperAdmOutletRouter } from "./routers/superAdmOutlet.router";
import { SuperAdmEmployeeRouter } from "./routers/superAdmEmployee.router";
import { showOrderRouter } from "./routers/showOrderOutlets.router";
import { OrderItemsRouter } from "./routers/processOrder.routes";
import { BypassRequestRouter } from "./routers/bypassProcess.router";
import { ReportRouter } from "./routers/report.router";
import AttendanceRouter from "./routers/attendance.router";
import TransportJobRouter from "./routers/transportJob.router";
import LaundryJobRouter from "./routers/laundryJob.router";
import NotificationRouter from "./routers/notification.router";
import { OutletsRouter } from "./routers/outlets.router";

dotenv.config();
const PORT: number = 8000;
const app: Application = express();

// ✅ Fix CORS & COOP
app.use(
  cors({
    methods: "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    optionsSuccessStatus: 200,
    origin: `${process.env.BASE_URL_FE}`, // Pastikan ini sudah benar di .env
    credentials: true,
  })
);

// ✅ Tambahkan Header COOP agar Google OAuth tidak terblokir
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to my API");
});

app.use("/api/public", express.static(path.join(__dirname, "../public")));

// 🔥 Routing API
const authRouter = new AuthRouter();
const userRouter = new UserRouter();
const addressRouter = new AddressRouter();
const pickupOrderRouter = new PickupOrderRouter();
const paymentRouter = new PaymentRouter();
const outletsRouter = new OutletsRouter();

const superAdmEmployee = new SuperAdmEmployeeRouter();
const superAdmOutlets = new SuperAdmOutletRouter();
const attendanceRouter = new AttendanceRouter();
const orderItemsRouter = new OrderItemsRouter();
const showOrder = new showOrderRouter();
const bypassProcess = new BypassRequestRouter();
const reportRouter = new ReportRouter();

const transportJobRouter = new TransportJobRouter();
const laundryJobRouter = new LaundryJobRouter();
const notificationRouter = new NotificationRouter();

app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/address", addressRouter.getRouter());
app.use("/api/pickup-orders", pickupOrderRouter.getRouter());
app.use("/api/payments", paymentRouter.getRouter());
app.use("/api/outlets", outletsRouter.getRouter());

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
  console.log(`🚀 Server is running on => http://localhost:${PORT}/api`);
});

export default app;
