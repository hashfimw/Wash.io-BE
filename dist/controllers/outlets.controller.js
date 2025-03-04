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
exports.PublicOutletController = void 0;
const outlets_service_1 = require("../services/outlets-home/outlets.service");
class PublicOutletController {
    getPublicOutlets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, outlets_service_1.getOutletsUserService)(req, res);
                // Perhatikan bahwa getOutletsUserService sudah mengirim response,
                // jadi kita tidak perlu mengirim response lagi di sini
                // Jika service tidak mengirim response, gunakan kode di bawah ini:
                // res.status(200).send(result);
            }
            catch (error) {
                console.log(error);
                res.status(500).send({
                    message: "Failed to fetch outlets",
                    data: null,
                    meta: null,
                    error: error instanceof Error ? error.message : "Unknown error occurred"
                });
            }
        });
    }
}
exports.PublicOutletController = PublicOutletController;
