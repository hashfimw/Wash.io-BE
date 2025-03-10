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
exports.registerService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const jsonwebtoken_1 = require("jsonwebtoken");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const mailer_1 = require("../mailer");
const handlebars_1 = __importDefault(require("handlebars"));
const config_1 = require("../../utils/config");
const registerService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        // Validate email input
        if (!email || typeof email !== "string") {
            return res.status(400).send({ message: "Invalid email provided!" });
        }
        // Check if the email already exists
        const existingUser = yield prisma_1.default.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            if (existingUser.isDeleted) {
                return res.status(400).send({
                    message: "This email has been removed. Please contact support.",
                });
            }
            return res.status(400).send({ message: "Email already exists!" });
        }
        // Create a new user with the email
        const newUser = yield prisma_1.default.user.create({
            data: { email, isVerified: false },
        });
        // Generate a JWT token for the verification link
        const payload = { id: newUser.id };
        const token = (0, jsonwebtoken_1.sign)(payload, config_1.appConfig.SecretKey, { expiresIn: "60m" });
        const verificationLink = `${process.env.BASE_URL_FE}/verify/${token}`;
        // Load and compile the email template
        const templatePath = path_1.default.resolve(__dirname, "../../templates", "verifyEmail.hbs");
        const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
        const compiledTemplate = handlebars_1.default.compile(templateSource);
        const emailHtml = compiledTemplate({
            email,
            verificationLink,
        });
        // Send the verification email
        yield mailer_1.transporter.sendMail({
            from: "Admin <no-reply@washio.com>",
            to: email,
            subject: "Welcome to Washio! Please verify your email to complete registration",
            html: emailHtml,
        });
        res
            .status(201)
            .send({ message: "Verification email sent successfully ! ✅" });
    }
    catch (error) {
        throw error;
    }
});
exports.registerService = registerService;
