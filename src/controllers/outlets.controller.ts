import { Request, Response } from "express";
import { getOutletsUserService } from "../services/outlets-home/outlets.service";


export class PublicOutletController {
  async getPublicOutlets(req: Request, res: Response) {
    try {
      const result = await getOutletsUserService(req, res);
      
      // Perhatikan bahwa getOutletsUserService sudah mengirim response,
      // jadi kita tidak perlu mengirim response lagi di sini
      // Jika service tidak mengirim response, gunakan kode di bawah ini:
      // res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Failed to fetch outlets",
        data: null,
        meta: null,
        error: error instanceof Error ? error.message : "Unknown error occurred"
      });
    }
  }
}