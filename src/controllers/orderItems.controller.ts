import { Request, Response } from "express";
import {
  createLaundryItemService,
  deleteLaundryItemService,
  getLaundryItemsByOutletService,
  processOrderService,
  updateLaundryItemService,
} from "../services/outlets/processOrderItems.service";

export class processOrderItemController {
  processOrders = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await processOrderService(req, res);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createLaundryItemController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await createLaundryItemService(req, res);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateLaundryItemController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await updateLaundryItemService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteLaundryItemController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await deleteLaundryItemService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getLaundryItemsByOutletController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await getLaundryItemsByOutletService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
