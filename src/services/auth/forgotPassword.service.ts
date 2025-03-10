import { Request, Response } from "express";
import prisma from "../../prisma";
import { sign } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import Handlebars from "handlebars"; // Import Handlebars
import { transporter } from "../mailer";
import { appConfig } from "../../utils/config";

export const forgotPasswordService = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).send({ message: "Email not found!" });
    }

    // Ensure JWT key is available
    if (!process.env.JWT_KEY) {
      throw new Error("Missing JWT_KEY in environment variables");
    }

    // Generate reset token
    const payload = { id: user.id, email: user.email };
    const resetToken = sign(payload, appConfig.SecretKey, { expiresIn: "1h" });
    const resetLink = `${process.env.BASE_URL_FE}/reset-password/${resetToken}`;

    // Read email template
    const templatePath = path.join(
      __dirname,
      "../../templates",
      "forgotPassword.hbs"
    );
    let templateSource;
    try {
      templateSource = fs.readFileSync(templatePath, "utf-8");
    } catch (err) {
      console.error("Email template not found:", err);
      return res.status(500).json({ message: "Email template error" });
    }

    // Compile template
    const compiledTemplate = Handlebars.compile(templateSource);
    const emailHtml = compiledTemplate({ username: user.fullName, resetLink });

    // Send email
    await transporter.sendMail({
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
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
