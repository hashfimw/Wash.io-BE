/*
  Warnings:

  - The `station` column on the `Employee` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Employment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `byPassAccepted` on the `LaundryJob` table. All the data in the column will be lost.
  - You are about to drop the column `byPassRejected` on the `LaundryJob` table. All the data in the column will be lost.
  - You are about to drop the column `byPassRequest` on the `LaundryJob` table. All the data in the column will be lost.
  - You are about to drop the column `estimatedTimeofCompletion` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `laundryPrice` on the `Order` table. All the data in the column will be lost.
  - Added the required column `laundryPrice` to the `LaundryItem` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `station` on the `LaundryJob` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `totalLaundryPrice` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `outletId` on table `PickupJob` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "EmploymentStatus" AS ENUM ('EMPLOYED', 'PAUSED', 'ENDED');

-- CreateEnum
CREATE TYPE "WorkerStation" AS ENUM ('WASHING', 'IRONING', 'PACKING');

-- CreateEnum
CREATE TYPE "ByPassStatus" AS ENUM ('ACCEPTED', 'REJECTEED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "OrderStatus" ADD VALUE 'CANCELLED_BY_CUSTOMER';
ALTER TYPE "OrderStatus" ADD VALUE 'CANCELLED_BY_OUTLET';

-- DropForeignKey
ALTER TABLE "PickupJob" DROP CONSTRAINT "PickupJob_outletId_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "station",
ADD COLUMN     "station" "WorkerStation";

-- AlterTable
ALTER TABLE "Employment" DROP CONSTRAINT "Employment_pkey",
ADD COLUMN     "employmentStatus" "EmploymentStatus" NOT NULL DEFAULT 'EMPLOYED',
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Employment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "LaundryItem" ADD COLUMN     "laundryPrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "LaundryJob" DROP COLUMN "byPassAccepted",
DROP COLUMN "byPassRejected",
DROP COLUMN "byPassRequest",
ADD COLUMN     "byPassStatus" "ByPassStatus",
ADD COLUMN     "isByPassRequested" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "station",
ADD COLUMN     "station" "WorkerStation" NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "estimatedTimeofCompletion",
DROP COLUMN "laundryPrice",
ADD COLUMN     "totalLaundryPrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PickupJob" ALTER COLUMN "outletId" SET NOT NULL;

-- DropEnum
DROP TYPE "EmployeeStation";

-- AddForeignKey
ALTER TABLE "PickupJob" ADD CONSTRAINT "PickupJob_outletId_fkey" FOREIGN KEY ("outletId") REFERENCES "Outlet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
