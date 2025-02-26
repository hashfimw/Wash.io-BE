import { Request, Response } from "express";
import prisma from "./prisma";
import { createMultipleNotificationDataService } from "./services/notification/notification.service";
import { getIdleEmployees } from "./services/helpers/finder.service";
import { Prisma } from "../prisma/generated/client";

// const findAddress = async (addressId: number) => {
//   try {
//     return await prisma.address.findFirst({
//       where: { id: addressId },
//     });
//   } catch (error) {
//     throw error;
//   }
// };

const haversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const dLat = ((lat2 - lat1) * Math.PI) / 180.0;
  const dLon = ((lon2 - lon1) * Math.PI) / 180.0;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180.0) * Math.cos((lat2 * Math.PI) / 180.0) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return 6371 * c;
};

export const getNearestOutlets = async (req: Request, res: Response) => {
  try {
    const addressId = req.query.addressId as string;
    const limit = (req.query.limit as string) || "10";
    const page = (req.query.page as string) || "1";

    const address = await prisma.address.findFirst({
      where: { id: +addressId },
      select: { province: true, latitude: true, longitude: true, customerId: true },
    });

    if (!address) throw { message: "Invalid Address Id!" };
    if (address.customerId != +req.user!.id) throw { message: "Mismatched customer Id!" };
    if (!address.customerId) throw { message: "Outlet address is prohibited in this feature!" };

    const outletAdresses = (
      await prisma.address.findMany({
        where: { Outlet: { NOT: {}, isDeleted: false }, isDeleted: false },
        include: { Outlet: true },
      })
    )
      .map((item) => {
        const distance = Math.round(haversineDistance(+address.latitude, +address.longitude, +item.latitude, +item.longitude) * 100) / 100;
        const { Outlet, id, ...addressDetails } = item;
        return { outletId: Outlet?.id, outletName: Outlet?.outletName, addressId: id, ...addressDetails, distance };
      })
      .filter((item) => {
        return item.distance < 15;
      })
      .sort((a, b) => a.distance - b.distance);

    const total = outletAdresses.length;
    const take = (+page - 1) * +limit;
    const paginatedData = outletAdresses.splice(take, +limit);

    res.status(200).send({ data: paginatedData, meta: { page: +page, limit: +limit, total: +total } });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const queries = {
      outletId: req.query.outletId as string,
      customerAddressId: req.query.customerAddressId as string,
      distance: req.query.distance as string,
    };

    console.log({ distance: +queries.distance });

    const outlet = await prisma.outlet.findFirst({
      where: { id: +queries.outletId },
    });

    if (!outlet) throw { message: "Invalid Outlet id!" };
    if (!queries.distance) throw { message: "Invalid distance!" };

    const driverIds = await getIdleEmployees(+queries.outletId, "DRIVER");

    const distance = +queries.distance * 1000;
    // if (driverIds.length == 0) throw { message: "No idle Driver present at the outlet!" };

    // const customerAddress = await findAddress(+queries.customerAddressId);
    // const outletAddress = await findAddress(outlet!.outletAddressId);

    // const distance = haversineDistance(+customerAddress!.latitude, +customerAddress!.longitude, +outletAddress!.latitude, +outletAddress!.longitude);

    await prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: { outletId: +queries.outletId, customerAddressId: +queries.customerAddressId },
      });

      const transportJobId = (
        await tx.transportJob.create({
          data: { orderId: order.id, transportType: "PICKUP", distance },
        })
      ).id;

      if (driverIds.length > 0) {
        await tx.notification.createMany({
          data: createMultipleNotificationDataService(
            driverIds,
            "Pickup Job alert",
            " A new pickup job is available!",
            `${process.env.BASE_URL_FE!}/transport-job/${transportJobId}`
          ),
        });
      }
    });

    res.status(201).send({ message: `Order created successfully!` });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

