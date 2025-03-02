import { Prisma } from "../../../prisma/generated/client";
import { Request, Response } from "express";
import prisma from "../../prisma";


export const getOutletsUserService = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, sortOrder = "asc", search } = req.query;
    
    // Filter dasar - hanya tampilkan outlet yang tidak dihapus
    const filter: Prisma.OutletWhereInput = {
      isDeleted: false,
    };
    
    // Tambahkan search filter jika ada
    if (search) {
      filter.OR = [
        { outletName: { contains: search as string, mode: "insensitive" } },
        {
          outletAddress: {
            OR: [
              { addressLine: { contains: search as string, mode: "insensitive" } },
              { province: { contains: search as string, mode: "insensitive" } },
              { district: { contains: search as string, mode: "insensitive" } },
              { regency: { contains: search as string, mode: "insensitive" } },
              { village: { contains: search as string, mode: "insensitive" } },
            ],
          },
        },
      ];
    }
    
    // Query outlets dengan pagination dan search
    const outlets = await prisma.outlet.findMany({
      where: filter,
      select: {
        id: true,
        outletName: true,
        outletAddress: {
          select: {
            addressLine: true,
            province: true,
            regency: true,
            district: true,
            village: true,
            latitude: true,
            longitude: true,
          }
        },
      },
      take: Number(limit),
      skip: (Number(page) - 1) * Number(limit),
      orderBy: {
        outletAddress: {
          province: sortOrder as "asc" | "desc",
        },
      },
    });
    
    const count = await prisma.outlet.count({
      where: filter,
    });
    
    const total = Math.ceil(count / Number(limit));
    
    return res.status(200).json({
      message: "Outlets fetched successfully",
      data: outlets,
      meta: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalRecords: count,
      },
    });
  } catch (error) {
    console.error("Error fetching outlets:", error);
    return res.status(500).json({
      message: "Failed to fetch outlets",
      data: null,
      meta: null,
      error: error instanceof Error ? error.message : "Unknown error occurred"
    });
  }
};