import { Request, Response } from "express";
import { cloudinaryUpload } from "../cloudinary";
import prisma from "../../prisma";

export const editAvatarCloudService = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    if (!req.file) throw { message: "File is empty !" };
    const { secure_url } = await cloudinaryUpload(req.file, "avatar");

    await prisma.user.update({
      data: { avatar: secure_url },
      where: { id },
    });

    res.status(200).send({ message: "Avatar updated ! ✅" });
  } catch (error) {
    throw error;
  }
};
