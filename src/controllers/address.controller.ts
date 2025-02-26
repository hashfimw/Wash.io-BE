import { Request, Response } from "express";
import { findNearestOutletService } from "../services/address/findNearestOutlet.service";
import { getAddressByIdService } from "../services/address/getAddressById.service";
import { deleteUserAddressService } from "../services/address/deleteUserAddress.service";
import { updateUserAddressService } from "../services/address/updateUserAddress.service";

export class AddressController {
  async findNearestOutlet(req: Request, res: Response) {
    try {
      const result = await findNearestOutletService(req, res);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async getAddressById(req: Request, res: Response) {
    try {
      const result = await getAddressByIdService(req, res);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async createUserAddress(req: Request, res: Response) {
    try {
      const result = await getAddressByIdService(req, res);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async updateUserAddress(req: Request, res: Response) {
    try {
      const result = await updateUserAddressService(req, res);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async deleteUserAddress(req: Request, res: Response) {
    try {
      const result = await deleteUserAddressService(req, res);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
