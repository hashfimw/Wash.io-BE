import { Request, Response } from "express";
import prisma from "../../prisma";
import { Prisma } from "prisma/generated/client";

export const getUserService = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string | undefined;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    const filter: Prisma.UserWhereInput = {};

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

    res.status(200).json({ total_page, page, limit, users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong !" });
  }
};
