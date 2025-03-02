import { Request, Response } from "express";
import prisma from "../../prisma";
import { haversineDistance } from "../../utils/haversine";
import { getIdleEmployees } from "../helpers/finder.service";
import { createMultipleNotificationDataService } from "../notification/notification.service";

const findNearestOutlet = async (latitude: any, longitude: any) => {
  try {
    if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
      throw {
        message: "Latitude dan Longitude diperlukan dan harus berupa angka",
      };
    }

    const outlets = await prisma.outlet.findMany({
      include: { outletAddress: true },
    });

    if (outlets.length === 0) {
      throw { message: "Tidak ada outlet yang tersedia" };
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

    return nearestOutlet;
  } catch (error) {
    throw error;
  }
};

export const createPickupOrderService = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    const { addressId } = req.body;

    console.log("User ID:", userId);
    console.log("Address ID:", addressId);

    // Cek apakah alamat milik user dan belum dihapus
    const address = await prisma.address.findUnique({
      where: { id: addressId },
    });

    if (!address || address.customerId !== userId || address.isDeleted) {
      res.status(404).json({ message: "Alamat tidak ditemukan atau bukan milik Anda." });
      return;
    }

    // Cari outlet terdekat berdasarkan koordinat latitude & longitude
    const nearestOutlet = await findNearestOutlet(address.latitude, address.longitude);

    if (!nearestOutlet) {
      res.status(404).json({ message: "Tidak ada outlet yang tersedia." });
      return;
    }

    await prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          customerAddressId: addressId,
          outletId: nearestOutlet.id,
          orderStatus: "WAITING_FOR_PICKUP_DRIVER",
        },
      });

      const driverIds = await getIdleEmployees(nearestOutlet.id, "DRIVER");
      const distance = Math.round(nearestOutlet.distance);

      const transportJobId = (
        await tx.transportJob.create({
          data: { orderId: order.id, transportType: "PICKUP", distance: distance },
        })
      ).id;

      if (driverIds.length > 0) {
        await tx.notification.createMany({
          data: createMultipleNotificationDataService(
            driverIds,
            "Pickup Job alert",
            " A new pickup job is available!",
            `${process.env.BASE_URL_FE!}/employee-dashboard/driver/${transportJobId}`
          ),
        });
      }

      res.status(201).json({ message: "Pickup order berhasil dibuat.", order });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
};
