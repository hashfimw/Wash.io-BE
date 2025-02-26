import { Request, Response } from "express";
import prisma from "../../prisma";

export const getAllUserOrdersService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    
    if (!userId) {
      res.status(401).json({ 
        success: false,
        message: "Unauthorized: Please login first" 
      });
      return;
    }
    
    // Get user addresses first to find all associated orders
    const userAddresses = await prisma.address.findMany({
      where: {
        customerId: userId,
        isDeleted: false
      },
      select: {
        id: true
      }
    });
    
    const addressIds = userAddresses.map(address => address.id);
    
    // Get all orders for all user addresses
    const orders = await prisma.order.findMany({
      where: { 
        customerAddressId: {
          in: addressIds
        },
        isDeleted: false
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
          where: { isDeleted: false },
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
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    res.status(200).json({
      success: true,
      data: orders
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      message: "Terjadi kesalahan pada server." 
    });
  }
};