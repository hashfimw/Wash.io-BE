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
exports.ReportController = void 0;
const report_service_1 = require("../services/outlets/report.service");
class ReportController {
    constructor() {
        this.getSalesReportController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, report_service_1.getSalesReportService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.getEmployeePerformanceController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, report_service_1.getEmployeePerformanceService)(req, res);
                res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
}
exports.ReportController = ReportController;
