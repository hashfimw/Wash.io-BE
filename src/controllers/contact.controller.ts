import { Request, Response, NextFunction } from "express";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";

export class ContactController {
  async sendContactEmail(req: Request, res: Response, next: NextFunction) {
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
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass
        },
      });

      // Read the email template
      const templatePath = path.join(__dirname, '../templates/contactEmail.hbs');
      const source = fs.readFileSync(templatePath, 'utf8');
      const template = handlebars.compile(source);
      
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
      await transporter.sendMail(mailOptions);

      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Thank you! Your message has been sent successfully." 
      });
    } catch (error) {
      console.error("Detailed error:", error);
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Failed to send email. Please try again later.";
      
      return res.status(500).json({ 
        success: false, 
        message: errorMessage 
      });
    }
  }
}