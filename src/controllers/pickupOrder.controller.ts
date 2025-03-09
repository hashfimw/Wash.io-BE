import { Request, Response } from "express";
import { createPickupOrderService } from "../services/pickupOrder/createPickupOrder.service";
import { getPickupOrderService } from "../services/pickupOrder/getPickupOrder.service";
import { deletePickupOrderService } from "../services/pickupOrder/deletePickupOrder.service";
import { getAllUserOrdersService } from "../services/pickupOrder/getPickupOrders.service";
import { updatePickupOrderStatusService } from "../services/pickupOrder/updatePickupOrderStatus.service";

export class PickupOrderController {
  async createPickupOrder(req: Request, res: Response) {
    try {
      await createPickupOrderService(req, res);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async getPickupOrder(req: Request, res: Response) {
    try {
      const result = await getPickupOrderService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async getPickupOrders(req: Request, res: Response) {
    try {
      await getAllUserOrdersService(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server.",
      });
    }
  }

  async deletePickupOrder(req: Request, res: Response) {
    try {
      const result = await deletePickupOrderService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async updateOrderStatus(req: Request, res: Response) {
    try {
      await updatePickupOrderStatusService(req, res);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Gagal memperbarui status pesanan",
      });
    }
  }
}
