import prisma from "../../prisma";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import { transporter } from "../mailer";
import Handlebars from "handlebars";
import { appConfig } from "../../utils/config";

export const registerService = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Validate email input
    if (!email || typeof email !== "string") {
      return res.status(400).send({ message: "Invalid email provided!" });
    }

    // Check if the email already exists
    const existingUser = await prisma.user.findFirst({
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
    const newUser = await prisma.user.create({
      data: { email, isVerified: false },
    });

    // Generate a JWT token for the verification link
    const payload = { id: newUser.id };
    const token = sign(payload, appConfig.SecretKey, { expiresIn: "60m" });
    const verificationLink = `${process.env.BASE_URL_FE}/verify/${token}`;

    // Load and compile the email template
    const templatePath = path.resolve(
      __dirname,
      "../../templates",
      "verifyEmail.hbs"
    );
    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const compiledTemplate = Handlebars.compile(templateSource);
    const emailHtml = compiledTemplate({
      email,
      verificationLink,
    });

    // Send the verification email
    await transporter.sendMail({
      from: "Admin <no-reply@washio.com>",
      to: email,
      subject:
        "Welcome to Washio! Please verify your email to complete registration",
      html: emailHtml,
    });

    res
      .status(201)
      .send({ message: "Verification email sent successfully ! ✅" });
  } catch (error) {
    throw error;
  }
};
