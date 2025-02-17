import express, { Application, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { SuperAdmOutletRouter } from "./routers/superAdmOutlet.router";
import { SuperAdmEmployeeRouter } from "./routers/superAdmEmployee.router";
import cron from "node-cron";
import path from "path";
import { AuthRouter } from "./routers/auth.router";
import { UserRouter } from "./routers/user.router";
import AttendanceRouter from "./routers/attendance.router";
import attendanceSchedule from "./services/attendance/attendanceScheduler.service";

dotenv.config();

const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    methods: "GET, POST, PATCH, DELETE, OPTIONS",
    optionsSuccessStatus: 200,
    origin: `${process.env.BASE_URL_FE!}`,
    credentials: true,
  })
);

app.get("/api", (res: Response) => {
  res.status(200).send("Welcome to my API");
});

cron.schedule("*/15 * * * *", attendanceSchedule);

// Initialize routers
const superAdmEmployee = new SuperAdmEmployeeRouter();
const superAdmOutlets = new SuperAdmOutletRouter();

// Routes
app.use("/api/adm-employee", superAdmEmployee.getRouter());
app.use("/api/adm-outlets", superAdmOutlets.getRouter());
app.use("/api/public", express.static(path.join(__dirname, "../public")));

const authRouter = new AuthRouter();
const userRouter = new UserRouter();
const attendanceRouter = new AttendanceRouter();

app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/attendances", attendanceRouter.getRouter());

app.listen(PORT, () => {
  console.log(`server is running on => http://localhost:${PORT}/api`);
});

export default app;
