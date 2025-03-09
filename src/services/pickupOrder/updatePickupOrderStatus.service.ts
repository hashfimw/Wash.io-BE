import { Request, Response } from "express";
import prisma from "../../prisma";
import { OrderStatus } from "../../../prisma/generated/client";

export const updatePickupOrderStatusService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  
  if (!id || !status) {
    return res.status(400).json({
      success: false,
      message: "ID pesanan dan status baru diperlukan",
    });
  }

  try {
    // Validate that the status is a valid OrderStatus enum value
    const validStatuses = Object.values(OrderStatus);
    if (!validStatuses.includes(status as OrderStatus)) {
      return res.status(400).json({
        success: false,
        message: "Status tidak valid",
        validStatuses: validStatuses,
      });
    }

    // Find the order first to make sure it exists
    const existingOrder = await prisma.order.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingOrder) {
      return res.status(404).json({
        success: false,
        message: "Pesanan tidak ditemukan",
      });
    }

    // Update the order status
    const updatedOrder = await prisma.order.update({
      where: { id: parseInt(id) },
      data: { orderStatus: status as OrderStatus },
      include: {
        outlet: true,
        customerAddress: true,
        OrderItem: true,
        Payment: true,
        TransportJob: {
          include: {
            driver: {
              include: {
                user: true
              }
            }
          }
        },
        LaundryJob: {
          include: {
            worker: {
              include: {
                user: true
              }
            }
          }
        }
      },
    });

    return {
      success: true,
      message: "Status pesanan berhasil diperbarui",
      data: updatedOrder,
    };
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};