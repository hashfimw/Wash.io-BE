import { Request, Response } from "express";
import { getLaundryJobByIdService, getLaundryJobsService, getOngoingLaundryJobService } from "../services/laundryJob/getLaundryJob.service";
import { updateLaundryJobByIdService } from "../services/laundryJob/updateLaundryJob.service";
import { findUser } from "../services/helpers/finder.service";
import prisma from "../prisma";

export default class LaundryJobController {
  async getLaundryJobs(req: Request, res: Response) {
    try {
      const queries = {
        userId: +req.user!.id,
        tzo: +(req.query.tzo as string),
        requestType: req.query.requestType as "request" | "history",
        startDate: req.query.startDate as string,
        endDate: req.query.endDate as string,
        limit: +(req.query.limit as string) || 10,
        page: +(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || "createdAt",
        sortOrder: (req.query.sortOrder as "asc" | "desc") || "desc",
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
      const result = await getLaundryJobByIdService(+req.user!.id, +req.params.id);

      res.status(200).send({ data: result });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getOngoingLaundryJob(req: Request, res: Response) {
    try {
      const result = await getOngoingLaundryJobService(+req.user!.id);

      res.status(200).send({ data: result });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async countLaundryJobs(req: Request, res: Response) {
    try {
      const requestType = req.query.requestType as "request" | "history";
      const worker = await findUser(req.user!.id);
      if (worker.role != "WORKER") throw { message: "This user can't access this feature" };

      let count;
      if (requestType == "history") count = await prisma.laundryJob.count({ where: { workerId: worker.Employee!.id } });
      else if (requestType == "request") {
        count = await prisma.laundryJob.count({
          where: { isCompleted: false, station: worker.Employee!.station!, order: { outletId: worker.Employee!.outletId } },
        });
      }

      if (count != undefined) {
        res.status(200).send({ data: !!count });
      } else throw { message: "Invalid request" };
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async updateLaundryJobById(req: Request, res: Response) {
    try {
      await updateLaundryJobByIdService(+req.params.id, +req.user!.id, req.body.orderItemInput, +(req.query.tzo as string));

      res.status(201).send({ message: `Laundry Job and its Order Status updated successfully` });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
