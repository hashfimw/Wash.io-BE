// import { Request, Response } from "express";
// import prisma from "../../prisma";

// export const updatePickupOrderService = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const userId = req.user?.id;
//     const { id } = req.params;
//     const { orderStatus } = req.body;

//     if (!userId) {
//       res.status(401).json({ message: "Unauthorized: Please login first" });
//       return;
//     }

//     const order = await prisma.order.update({
//       where: { id: Number(id) },
//       data: { orderStatus },
//     });

//     res
//       .status(200)
//       .json({ message: "Pickup order berhasil diperbarui.", order });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Terjadi kesalahan pada server." });
//   }
// };
