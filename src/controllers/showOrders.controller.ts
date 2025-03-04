import { Request, Response } from "express";
import {
  getAllOrdersService,
  trackOrderService,
} from "../services/outlets/orderOutlets.service";

export class showOrdersController {
  getAllOrdersController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await getAllOrdersService(req, res);
      res.status(200).json({
        message: "Get all orders success",
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  trackOrderController = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await trackOrderService(req, res);
      res.status(200).json({
        message: "Track order success",
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
