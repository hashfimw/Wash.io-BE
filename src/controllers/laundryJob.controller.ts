import { Request, Response } from "express";
import { getLaundryJobByIdService, getLaundryJobsService, updateLaundryJobByIdService } from "../services/laundryJob/laundryJob.service";

export default class LaundryJobController {
  async getLaundryJobs(req: Request, res: Response) {
    try {
      const queries = {
        userId: +req.user!.id,
        tzo: req.query.tzo as string,
        requestType: req.query.requestType as "request" | "history",
        isCompleted: (req.query.isCompleted as string) || "1",
        startDate: req.query.startDate as string,
        endDate: req.query.endDate as string,
        limit: (req.query.limit as string) || "10",
        page: (req.query.page as string) || "1",
        sortBy: (req.query.sortBy as string) || "createdAt",
        sortOrder: (req.query.sortOrder as string) || "desc",
      };

      const result = await getLaundryJobsService(queries);

      res.status(200).send({ data: result.data, meta: result.meta });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getLaundryJobById(req: Request, res: Response) {
    try {
      const result = await getLaundryJobByIdService(+req.params.id);

      res.status(200).send({ data: result });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async updateLaundryJobById(req: Request, res: Response) {
    try {
      await updateLaundryJobByIdService(+req.params.id, +req.user!.id, req.body.orderItemInput, req.query.tzo as string);

      res.status(201).send({ message: `Laundry Job and its Order Status updated successfully` });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
