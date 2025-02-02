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
exports.checkUser = exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        // const token = req.cookies?.token; // kalo sudah pakai cookies
        if (!token)
            throw "Unauthorize!";
        const verifiedUser = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
        req.user = verifiedUser;
        console.log(verifiedUser);
        next();
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});
exports.verifyToken = verifyToken;
const checkUser = (req, res, next) => {
    var _a;
    if ((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) {
        next();
    }
    else {
        res.status(400).send({ message: "Unauthorize, User Only!" });
    }
};
exports.checkUser = checkUser;
// export const verifyTokenPro = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const token = req.header("Authorization")?.replace("Bearer ", "");
//     // const token = req.cookies?.token; // kalo sudah pakai cookies
//     if (!token) throw "Unauthorize!";
//     const verifiedPromotor = verify(token, process.env.JWT_KEY!);
//     req.promotor = verifiedPromotor as PromotorPayload;
//     console.log(verifiedPromotor);
//     next();
//   } catch (err) {
//     console.log(err);
//     res.status(400).send(err);
//   }
// };
// export const checkPromotor = (req: Request, res: Response, next: NextFunction) => {
//   if (req.promotor?.id) {
//     next();
//   } else {
//     res.status(400).send({ message: "Unauthorize, Promotor Only!" });
//   }
// };
