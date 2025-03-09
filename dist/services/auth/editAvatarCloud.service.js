"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editAvatarCloudService = void 0;
const cloudinary_1 = require("../cloudinary");
const prisma_1 = __importDefault(require("../../prisma"));
const editAvatarCloudService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Incoming request to edit avatar");
        console.log("Request file:", req.file);
        console.log("Request body:", req.body);
        const { id } = req.body;
        if (!req.file)
            throw { message: "File is empty!" };
        // Upload ke Cloudinary
        const cloudinaryUploadResult = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "avatar");
        console.log("Cloudinary Response:", cloudinaryUploadResult);
        const { secure_url } = cloudinaryUploadResult;
        if (!secure_url)
            throw { message: "Cloudinary upload failed!" };
        // Update avatar di database
        const updatedUser = yield prisma_1.default.user.update({
            data: { avatar: secure_url },
            where: { id: Number(id) },
        });
        console.log("Updated User:", updatedUser); // Debugging
        // ✅ Perbaikan: Kirimkan secure_url yang benar ke frontend
        res.status(200).json({
            message: "Avatar updated!",
            avatarUrl: secure_url, // Perbaiki ini, jangan hardcoded
        });
    }
    catch (error) {
        console.error("Error updating avatar:", error);
        res.status(500).json({ message: "Error updating avatar", error });
    }
});
exports.editAvatarCloudService = editAvatarCloudService;
