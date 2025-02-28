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
exports.forgotPasswordService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const jsonwebtoken_1 = require("jsonwebtoken");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars")); // Import Handlebars
const mailer_1 = require("../mailer");
const config_1 = require("../../utils/config");
const forgotPasswordService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        // Check if user exists
        const user = yield prisma_1.default.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(404).send({ message: "Email not found!" });
        }
        // Ensure JWT key is available
        if (!process.env.JWT_KEY) {
            throw new Error("Missing JWT_KEY in environment variables");
        }
        // Generate reset token
        const payload = { id: user.id, email: user.email };
        const resetToken = (0, jsonwebtoken_1.sign)(payload, config_1.appConfig.SecretKey, { expiresIn: "1h" });
        const resetLink = `${process.env.BASE_URL_FE}/resetPassword/${resetToken}`;
        // Read email template
        const templatePath = path_1.default.join(__dirname, "../../templates", "forgotPassword.hbs");
        let templateSource;
        try {
            templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
        }
        catch (err) {
            console.error("Email template not found:", err);
            return res.status(500).json({ message: "Email template error" });
        }
        // Compile template
        const compiledTemplate = handlebars_1.default.compile(templateSource);
        const emailHtml = compiledTemplate({ username: user.fullName, resetLink });
        // Send email
        yield mailer_1.transporter.sendMail({
            from: "Admin <no-reply@washio.com>",
            to: email,
            subject: "Password Reset Request",
            html: emailHtml,
        });
        res
            .status(200)
            .send({
            message: `Password reset link has been sent to your email ${email}! ✅`,
        });
    }
    catch (error) {
        console.error("Forgot Password Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.forgotPasswordService = forgotPasswordService;
