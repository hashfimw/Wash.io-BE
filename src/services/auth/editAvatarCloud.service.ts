import { Request, Response } from "express";
import { cloudinaryUpload } from "../cloudinary";
import prisma from "../../prisma";

export const editAvatarCloudService = async (req: Request, res: Response) => {
  try {
    console.log("Incoming request to edit avatar");
    console.log("Request file:", req.file);
    console.log("Request body:", req.body);

    const { id } = req.body;
    if (!req.file) throw { message: "File is empty!" };

    // Upload ke Cloudinary
    const cloudinaryUploadResult = await cloudinaryUpload(req.file, "avatar");
    console.log("Cloudinary Response:", cloudinaryUploadResult);

    const { secure_url } = cloudinaryUploadResult;
    if (!secure_url) throw { message: "Cloudinary upload failed!" };

    // Update avatar di database
    const updatedUser = await prisma.user.update({
      data: { avatar: secure_url },
      where: { id: Number(id) },
    });

    console.log("Updated User:", updatedUser); // Debugging

    // ✅ Perbaikan: Kirimkan secure_url yang benar ke frontend
    res.status(200).json({
      message: "Avatar updated!",
      avatarUrl: secure_url, // Perbaiki ini, jangan hardcoded
    });
  } catch (error) {
    console.error("Error updating avatar:", error);
    res.status(500).json({ message: "Error updating avatar", error });
  }
};
