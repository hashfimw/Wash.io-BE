import { EmployeeWorkShift } from "@prisma/client";

export const localTimeChecker = (tzo: number) => {
  const nowUTC = new Date().getTime();
  return new Date(nowUTC - tzo * 60000);
};

export const shiftChecker = (tzo: number): EmployeeWorkShift => {
  // const nowLocal = localTimeChecker(tzo).getHours(); // deploy
  const nowLocal = localTimeChecker(tzo).getUTCHours(); // development
  let workShift: EmployeeWorkShift = EmployeeWorkShift.NIGHT;
  if (nowLocal >= 6 && nowLocal < 14) {
    workShift = EmployeeWorkShift.MORNING;
  }
  if (nowLocal >= 14 && nowLocal < 22) {
    workShift = EmployeeWorkShift.NOON;
  }
  return workShift;
};

export const dateValidator = (startDate: string, endDate: string) => {
  try {
    const now = new Date();
    let start = new Date(startDate);
    let end = new Date(endDate);
    const origin = new Date("1970-01-01");
    if (!startDate) start = origin;
    if (!endDate) end = now;
    if (start > now || end > now) throw { message: "Start/end date cannot be greater than current date" };
    if (start >= end) throw { message: "End date cannot be greater than start date" };
    if (start < origin || end < origin) throw { message: "Start/end date cannot be less than 1970-01-01" };
    return { start: start, end: end };
  } catch (error) {
    throw error;
  }
};
