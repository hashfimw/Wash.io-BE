import { Request, Response } from "express";
import prisma from "../../prisma";

export const getPickupOrderService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;
    
    if (!userId) {
      res.status(401).json({ message: "Unauthorized: Please login first" });
      return;
    }
    
    // Make sure the order belongs to the authenticated user
    const order = await prisma.order.findFirst({
      where: { 
        id: Number(id), 
        isDeleted: false,
        customerAddress: {
          customerId: Number(userId)
        }
      },
      include: { 
        customerAddress: true, 
        outlet: {
          include: {
            outletAddress: true
          }
        },
        OrderItem: {
          where: { isDeleted: false }
        },
        TransportJob: {
          where: { 
            isDeleted: false,
            transportType: "PICKUP"
          },
          include: {
            driver: {
              include: {
                user: {
                  select: {
                    fullName: true,
                    avatar: true
                  }
                }
              }
            }
          }
        },
        Payment: true
      }
    });
    
    if (!order) {
      res.status(404).json({ message: "Pickup order tidak ditemukan atau tidak memiliki akses." });
      return;
    }
    
    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      message: "Terjadi kesalahan pada server." 
    });
  }
};