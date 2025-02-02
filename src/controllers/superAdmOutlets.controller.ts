// src/controllers/superAdmOutlet.controller.ts
import { Request, Response } from "express";
import {
  createOutletService,
  deleteOutletService,
  getAllOutletsService,
  getOutletByIdService,
  updateOutletService,
} from "../services/outlets/superAdmOutlets.service";

export class SuperAdmOutletController {
  createOutletController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await createOutletService(req, res);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getAllOutletsController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await getAllOutletsService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getOutletByIdController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await getOutletByIdService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateOutletController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await updateOutletService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteOutletController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await deleteOutletService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
