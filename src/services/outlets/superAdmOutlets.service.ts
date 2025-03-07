// src/services/superAdmOutlet.service.ts
import { Request, Response } from "express";
import prisma from "../../prisma";
import { Prisma, Role } from "../../../prisma/generated/client";

export const createOutletService = async (req: Request, res: Response) => {
  // Pastikan hanya super admin yang bisa membuat outlet
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  if (!user || user.role !== Role.SUPER_ADMIN) {
    throw new Error("Only Super Admin can create outlets");
  }

  const {
    outletName,
    addressLine,
    province,
    regency,
    district,
    village,
    latitude,
    longitude,
  } = req.body;

  const outlet = await prisma.outlet.create({
    data: {
      outletName,
      outletAddress: {
        create: {
          addressLine,
          province,
          regency,
          district,
          village,
          latitude,
          longitude,
        },
      },
    },
    include: {
      outletAddress: true,
    },
  });

  return {
    message: "Outlet created successfully! ✅",
    data: outlet,
  };
};

export const getAllOutletsService = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
    include: {
      Employee: true,
    },
  });
  const { page = 1, limit = 10, sortOrder = "asc", search } = req.query;
  // Buat filter dasar
  const filter: Prisma.OutletWhereInput = {
    isDeleted: false,
  };
  // Jika user adalah OUTLET_ADMIN, filter hanya outletnya saja
  if (user?.role === Role.OUTLET_ADMIN && user.Employee?.outletId) {
    filter.id = user.Employee.outletId;
  } else if (user?.role !== Role.SUPER_ADMIN) {
    // Tambahan keamanan, jika bukan SUPER_ADMIN atau OUTLET_ADMIN
    return res.status(403).json({
      message: "Forbidden: Access denied",
      data: null,
      meta: null,
    });
  }

  // Tambahkan search filter jika ada
  if (search) {
    filter.OR = [
      { outletName: { contains: search as string, mode: "insensitive" } },
      {
        outletAddress: {
          OR: [
            {
              addressLine: { contains: search as string, mode: "insensitive" },
            },
            { province: { contains: search as string, mode: "insensitive" } },
          ],
        },
      },
    ];
  }

  // Query outlets dengan pagination dan search
  const outlets = await prisma.outlet.findMany({
    where: filter,
    include: {
      outletAddress: true,
      Employee: {
        include: {
          user: true,
        },
      },
    },
    take: +limit,
    skip: (+page - 1) * +limit,
    orderBy: {
      outletAddress: {
        province: sortOrder as "asc" | "desc",
      },
    },
  });

  const count = await prisma.outlet.count({
    where: filter,
  });
  const total = Math.ceil(count / +limit);

  return {
    message: "Outlets fetched successfully",
    data: outlets,
    meta: {
      page: +page,
      limit: +limit,
      total,
      totalRecords: count,
    },
  };
};

export const getOutletByIdService = async (req: Request, res: Response) => {
  // Pastikan hanya super admin yang bisa melihat detail outlet
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  if (!user || user.role !== Role.SUPER_ADMIN) {
    throw new Error("Only Super Admin can view outlet details");
  }

  const { id } = req.params;

  if (!id) {
    return {
      message: "Outlet ID is required",
      data: null,
    };
  }

  try {
    const outletId = Number(id);

    if (isNaN(outletId)) {
      return {
        message: "Invalid outlet ID format",
        data: null,
      };
    }

    const outlet = await prisma.outlet.findFirst({
      where: {
        id: outletId,
        isDeleted: false,
      },
      include: {
        outletAddress: true,
        Employee: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!outlet) {
      return {
        message: "Outlet not found",
        data: null,
      };
    }

    return {
      message: "Outlet fetched successfully",
      data: outlet,
    };
  } catch (error) {
    console.error("Error fetching outlet:", error);
    return {
      message: "Failed to fetch outlet",
      data: null,
    };
  }
};

export const updateOutletService = async (req: Request, res: Response) => {
  // Pastikan hanya super admin yang bisa update outlet
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  if (!user || user.role !== Role.SUPER_ADMIN) {
    throw new Error("Only Super Admin can update outlets");
  }

  const { id } = req.params;
  const {
    outletName,
    addressLine,
    province,
    regency,
    district,
    village,
    latitude,
    longitude,
  } = req.body;

  const outlet = await prisma.outlet.update({
    where: { id: Number(id) },
    data: {
      outletName,
      outletAddress: {
        update: {
          addressLine,
          province,
          regency,
          district,
          village,
          latitude,
          longitude,
        },
      },
    },
    include: {
      outletAddress: true,
    },
  });

  return {
    message: "Outlet updated successfully",
    data: outlet,
  };
};

export const deleteOutletService = async (req: Request, res: Response) => {
  // Pastikan hanya super admin yang bisa delete outlet
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  if (!user || user.role !== Role.SUPER_ADMIN) {
    throw new Error("Only Super Admin can delete outlets");
  }

  const { id } = req.params;

  await prisma.$transaction([
    prisma.address.updateMany({
      where: { Outlet: { id: Number(id) } },
      data: { isDeleted: true, deletedAt: new Date() },
    }),
    prisma.outlet.update({
      where: { id: Number(id) },
      data: { isDeleted: true, deletedAt: new Date() },
    }),
  ]);

  return {
    message: "Outlet deleted successfully",
  };
};
