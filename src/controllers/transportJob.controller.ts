import { Request, Response } from "express";
import { getTransportJobByIdService, getTransportJobsService, updateTransportJobByIdService } from "../services/transportJob/transportJob.service";

export default class TransportJobController {
  async getTransportJobs(req: Request, res: Response) {
    try {
      const queries = {
        userId: +req.user!.id,
        tzo: req.query.tzo as string,
        requestType: req.query.requestType as "request" | "order" | "history",
        transportType: (req.query.transportType as string) || "all",
        isCompleted: (req.query.isCompleted as string) || "1",
        startDate: req.query.startDate as string,
        endDate: req.query.endDate as string,
        limit: (req.query.limit as string) || "10",
        page: (req.query.page as string) || "1",
        sortBy: (req.query.sortBy as string) || "createdAt",
        sortOrder: (req.query.sortOrder as string) || "desc",
      };

      const result = await getTransportJobsService(queries);

      res.status(200).send({ data: result.data, meta: result.meta });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getTransportJobById(req: Request, res: Response) {
    try {
      const result = await getTransportJobByIdService(+req.params.id);

      res.status(200).send({ data: result });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async updateTransportJobById(req: Request, res: Response) {
    try {
      await updateTransportJobByIdService(+req.params.id, +req.user!.id, req.query.tzo as string);

      res.status(201).send({ message: `Transport Job and its Order Status updated successfully` });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
