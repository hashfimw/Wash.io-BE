import { AttendanceType, EmployeeWorkShift, Prisma } from "../../../prisma/generated/client";
import prisma from "../../prisma";
import { PaginationQueries, PaginationQuerieswithDate } from "../../types/pagination.type";
import { dateValidator } from "../helpers/dateTime.service";
import { findUser } from "../helpers/finder.service";
import { attendanceSorter } from "../helpers/sorter.service";

const getAttendances = async (filter: Prisma.AttendanceRecordWhereInput, meta: PaginationQueries) => {
  try {
    const sort = attendanceSorter(meta.sortBy, meta.sortOrder);
    const attendances = await prisma.attendanceRecord.findMany({
      where: filter,
      skip: (meta.page - 1) * meta.limit,
      take: meta.limit,
      orderBy: sort,
      include: { employeeAttendance: { include: { employee: { include: { user: true, outlet: true } } } } },
    });
    const total_data = await prisma.attendanceRecord.count({ where: filter });
    const total_pages = Math.ceil(total_data / meta.limit);

    if (total_pages > 0 && +meta.page > total_pages) throw { message: "Invalid page!" };

    return {
      data: attendances.map((item) => {
        return {
          id: item.id,
          date: item.createdAt,
          attendanceType: item.attendanceType,
          employeeId: item.employeeAttendance.employeeId,
          name: item.employeeAttendance.employee.user.fullName,
          role: item.employeeAttendance.employee.user.role,
          workShift: item.employeeAttendance.employee.workShift,
          outletId: item.employeeAttendance.employee.outletId,
          outletName: item.employeeAttendance.employee.outlet.outletName,
        };
      }),
      meta: { page: meta.page, limit: meta.limit, total_pages: total_pages, total_data: total_data },
    };
  } catch (error) {
    throw error;
  }
};

const findOutletsAttendancesId = async (outletId?: number, role?: "DRIVER" | "WORKER", workShift?: string, name?: string, outletName?: string) => {
  try {
    const filter: Prisma.EmployeeWhereInput = { workShift: { not: null }, isDeleted: false, employmentStatus: "EMPLOYED" };
    if (outletId) filter.outletId = outletId;
    if (workShift) filter.workShift = workShift as EmployeeWorkShift;
    if (role) {
      if (role == "DRIVER") filter.station = { equals: null };
      else if (role == "WORKER") filter.station = { not: null };
    }
    if (name) {
      const userIds = (
        await prisma.user.findMany({
          where: { OR: [{ role: "DRIVER" }, { role: "WORKER" }], fullName: { contains: name, mode: "insensitive" }, isDeleted: false },
          select: { id: true },
        })
      ).map((item) => item.id);
      filter.userId = { in: userIds };
    }
    if (outletName) {
      const outletIds = (
        await prisma.outlet.findMany({ where: { outletName: { contains: outletName, mode: "insensitive" }, isDeleted: false }, select: { id: true } })
      ).map((item) => item.id);
      filter.outletId = { in: outletIds };
    }

    const employeeIds = (await prisma.employee.findMany({ where: filter, select: { id: true } })).map((item) => item.id);

    return (await prisma.employeeAttendance.findMany({ where: { employeeId: { in: employeeIds } }, select: { id: true } })).map((item) => item.id);
  } catch (error) {
    throw error;
  }
};

interface AttendanceQueries extends PaginationQuerieswithDate {
  userId: number;
  attendanceType?: "CLOCK_IN" | "CLOCK_OUT";
  name?: string;
  role?: "DRIVER" | "WORKER";
  workShift?: string;
  outletName?: string;
}

export const getAttendancesService = async (queries: AttendanceQueries) => {
  try {
    const dates = dateValidator(queries.startDate, queries.endDate);
    const employee = await findUser(queries.userId);

    const filter: Prisma.AttendanceRecordWhereInput = {};
    filter.createdAt = { gt: dates.start, lt: dates.end };
    if (queries.attendanceType) filter.attendanceType = queries.attendanceType as AttendanceType;

    if (employee.role == "DRIVER" || employee.role == "WORKER") {
      filter.employeeAttendanceId = { in: employee.Employee!.EmployeeAttendance.map((item) => item.id) };
    } else if (employee.role == "OUTLET_ADMIN") {
      const attendanceIds = await findOutletsAttendancesId(employee.Employee!.outletId, queries.role, queries.workShift, queries.name);
      filter.employeeAttendanceId = { in: attendanceIds };
    } else if (employee.role == "SUPER_ADMIN") {
      const attendanceIds = await findOutletsAttendancesId(undefined, queries.role, queries.workShift, queries.name, queries.outletName);
      filter.employeeAttendanceId = { in: attendanceIds };
    }

    return await getAttendances(filter, queries);
  } catch (error) {
    throw error;
  }
};
