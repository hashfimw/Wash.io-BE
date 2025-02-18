import { Request, Response } from "express";
import {
  createEmployeeService,
  deleteEmployeeService,
  getAllEmployeesService,
  getAllUsersService,
  updateEmployeeService,
} from "../services/employee/superAdmEmployee.service";

export class SuperAdmEmployeeController {
  createEmployeeController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await createEmployeeService(req, res);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getAllEmployeesController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await getAllEmployeesService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateEmployeeController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await updateEmployeeService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteEmployeeController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await deleteEmployeeService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getAllUsersController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const result = await getAllUsersService(req, res);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
