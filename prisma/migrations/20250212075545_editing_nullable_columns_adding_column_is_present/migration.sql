-- DropForeignKey
ALTER TABLE "LaundryJob" DROP CONSTRAINT "LaundryJob_workerId_fkey";

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "isPresent" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "EmployeeAttendance" ADD COLUMN     "isAttended" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "LaundryJob" ALTER COLUMN "workerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "laundryPrice" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "LaundryJob" ADD CONSTRAINT "LaundryJob_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
