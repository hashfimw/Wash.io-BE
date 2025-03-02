import { Request, Response } from "express";
import {
  createOrderItemService,
  deleteOrderItemService,
  getOrderItemService,
  processOrderService,
  updateOrderItemService,
} from "../services/outlets/processOrderItems.service";
import { getAllOrdersService } from "../services/outlets/orderOutlets.service";

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
      const result = await createOrderItemService(req, res);
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
      const result = await updateOrderItemService(req, res);
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
      const result = await deleteOrderItemService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getOrdersItemsByOutletController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await getOrderItemService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
