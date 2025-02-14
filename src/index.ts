import express, { Application, Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import { SuperAdmOutletRouter } from "./routers/superAdmOutlet.router";
import { SuperAdmEmployeeRouter } from "./routers/superAdmEmployee.router";
import path from "path";
import { AuthRouter } from "./routers/auth.router";
import { UserRouter } from "./routers/user.router";
import { showOrderRouter } from "./routers/showOrderOutlets.router";
import { OrderItemsRouter } from "./routers/processOrder.routes";
import { BypassProcessRouter } from "./routers/bypassProcess.router";

dotenv.config();

const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    methods: "GET, POST, PATCH, DELETE, OPTIONS",
    optionsSuccessStatus: 200,
    origin: `${process.env.BASE_URL_FE}`,
    credentials: true,
  })
);
export const upload = multer({ storage: multer.memoryStorage() });

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to my API");
});

// Initialize routers
const superAdmEmployee = new SuperAdmEmployeeRouter();
const superAdmOutlets = new SuperAdmOutletRouter();
const orderItemsRouter = new OrderItemsRouter();
const showOrder = new showOrderRouter();
const bypassProcess = new BypassProcessRouter();

// Routes
app.use("/api/adm-employee", superAdmEmployee.getRouter());
app.use("/api/adm-outlets", superAdmOutlets.getRouter());
app.use("/api/public", express.static(path.join(__dirname, "../public")));
app.use("/api/orders", orderItemsRouter.getRouter());
app.use("/api/orders/show-order", showOrder.getRouter());
app.use("/api/bypass", bypassProcess.getRouter());

const authRouter = new AuthRouter();
const userRouter = new UserRouter();

app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());

app.listen(PORT, () => {
  console.log(`server is running on => http://localhost:${PORT}/api`);
});

export default app;
