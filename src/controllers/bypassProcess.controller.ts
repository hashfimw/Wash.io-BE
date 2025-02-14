import { Request, Response } from "express";
import {
  handleBypassRequestService,
  requestBypassService,
} from "../services/outlets/bypassProcess.service";

export class BypassProcessController {
  requestBypassController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await requestBypassService(req, res);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  handleBypassRequestController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await handleBypassRequestService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
