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
exports.ContactController = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class ContactController {
    sendContactEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, phone, subject, message } = req.body;
                // Use the correct environment variable names
                const emailUser = process.env.MAIL_USER;
                const emailPass = process.env.MAIL_PASS;
                if (!emailUser || !emailPass) {
                    return res.status(500).json({
                        success: false,
                        message: "Server configuration error: Email credentials not configured"
                    });
                }
                // Create email transporter
                const transporter = nodemailer_1.default.createTransport({
                    service: "gmail",
                    auth: {
                        user: emailUser,
                        pass: emailPass
                    },
                });
                // Read the email template
                const templatePath = path_1.default.join(__dirname, '../templates/contactEmail.hbs');
                const source = fs_1.default.readFileSync(templatePath, 'utf8');
                const template = handlebars_1.default.compile(source);
                // Prepare template data
                const templateData = {
                    name,
                    email,
                    phone: phone || "Not provided",
                    subject,
                    message: message.replace(/\n/g, "<br>")
                };
                // Generate HTML content
                const htmlContent = template(templateData);
                // Configure email content
                const mailOptions = {
                    from: emailUser,
                    replyTo: email,
                    to: "evenext.corp@gmail.com", // Your destination email
                    subject: `Contact Form: ${subject}`,
                    html: htmlContent,
                    // Fallback plain text version
                    text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}

Message:
${message}
        `,
                };
                // Send the email
                yield transporter.sendMail(mailOptions);
                // Return success response
                return res.status(200).json({
                    success: true,
                    message: "Thank you! Your message has been sent successfully."
                });
            }
            catch (error) {
                console.error("Detailed error:", error);
                const errorMessage = error instanceof Error
                    ? error.message
                    : "Failed to send email. Please try again later.";
                return res.status(500).json({
                    success: false,
                    message: errorMessage
                });
            }
        });
    }
}
exports.ContactController = ContactController;
