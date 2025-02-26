"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdmEmployeeController = void 0;
const superAdmEmployee_service_1 = require("../services/employee/superAdmEmployee.service");
class SuperAdmEmployeeController {
    constructor() {
        this.createEmployeeController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, superAdmEmployee_service_1.createEmployeeService)(req, res);
                res.status(201).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.getAllEmployeesController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, superAdmEmployee_service_1.getAllEmployeesService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.updateEmployeeController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, superAdmEmployee_service_1.updateEmployeeService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.deleteEmployeeController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, superAdmEmployee_service_1.deleteEmployeeService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.getAllUsersController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, superAdmEmployee_service_1.getAllUsersService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.assignEmployeeToOutletController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, superAdmEmployee_service_1.assignEmployeeToOutletService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.reassignMultipleEmployeesController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, superAdmEmployee_service_1.reassignMultipleEmployeesService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
}
exports.SuperAdmEmployeeController = SuperAdmEmployeeController;
