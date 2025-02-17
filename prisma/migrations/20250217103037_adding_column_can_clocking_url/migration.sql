-- AlterTable
ALTER TABLE "EmployeeAttendance" ADD COLUMN     "canClockIn" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "url" TEXT;
