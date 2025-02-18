/*
  Warnings:

  - You are about to drop the column `attendanceType` on the `EmployeeAttendance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EmployeeAttendance" DROP COLUMN "attendanceType";

-- CreateTable
CREATE TABLE "AttendanceRecord" (
    "id" SERIAL NOT NULL,
    "attendanceType" "AttendanceType" NOT NULL,
    "employeeAttendanceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "AttendanceRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AttendanceRecord" ADD CONSTRAINT "AttendanceRecord_employeeAttendanceId_fkey" FOREIGN KEY ("employeeAttendanceId") REFERENCES "EmployeeAttendance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
