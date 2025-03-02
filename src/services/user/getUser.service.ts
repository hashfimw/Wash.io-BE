import { Prisma } from "../../../prisma/generated/client";
import { Request, Response } from "express";
import prisma from "../../prisma";

export const getUserService = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string | undefined;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    const filter: Prisma.UserWhereInput = {
      role: "CUSTOMER",
    };

    if (search) {
      filter.OR = [
        { fullName: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    const countUser = await prisma.user.count({ where: filter });
    const total_page = Math.ceil(countUser / limit);

    const users = await prisma.user.findMany({
      where: filter,
      orderBy: { id: "asc" },
      take: limit,
      skip: limit * (page - 1),
    });

    return { total_page, page, limit, users };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
