// src/services/superAdmOutlet.service.ts
import { Request, Response } from "express";
import prisma from "../../prisma";

export const createOutletService = async (req: Request, res: Response) => {
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
  const outlets = await prisma.outlet.findMany({
    where: { isDeleted: false },
    include: {
      outletAddress: true,
      Employee: {
        include: {
          user: true,
        },
      },
    },
  });

  return {
    message: "Outlets fetched successfully",
    data: outlets,
  };
};

export const getOutletByIdService = async (req: Request, res: Response) => {
  const { id } = req.params;

  const outlet = await prisma.outlet.findFirst({
    where: {
      id: Number(id),
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

  return {
    message: "Outlet fetched successfully",
    data: outlet,
  };
};

export const updateOutletService = async (req: Request, res: Response) => {
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
