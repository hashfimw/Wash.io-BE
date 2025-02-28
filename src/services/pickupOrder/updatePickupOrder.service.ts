import prisma from "../../prisma";

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
              url: `/order/${item.id}`,
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