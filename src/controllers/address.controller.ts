import { Request, Response } from "express";
import { findNearestOutletService } from "../services/address/findNearestOutlet.service";
import { getAddressByIdService } from "../services/address/getAddressById.service";
import { deleteUserAddressService } from "../services/address/deleteUserAddress.service";
import { updateUserAddressService } from "../services/address/updateUserAddress.service";
import { createUserAddressService } from "../services/address/createUserAddress.service";
import prisma from "../prisma";

export class AddressController {
  async findNearestOutlet(req: Request, res: Response) {
    try {
      const result = await findNearestOutletService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async getUserAddresses(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id; 

      if (!userId) {
        res.status(401).json({ message: "Unauthorized: Please login first" });
      }

      const addresses = await prisma.address.findMany({
        where: { customerId: userId, isDeleted: false },
      });

      res.status(200).send({data: addresses});
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Terjadi kesalahan dalam mengambil alamat" });
    }
  }

  async getAddressById(req: Request, res: Response) {
    try {
      const result = await getAddressByIdService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async createUserAddress(req: Request, res: Response) {
    try {
      await createUserAddressService(req, res);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async updateUserAddress(req: Request, res: Response) {
    try {
      const result = await updateUserAddressService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }

  async deleteUserAddress(req: Request, res: Response) {
    try {
      const result = await deleteUserAddressService(req, res);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  }
}
