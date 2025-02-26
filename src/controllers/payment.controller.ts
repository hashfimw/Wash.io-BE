 
// src/controllers/payment.controller.ts
import { Request, Response } from "express";
import { createPaymentService, getPaymentStatusService, handlePaymentNotificationService } from "../services/payment/payment.service";


export class PaymentController {
  createPayment = async (req: Request, res: Response): Promise<void> => {
    try {
      await createPaymentService(req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };

  handlePaymentNotification = async (req: Request, res: Response): Promise<void> => {
    try {
      await handlePaymentNotificationService(req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };

  getPaymentStatus = async (req: Request, res: Response): Promise<void> => {
    try {
      await getPaymentStatusService(req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };
}