interface OrderItem {
  qty: string;
  orderItemName: string;
}

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = {
      weight: req.body.weight,
      orderItem: req.body.orderItem as OrderItem[],
    };
    const outletId = (await prisma.order.findFirst({
      where: { id: +id },
      select: { outletId: true },
    }))!.outletId;
    const orderItem = body.orderItem.map((item) => {
      return {
        qty: +item.qty,
        orderItemName: item.orderItemName,
      };
    });
    let laundryPrice = 20000;
    if (+body.weight > 2) laundryPrice = +body.weight * 10000;

    const order = await prisma.order.findFirst({
      where: { id: +id },
    });

    if (order!.orderStatus != "ARRIVED_AT_OUTLET") throw { message: "Invalid order status!" };

    const washerIds = await getIdleEmployees(outletId, "WORKER", "WASHING");
    if (washerIds.length == 0) throw { message: "No idle Washer present at the outlet!" };

    await prisma.$transaction(async (tx) => {
      await tx.order.update({
        where: { id: +id },
        data: { laundryWeight: +body.weight * 1000, laundryPrice, OrderItem: { createMany: { data: orderItem } }, orderStatus: "READY_FOR_WASHING" },
      });

      const laundryJobId = (
        await tx.laundryJob.create({
          data: { station: "WASHING", orderId: +id },
        })
      ).id;

      await tx.notification.createMany({
        data: createMultipleNotificationDataService(
          washerIds,
          "Washing Job alert",
          " A new washing job is available!",
          `${process.env.BASE_URL_FE!}/laundry-job/${laundryJobId}`
        ),
      });
    });

    res.status(201).send({ message: `Order updated successfully!` });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const payOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = await prisma.transportJob.findFirst({
      where: { orderId: +id, transportType: "PICKUP" },
      select: { distance: true, order: { select: { outletId: true, orderStatus: true, isPaid: true, laundryPrice: true } } },
    });
    const driverIds = await getIdleEmployees(data!.order.outletId, "DRIVER");

    if (data!.order!.isPaid) throw { message: "Order already paid!" };
    if (!data!.order!.laundryPrice) throw { message: "Order hasn't weighed!" };

    let fare = 5000;
    if (data!.distance > 1000) fare = data!.distance * 5;
    const totalPrice = data!.order.laundryPrice! + fare;

    const updateData: Prisma.OrderUncheckedUpdateInput = { isPaid: true };
    if (data!.order.orderStatus == "AWAITING_PAYMENT") updateData.orderStatus = "WAITING_FOR_DELIVERY_DRIVER";

    await prisma.$transaction(async (tx) => {
      await tx.payment.create({ data: { totalPrice, orderId: +id, paymentStatus: "SUCCEEDED" } });

      await tx.order.update({ where: { id: +id }, data: updateData });

      if (data!.order.orderStatus == "AWAITING_PAYMENT") {
        const transportJobId = (
          await tx.transportJob.create({
            data: { orderId: +id, transportType: "DELIVERY", distance: data!.distance },
          })
        ).id;
        await tx.notification.createMany({
          data: createMultipleNotificationDataService(
            driverIds,
            "Delivery Job alert",
            " A new delivery job is available!",
            `${process.env.BASE_URL_FE!}/transport-job/${transportJobId}`
          ),
        });
      }
    });

    res.status(201).send({ message: `Order paid successfully!` });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// export const nearestOutlets = async (req: Request, res: Response) => {
//   try {
//     const addressId = req.query.addressId as string;

//     const address = await prisma.address.findFirst({
//       where: { id: +addressId },
//       select: { latitude: true, longitude: true },
//     });

//     if (!address) throw { message: "Invalid Address Id!" };

//     const outletAdresses = prisma.address.findMany({
//       where: { Outlet: { NOT: {} } },
//     });

//     res.status(200).send({ outletAdresses });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// };

export const updateDeliveredOrderStatus = async () => {
  try {
    (
      await prisma.order.findMany({
        where: { orderStatus: "RECEIVED_BY_CUSTOMER" },
        include: { customerAddress: true },
      })
    ).map(async (item) => {
      const expire = new Date(new Date(item.updatedAt).getTime() + 172800000);
      const now = new Date();
      const userId = item.customerAddress.customerId!;
      if (now > expire) {
        await prisma.$transaction(async (tx) => {
          await tx.order.update({ where: { id: item.id }, data: { orderStatus: "COMPLETED" } });
          await tx.notification.create({
            data: {
              userId,
              title: "Order auto=completion alert",
              description: "Your delivered order is automatically changed its status 2 days after it is delivered.",
              url: `${process.env.BASE_URL_FE!}/order/${item.id}`,
            },
          });
        });
        console.log(`Completed order status updated on order #${item.id}!`);
      }
    });
  } catch (error) {
    throw error;
  }
};
