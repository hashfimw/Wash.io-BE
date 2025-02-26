import { Request, Response } from "express";
import prisma from "../prisma";
import { Prisma } from "../../prisma/generated/client";

export default class NotificationController {
  getNotifications = async (req: Request, res: Response) => {
    try {
      const { requestType = "unread", limit = "10", page = "1" } = req.query;

      const filter: Prisma.NotificationWhereInput = { userId: +req.user!.id };
      if (requestType != "all") {
        if (requestType == "unread") filter.isRead = false;
        else if (requestType == "read") filter.isRead = true;
      }

      const notifications = await prisma.notification.findMany({
        where: filter,
        orderBy: { createdAt: "desc" },
        skip: (+page - 1) * +limit,
        take: +limit,
      });

      const total_data = await prisma.notification.count({ where: filter });
      const total_pages = Math.ceil(total_data / +limit);

      res.status(200).send({ data: notifications, meta: { page: +page, limit: +limit, total_pages: +total_pages, total_data: +total_data } });
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
      console.log(error);
      res.status(400).send(error);
    }
  };

  markNotificationAsReadById = async (req: Request, res: Response) => {
    try {
      await prisma.notification.update({ where: { id: +req.params.id }, data: { isRead: true } });

      res.status(201).send({ message: "Notification is marked read by the user!" });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };
}
