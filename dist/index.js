"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const auth_router_1 = require("./routers/auth.router");
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
exports.upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
app.get("/api", (req, res) => {
    res.status(200).send("Welcome to my API");
});
app.use("/api/public", express_1.default.static(path_1.default.join(__dirname, "../public")));
const authRouter = new auth_router_1.AuthRouter();
app.use("/api/auth", authRouter.getRouter());
app.listen(PORT, () => {
    console.log(`server is running on => http://localhost:${PORT}/api`);
});
exports.default = app;
