"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateValidator = exports.shiftChecker = exports.localTimeChecker = void 0;
const client_1 = require("../../../prisma/generated/client");
const localTimeChecker = (tzo) => {
    const nowUTC = new Date().getTime();
    return new Date(nowUTC - tzo * 60000);
};
exports.localTimeChecker = localTimeChecker;
const shiftChecker = (tzo) => {
    // const nowLocal = localTimeChecker(tzo).getHours(); // deploy
    const nowLocal = (0, exports.localTimeChecker)(tzo).getUTCHours(); // development
    let workShift = client_1.EmployeeWorkShift.NIGHT;
    if (nowLocal >= 6 && nowLocal < 14) {
        workShift = client_1.EmployeeWorkShift.MORNING;
    }
    if (nowLocal >= 14 && nowLocal < 22) {
        workShift = client_1.EmployeeWorkShift.NOON;
    }
    return workShift;
};
exports.shiftChecker = shiftChecker;
const dateValidator = (startDate, endDate) => {
    try {
        const now = new Date();
        let start = new Date(startDate);
        let end = new Date(endDate);
        const origin = new Date("1970-01-01");
        if (!startDate)
            start = origin;
        if (!endDate)
            end = now;
        return { start: start, end: end };
    }
    catch (error) {
        throw error;
    }
};
exports.dateValidator = dateValidator;
