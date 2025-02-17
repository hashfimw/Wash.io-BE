import { Request, Response } from "express";
import prisma from "../prisma";
import { Prisma } from "@prisma/client";

export default class NotificationController {
  getNotifications = async (req: Request, res: Response) => {
    try {
      const { requestType = "unread" } = req.query;

      const filter: Prisma.NotificationWhereInput = { userId: +req.user!.id };
      if (requestType != "all") {
        if (requestType == "unread") filter.isRead = false;
        else if (requestType == "read") filter.isRead = true;
      }

      const notifications = await prisma.notification.findMany({
        where: filter,
        orderBy: { createdAt: "desc" },
      });

      res.status(200).send(notifications);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

  markAllNotificationsAsRead = async (req: Request, res: Response) => {
    try {
      await prisma.notification.updateMany({
        where: { userId: +req.user!.id, isRead: false },
        data: { isRead: true },
      });

      res.status(201).send({ message: "Notification(s) are marked read by the user!" });
    } catch (error) {
      throw error;
    }
  };
}
