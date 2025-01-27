/*
  Warnings:

  - The values [DENIED] on the enum `PaymentStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `userId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `pickupId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `totalLaundryPrice` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `laundryItemId` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `addressId` on the `Outlet` table. All the data in the column will be lost.
  - You are about to drop the `DeliveryJob` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LaundryItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PickupJob` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[outletAddressId]` on the table `Outlet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `employmentId` to the `EmployeeAttendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerAddressId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `laundryPrice` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outletId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderItemName` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outletAddressId` to the `Outlet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TransportType" AS ENUM ('PICKUP', 'DELIVERY');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "OrderStatus" ADD VALUE 'WAITING_FOR_PICKUP_DRIVER';
ALTER TYPE "OrderStatus" ADD VALUE 'ON_THE_WAY_TO_CUSTOMER';
ALTER TYPE "OrderStatus" ADD VALUE 'ON_THE_WAY_TO_OUTLET';

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentStatus_new" AS ENUM ('PENDING', 'CANCELLED', 'EXPIRED', 'SUCCEEDED');
ALTER TABLE "Payment" ALTER COLUMN "paymentStatus" DROP DEFAULT;
ALTER TABLE "Payment" ALTER COLUMN "paymentStatus" TYPE "PaymentStatus_new" USING ("paymentStatus"::text::"PaymentStatus_new");
ALTER TYPE "PaymentStatus" RENAME TO "PaymentStatus_old";
ALTER TYPE "PaymentStatus_new" RENAME TO "PaymentStatus";
DROP TYPE "PaymentStatus_old";
ALTER TABLE "Payment" ALTER COLUMN "paymentStatus" SET DEFAULT 'PENDING';
COMMIT;

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryJob" DROP CONSTRAINT "DeliveryJob_costumerAddressId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryJob" DROP CONSTRAINT "DeliveryJob_driverId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryJob" DROP CONSTRAINT "DeliveryJob_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_pickupId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_laundryItemId_fkey";

-- DropForeignKey
ALTER TABLE "Outlet" DROP CONSTRAINT "Outlet_addressId_fkey";

-- DropForeignKey
ALTER TABLE "PickupJob" DROP CONSTRAINT "PickupJob_costumerAddressId_fkey";

-- DropForeignKey
ALTER TABLE "PickupJob" DROP CONSTRAINT "PickupJob_driverId_fkey";

-- DropForeignKey
ALTER TABLE "PickupJob" DROP CONSTRAINT "PickupJob_outletId_fkey";

-- DropIndex
DROP INDEX "Order_pickupId_key";

-- DropIndex
DROP INDEX "Outlet_addressId_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "userId",
ADD COLUMN     "customerId" INTEGER;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "isWorking" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "EmployeeAttendance" ADD COLUMN     "employmentId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "pickupId",
DROP COLUMN "totalLaundryPrice",
DROP COLUMN "weight",
ADD COLUMN     "customerAddressId" INTEGER NOT NULL,
ADD COLUMN     "laundryPrice" INTEGER NOT NULL,
ADD COLUMN     "laundryWeight" INTEGER,
ADD COLUMN     "outletId" INTEGER NOT NULL,
ALTER COLUMN "orderStatus" SET DEFAULT 'WAITING_FOR_DELIVERY_DRIVER';

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "laundryItemId",
ADD COLUMN     "orderItemName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Outlet" DROP COLUMN "addressId",
ADD COLUMN     "outletAddressId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "DeliveryJob";

-- DropTable
DROP TABLE "LaundryItem";

-- DropTable
DROP TABLE "PickupJob";

-- DropEnum
DROP TYPE "DeliveryStatus";

-- DropEnum
DROP TYPE "PickupStatus";

-- CreateTable
CREATE TABLE "TransportJob" (
    "id" SERIAL NOT NULL,
    "transportType" "TransportType" NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "distance" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "driverId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "TransportJob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Outlet_outletAddressId_key" ON "Outlet"("outletAddressId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outlet" ADD CONSTRAINT "Outlet_outletAddressId_fkey" FOREIGN KEY ("outletAddressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerAddressId_fkey" FOREIGN KEY ("customerAddressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_outletId_fkey" FOREIGN KEY ("outletId") REFERENCES "Outlet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportJob" ADD CONSTRAINT "TransportJob_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportJob" ADD CONSTRAINT "TransportJob_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeAttendance" ADD CONSTRAINT "EmployeeAttendance_employmentId_fkey" FOREIGN KEY ("employmentId") REFERENCES "Employment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
