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
const getLaundryJob_service_1 = require("../services/laundryJob/getLaundryJob.service");
const updateLaundryJob_service_1 = require("../services/laundryJob/updateLaundryJob.service");
class LaundryJobController {
    getLaundryJobs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queries = {
                    userId: +req.user.id,
                    tzo: +req.query.tzo,
                    requestType: req.query.requestType,
                    startDate: req.query.startDate,
                    endDate: req.query.endDate,
                    limit: +req.query.limit || 10,
                    page: +req.query.page || 1,
                    sortBy: req.query.sortBy || "createdAt",
                    sortOrder: req.query.sortOrder || "desc",
                };
                const result = yield (0, getLaundryJob_service_1.getLaundryJobsService)(queries);
                res.status(200).send({ data: result.data, meta: result.meta });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getLaundryJobById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getLaundryJob_service_1.getLaundryJobByIdService)(+req.user.id, +req.params.id);
                res.status(200).send({ data: result });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    getOngoingLaundryJob(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, getLaundryJob_service_1.getOngoingLaundryJobService)(+req.user.id);
                res.status(200).send({ data: result });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    updateLaundryJobById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, updateLaundryJob_service_1.updateLaundryJobByIdService)(+req.params.id, +req.user.id, req.body.orderItemInput, +req.query.tzo);
                res.status(201).send({ message: `Laundry Job and its Order Status updated successfully` });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.default = LaundryJobController;
