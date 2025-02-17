import { Request, Response } from "express";
import prisma from "../prisma";

export class AddressController {
  private haversineDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const toRad = (value: number): number => (value * Math.PI) / 180;
    const R = 6371; // Radius bumi dalam km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Jarak dalam km
  };

  async findNearestOutlet(req: Request, res: Response): Promise<void> {
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
          const distance = this.haversineDistance(
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
  }

  async getUserAddress(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const addresses = await prisma.address.findMany({
        where: { customerId: parseInt(userId), isDeleted: false },
      });
      res.json(addresses);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan dalam mengambil alamat pengguna" });
    }
  }

  async getAddressById(req: Request, res: Response): Promise<void> {
    try {
      const { addressId } = req.params;
      const address = await prisma.address.findUnique({
        where: { id: parseInt(addressId), isDeleted: false },
      });
      if (!address) {
        res.status(404).json({ message: "Alamat tidak ditemukan" });
        return;
      }
      res.json(address);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan dalam mengambil alamat" });
    }
  }

  async createUserAddress(req: Request, res: Response): Promise<void> {
    try {
      const {
        customerId,
        addressLine,
        province,
        regency,
        district,
        village,
        latitude,
        longitude,
        isPrimary,
      } = req.body;

      if (isPrimary) {
        await prisma.address.updateMany({
          where: { customerId, isPrimary: true },
          data: { isPrimary: false },
        });
      }

      const address = await prisma.address.create({
        data: {
          customerId,
          addressLine,
          province,
          regency,
          district,
          village,
          latitude,
          longitude,
          isPrimary,
        },
      });
      res.status(201).json(address);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan dalam membuat alamat" });
    }
  }

  async updateUserAddress(req: Request, res: Response): Promise<void> {
    try {
      const { addressId } = req.params;
      const data = req.body;

      if (data.isPrimary) {
        await prisma.address.updateMany({
          where: { customerId: data.customerId, isPrimary: true },
          data: { isPrimary: false },
        });
      }

      const updatedAddress = await prisma.address.update({
        where: { id: parseInt(addressId), isDeleted: false },
        data,
      });
      res.json(updatedAddress);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan dalam memperbarui alamat" });
    }
  }

  async deleteUserAddress(req: Request, res: Response): Promise<void> {
    try {
      const { addressId } = req.params;
      await prisma.address.update({
        where: { id: parseInt(addressId) },
        data: { isDeleted: true, deletedAt: new Date() },
      });
      res.json({ message: "Alamat berhasil dihapus" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan dalam menghapus alamat" });
    }
  }
}
