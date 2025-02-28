import { Request, Response } from "express";
import {
  getEmployeePerformanceService,
  getSalesReportService,
} from "../services/outlets/report.service";

export class ReportController {
  getSalesReportController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await getSalesReportService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getEmployeePerformanceController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await getEmployeePerformanceService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
