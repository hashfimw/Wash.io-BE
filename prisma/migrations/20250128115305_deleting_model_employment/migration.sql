/*
  Warnings:

  - You are about to drop the column `employmentId` on the `EmployeeAttendance` table. All the data in the column will be lost.
  - You are about to drop the `Employment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `outletId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `EmployeeAttendance` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EmployeeAttendance" DROP CONSTRAINT "EmployeeAttendance_employmentId_fkey";

-- DropForeignKey
ALTER TABLE "Employment" DROP CONSTRAINT "Employment_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Employment" DROP CONSTRAINT "Employment_outletId_fkey";

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "employmentStatus" "EmploymentStatus" NOT NULL DEFAULT 'EMPLOYED',
ADD COLUMN     "outletId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "EmployeeAttendance" DROP COLUMN "employmentId",
ADD COLUMN     "employeeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Employment";

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_outletId_fkey" FOREIGN KEY ("outletId") REFERENCES "Outlet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeAttendance" ADD CONSTRAINT "EmployeeAttendance_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
