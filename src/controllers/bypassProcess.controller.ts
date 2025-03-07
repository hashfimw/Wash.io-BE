import { Request, Response } from "express";
import {
  getBypassRequestByIdService,
  getBypassRequestsService,
  handleBypassRequestService,
  requestBypassService,
} from "../services/outlets/bypassProcess.service";

export class BypassRequestController {
  async requestBypassController(req: Request, res: Response): Promise<void> {
    try {
      const result = await requestBypassService(req, res);
      res.status(201).json(result);
    } catch (error: any) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message || "Internal server error" });
    }
  }

  async handleBypassRequestController(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const result = await handleBypassRequestService(req, res);
      res.status(200).json(result);
    } catch (error: any) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message || "Internal server error" });
    }
  }

  async getBypassRequestsController(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const result = await getBypassRequestsService(req, res);
      res.status(200).json(result);
    } catch (error: any) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message || "Internal server error" });
    }
  }

  async getBypassRequestByIdController(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { id } = req.params;
      if (!id || isNaN(Number(id))) {
        res.status(400).json({ message: "ID permintaan bypass tidak valid" });
        return;
      }

      const result = await getBypassRequestByIdService(req, res, Number(id));
      res.status(200).json(result);
    } catch (error: any) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message || "Internal server error" });
    }
  }
}
