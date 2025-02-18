/*
  Warnings:

  - The values [SIGN_IN,SIGN_OUT] on the enum `AttendanceType` will be removed. If these variants are still used in the database, this will fail.
  - The values [REJECTEED] on the enum `ByPassStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AttendanceType_new" AS ENUM ('CLOCK_IN', 'CLOCK_OUT');
ALTER TABLE "EmployeeAttendance" ALTER COLUMN "attendanceType" TYPE "AttendanceType_new" USING ("attendanceType"::text::"AttendanceType_new");
ALTER TYPE "AttendanceType" RENAME TO "AttendanceType_old";
ALTER TYPE "AttendanceType_new" RENAME TO "AttendanceType";
DROP TYPE "AttendanceType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ByPassStatus_new" AS ENUM ('ACCEPTED', 'REJECTED');
ALTER TABLE "LaundryJob" ALTER COLUMN "byPassStatus" TYPE "ByPassStatus_new" USING ("byPassStatus"::text::"ByPassStatus_new");
ALTER TYPE "ByPassStatus" RENAME TO "ByPassStatus_old";
ALTER TYPE "ByPassStatus_new" RENAME TO "ByPassStatus";
DROP TYPE "ByPassStatus_old";
COMMIT;
