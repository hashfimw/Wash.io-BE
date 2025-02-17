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
const transportJob_service_1 = require("../services/transportJob/transportJob.service");
class TransportJobController {
    getTransportJobs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queries = {
                    userId: +req.user.id,
                    tzo: req.query.tzo,
                    requestType: req.query.requestType,
                    transportType: req.query.transportType || "all",
                    isCompleted: req.query.isCompleted || "1",
                    startDate: req.query.startDate,
                    endDate: req.query.endDate,
                    limit: req.query.limit || "10",
                    page: req.query.page || "1",
                    sortBy: req.query.sortBy || "createdAt",
                    sortOrder: req.query.sortOrder || "desc",
                };
                const result = yield (0, transportJob_service_1.getTransportJobsService)(queries);
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
                const { id } = req.params;
                const result = yield (0, transportJob_service_1.getTransportJobByIdService)(+id);
                res.status(200).send({ data: result });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.default = TransportJobController;
