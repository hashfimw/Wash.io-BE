import { AttendanceType, Prisma, Role } from "@prisma/client";
import prisma from "../../prisma";
import { PaginationQueries, PaginationQuerieswithDate } from "../../types/pagination.type";
import { dateValidator } from "../helpers/dateTime.service";
import { findUser } from "../helpers/finder.service";

const getAttendances = async (filter: Prisma.AttendanceRecordWhereInput, meta: PaginationQueries) => {
  try {
    const attendances = await prisma.attendanceRecord.findMany({
      where: filter,
      skip: (+meta.page - 1) * +meta.limit,
      take: +meta.limit,
      orderBy: { [meta.sortBy]: meta.sortOrder },
      include: { employeeAttendance: { include: { employee: { include: { user: true } } } } },
    });
    const count = await prisma.attendanceRecord.count({ where: filter });
    const total = Math.ceil(count / +meta.limit);

    return {
      data: attendances.map((item) => {
        return {
          date: item.createdAt,
          attendanceType: item.attendanceType,
          name: item.employeeAttendance.employee.user.fullName,
          employeeId: item.employeeAttendance.employeeId,
          role: item.employeeAttendance.employee.user.role,
        };
      }),
      meta: { page: meta.page, limit: meta.limit, total: total },
    };
  } catch (error) {
    throw error;
  }
};

const findOutletsAttendancesId = async (outletId: number, role: string) => {
  try {
    const filter: Prisma.EmployeeAttendanceFindManyArgs = {
      where: { employee: { outletId } },
      select: { id: true },
    };
    if (role != "all") filter.where!.employee!.user!.role = role as Role;
    const ids = await prisma.employeeAttendance.findMany(filter);

    return ids.map((item) => item.id);
  } catch (error) {
    throw error;
  }
};

interface AttendanceQueries extends PaginationQuerieswithDate {
  userId: number;
  requestType: string;
  attendanceType: string;
  role: string;
}

export const getAttendancesService = async (queries: AttendanceQueries) => {
  try {
    const dates = dateValidator(queries.startDate, queries.endDate);
    const employee = await findUser(queries.userId);

    const filter: Prisma.AttendanceRecordWhereInput = {};
    filter.createdAt = { gt: dates.start };
    filter.createdAt = { lt: dates.end };
    if (queries.attendanceType != "all") filter.attendanceType = queries.attendanceType as AttendanceType;

    if (queries.requestType == "employee") {
      if (employee.role != "DRIVER" && employee.role != "WORKER") throw { message: "This user can't access this feature!" };

      filter.employeeAttendanceId = { in: employee.Employee!.EmployeeAttendance.map((item) => item.id) };
    } else throw { message: "Invalid request type!" };

    return await getAttendances(filter, queries);
  } catch (error) {
    throw error;
  }
};
