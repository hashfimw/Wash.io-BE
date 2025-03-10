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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getTransportJob_service_1 = require("../services/transportJob/getTransportJob.service");
const updateTransportJob_service_1 = require("../services/transportJob/updateTransportJob.service");
const finder_service_1 = require("../services/helpers/finder.service");
const prisma_1 = __importDefault(require("../prisma"));
class TransportJobController {
    getTransportJobs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queries = {
                    userId: +req.user.id,
                    tzo: +req.query.tzo,
                    requestType: req.query.requestType,
                    transportType: req.query.transportType,
                    startDate: req.query.startDate,
                    endDate: req.query.endDate,
                    limit: +req.query.limit || 10,
                    page: +req.query.page || 1,
                    sortBy: req.query.sortBy || "createdAt",
                    sortOrder: req.query.sortOrder || "desc",
                };
                const result = yield (0, getTransportJob_service_1.getTransportJobsService)(queries);
                res.status(200).send({ data: result.data, meta: result.meta });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getTransportJobById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getTransportJob_service_1.getTransportJobByIdService)(req.user.id, +req.params.id);
                res.status(200).send({ data: result });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getOngoingTransportJob(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getTransportJob_service_1.getOngoingTransportJobService)(+req.user.id);
                res.status(200).send({ data: result });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    countTransportJobs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requestType = req.query.requestType;
                const driver = yield (0, finder_service_1.findUser)(req.user.id);
                if (driver.role != "DRIVER")
                    throw { message: "This user can't access this feature" };
                let count;
                if (requestType == "history")
                    count = yield prisma_1.default.transportJob.count({ where: { driverId: driver.Employee.id } });
                else if (requestType == "request") {
                    count = yield prisma_1.default.transportJob.count({ where: { isCompleted: false, order: { outletId: driver.Employee.outletId } } });
                }
                if (count != undefined) {
                    res.status(200).send({ data: !!count });
                }
                else
                    throw { message: "Invalid request" };
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    updateTransportJobById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, updateTransportJob_service_1.updateTransportJobByIdService)(+req.params.id, +req.user.id, +req.query.tzo);
                res.status(201).send({ message: `Transport Job and its Order Status updated successfully` });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.default = TransportJobController;
