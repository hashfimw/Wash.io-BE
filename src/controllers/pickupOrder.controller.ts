import { Request, Response } from "express";
import { PrismaClient } from "../../prisma/generated/client";
import { createMultipleNotificationDataService } from "../services/notification/notification.service";
import { getIdleEmployees } from "../services/helpers/finder.service";

const prisma = new PrismaClient();

export class PickupOrderController {
  // ✅ Membuat pickup order hanya berdasarkan addressId dari customer
  async createPickupOrder(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;
      const { addressId, distance } = req.body;

      console.log("User ID:", userId);
      console.log("Address ID:", addressId);

      // 🔍 Cek apakah alamat milik user dan belum dihapus
      const address = await prisma.address.findUnique({
        where: { id: addressId },
      });

      if (!address || address.customerId !== userId || address.isDeleted) {
        res.status(404).json({ message: "Alamat tidak ditemukan atau bukan milik Anda." });
        return;
      }

      // 🔍 Cari outlet terdekat berdasarkan koordinat latitude & longitude
      const nearestOutlet = await prisma.outlet.findFirst({
        where: { isDeleted: false },
        orderBy: {
          outletAddress: {
            latitude: "asc", // 🛠️ Bisa diubah dengan fungsi jarak jika perlu
          },
        },
      });

      if (!nearestOutlet) {
        res.status(404).json({ message: "Tidak ada outlet yang tersedia." });
        return;
      }

      let order = {};
      const driverIds = await getIdleEmployees(nearestOutlet.id, "DRIVER");

      // ✅ Buat pickup order tanpa laundryPrice, laundryWeight, dan items
      await prisma.$transaction(async (tx) => {
        const newOrder = await tx.order.create({
          data: {
            customerAddressId: addressId,
            outletId: nearestOutlet.id,
          },
        });

        order = newOrder;

        const transportJobId = (
          await tx.transportJob.create({
            data: { orderId: newOrder.id, transportType: "PICKUP", distance },
          })
        ).id;

        await tx.notification.createMany({
          data: createMultipleNotificationDataService(
            driverIds,
            "Pickup Job alert",
            " A new pickup job is available!",
            `${process.env.BASE_URL_FE!}/transport-job/${transportJobId}`
          ),
        });
      });

      res.status(201).json({ message: "Pickup order berhasil dibuat.", order });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
  }

  // ✅ Mendapatkan satu pickup order berdasarkan ID
  async getPickupOrder(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const order = await prisma.order.findFirst({
        where: { id: Number(id), isDeleted: false },
        include: { customerAddress: true, outlet: true },
      });

      if (!order) {
        res.status(404).json({ message: "Pickup order tidak ditemukan." });
        return;
      }
      res.status(200).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
  }

  // ✅ Mendapatkan semua pickup order yang masih aktif
  async getPickupOrders(req: Request, res: Response): Promise<void> {
    try {
      const orders = await prisma.order.findMany({
        where: { isDeleted: false },
        include: { customerAddress: true, outlet: true },
      });
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
  }

  // ✅ Memperbarui status pickup order
  async updatePickupOrder(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { orderStatus } = req.body;

      const order = await prisma.order.update({
        where: { id: Number(id) },
        data: { orderStatus },
      });

      res.status(200).json({ message: "Pickup order berhasil diperbarui.", order });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
  }

  // ✅ Menghapus pickup order secara soft delete
  async deletePickupOrder(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      await prisma.order.update({
        where: { id: Number(id) },
        data: { isDeleted: true, deletedAt: new Date() },
      });

      res.status(200).json({ message: "Pickup order berhasil dihapus." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
  }
}
