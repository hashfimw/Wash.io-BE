import { Request, Response } from "express";
import { genSalt, hash } from "bcrypt";
import prisma from "../../prisma";
import { Prisma, Role } from "../../../prisma/generated/client";
import { getOutletTzo } from "../attendance/attendanceScheduler.service";
import { newEmployeeAttendanceChecker } from "../helpers/dateTime.service";

export const createEmployeeService = async (req: Request, res: Response) => {
  // Pastikan hanya super admin yang bisa membuat employee
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  if (!user || user.role !== Role.SUPER_ADMIN) {
    throw new Error("Only Super Admin can create employees");
  }

  const { fullName, email, password, role, workShift, station, outletId } = req.body;

  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  const outletTzo = await getOutletTzo(outletId); 

  await prisma.$transaction(async (tx) => {
    const employee = await tx.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        role,
        Employee: {
          create: { workShift, station, outletId },
        },
        isVerified: true,
      },
      include: { Employee: true },
    });

    const workShiftChecker = newEmployeeAttendanceChecker(outletTzo, workShift);

    if (workShiftChecker) {
      await tx.employeeAttendance.create({
        data: { canClockIn: true, employeeId: employee.Employee!.id},
      });
    }

    const { password: _, ...employeeWithoutPassword } = employee;

    return {
      message: "Employee created successfully! ✅",
      data: employeeWithoutPassword,
    };
  });
};

export const getAllEmployeesService = async (req: Request, res: Response) => {
  // Pastikan hanya super admin yang bisa melihat semua employees
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  if (!user || user.role !== Role.SUPER_ADMIN) {
    throw new Error("Only Super Admin can view all employees");
  }

  const filter: Prisma.UserWhereInput = {
    isDeleted: false,
    role: { in: [Role.WORKER, Role.DRIVER, Role.OUTLET_ADMIN] },
  };
  const { page = 1, limit = 10, sortOrder = "asc", role, outletName } = req.query;
  const search = req.query.search as string | undefined;
  let sortBy = req.query.sortBy as string;
  if (!sortBy) sortBy = "fullName";

  if (search) {
    filter.OR = [{ fullName: { contains: search, mode: "insensitive" } }, { email: { contains: search, mode: "insensitive" } }];
  }

  if (role && role !== "ALL Role") {
    filter.role = role as Role;
  }

  if (outletName) {
    const outlet = await prisma.outlet.findFirst({
      where: { outletName: outletName as string },
    });

    if (outlet) {
      const employeeIds = (
        await prisma.employee.findMany({
          where: { outletId: outlet.id },
        })
      ).map((item) => item.userId);

      filter.id = { in: employeeIds };
    }
  }

  const employees = await prisma.user.findMany({
    where: filter,
    include: {
      Employee: {
        include: { outlet: true },
      },
    },
    take: +limit,
    skip: (+page - 1) * +limit,
    orderBy: { [sortBy]: sortOrder },
  });

  const count = await prisma.user.count({
    where: filter,
  });
  const total = Math.ceil(count / +limit);

  return {
    message: "Employees fetched successfully",
    data: employees,
    meta: {
      page,
      limit,
      total,
    },
  };
};

export const updateEmployeeService = async (req: Request, res: Response) => {
  // Pastikan hanya super admin yang bisa update employee
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  if (!user || user.role !== Role.SUPER_ADMIN) {
    throw new Error("Only Super Admin can update employees");
  }

  const { id } = req.params;
  const { fullName, email, workShift, station, outletId } = req.body;

  const employee = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      fullName: fullName || undefined,
      email: email || undefined,
      Employee: {
        update: {
          workShift: workShift || undefined,
          station: station || undefined,
          outletId: outletId || undefined,
        },
      },
    },
    include: { Employee: true },
  });

  return {
    message: "Employee updated successfully",
    data: employee,
  };
};

export const deleteEmployeeService = async (req: Request, res: Response) => {
  // Pastikan hanya super admin yang bisa delete employee
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  if (!user || user.role !== Role.SUPER_ADMIN) {
    throw new Error("Only Super Admin can delete employees");
  }

  const { id } = req.params;

  await prisma.$transaction([
    prisma.employee.update({
      where: { userId: Number(id) },
      data: { isDeleted: true, deletedAt: new Date() },
    }),
    prisma.user.update({
      where: { id: Number(id) },
      data: { isDeleted: true, deletedAt: new Date() },
    }),
  ]);

  return {
    message: "Employee deleted successfully",
  };
};

export const getAllUsersService = async (req: Request, res: Response) => {
  // Pastikan hanya super admin yang bisa melihat semua users
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.id) },
  });

  if (!user || user.role !== Role.SUPER_ADMIN) {
    throw new Error("Only Super Admin can view all users");
  }

  const users = await prisma.user.findMany({
    where: { isDeleted: false },
    include: { Employee: true },
  });

  return {
    message: "Users fetched successfully",
    data: users,
  };
};
