// src/services/superAdmEmployee.service.ts
import { Request, Response } from "express";
import { genSalt, hash } from "bcrypt";
import prisma from "../../prisma";
import { Role } from "@prisma/client";

export const createEmployeeService = async (req: Request, res: Response) => {
  const { fullName, email, password, role, workShift, station, outletId } =
    req.body;

  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  const employee = await prisma.user.create({
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

  const { password: _, ...employeeWithoutPassword } = employee;

  return {
    message: "Employee created successfully! ✅",
    data: employeeWithoutPassword,
  };
};

export const getAllEmployeesService = async (req: Request, res: Response) => {
  const employees = await prisma.user.findMany({
    where: {
      isDeleted: false,
      role: { in: [Role.WORKER, Role.DRIVER, Role.OUTLET_ADMIN] },
    },
    include: {
      Employee: {
        include: { outlet: true },
      },
    },
  });

  return {
    message: "Employees fetched successfully",
    data: employees,
  };
};

export const updateEmployeeService = async (req: Request, res: Response) => {
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
  const users = await prisma.user.findMany({
    where: { isDeleted: false },
    include: { Employee: true },
  });

  return {
    message: "Users fetched successfully",
    data: users,
  };
};
