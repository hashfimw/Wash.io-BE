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
exports.getUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getUserService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const filter = {
            role: "CUSTOMER",
        };
        if (search) {
            filter.OR = [
                { fullName: { contains: search, mode: "insensitive" } },
                { email: { contains: search, mode: "insensitive" } },
            ];
        }
        const countUser = yield prisma_1.default.user.count({ where: filter });
        const total_page = Math.ceil(countUser / limit);
        const users = yield prisma_1.default.user.findMany({
            where: filter,
            orderBy: { id: "asc" },
            take: limit,
            skip: limit * (page - 1),
        });
        res.status(200).json({ total_page, page, limit, users });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong !" });
    }
});
exports.getUserService = getUserService;
