import { Request, Response } from "express";
import { createPickupOrderService } from "../services/pickupOrder/createPickupOrder.service";
import { getPickupOrderService } from "../services/pickupOrder/getPickupOrder.service";
import { deletePickupOrderService } from "../services/pickupOrder/deletePickupOrder.service";
import { getAllUserOrdersService } from "../services/pickupOrder/getPickupOrders.service";

export class PickupOrderController {
  async createPickupOrder(req: Request, res: Response) {
    try {
      const result = await createPickupOrderService(req, res);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getPickupOrder(req: Request, res: Response) {
    try {
      const result = await getPickupOrderService(req, res);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getPickupOrders(req: Request, res: Response) {
    try {
      const result = await getAllUserOrdersService(req, res);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async deletePickupOrder(req: Request, res: Response) {
    try {
      const result = await deletePickupOrderService(req, res);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
