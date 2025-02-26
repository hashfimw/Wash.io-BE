import { Request, Response } from "express";
import prisma from "../../prisma";
import { haversineDistance } from "../../utils/haversine";

export const findNearestOutletService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
      res.status(400).json({
        message: "Latitude dan Longitude diperlukan dan harus berupa angka",
      });
      return;
    }

    const outlets = await prisma.outlet.findMany({
      include: { outletAddress: true },
    });

    if (outlets.length === 0) {
      res.status(404).json({ message: "Tidak ada outlet yang tersedia" });
      return;
    }

    const nearestOutlet = outlets
      .map((outlet) => {
        const distance = haversineDistance(
          parseFloat(latitude),
          parseFloat(longitude),
          parseFloat(outlet.outletAddress.latitude),
          parseFloat(outlet.outletAddress.longitude)
        );
        return { ...outlet, distance };
      })
      .sort((a, b) => a.distance - b.distance)[0];

    res.json({ nearestOutlet });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan dalam pencarian outlet" });
  }
};
