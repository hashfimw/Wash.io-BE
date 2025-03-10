"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newEmployeeAttendanceChecker = exports.dateValidator = exports.shiftChecker = exports.localTimeChecker = void 0;
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
        // if (start > now || end > now) throw { message: "Start/end date cannot be greater than current date" };
        // if (start >= end) throw { message: "End date cannot be greater than start date" };
        // if (start < origin || end < origin) throw { message: "Start/end date cannot be less than 1970-01-01" };
        return { start: start, end: end };
    }
    catch (error) {
        throw error;
    }
};
exports.dateValidator = dateValidator;
const newEmployeeAttendanceChecker = (tzo, workShift) => {
    const nowLocal = (0, exports.localTimeChecker)(tzo).getUTCHours();
    if (workShift == "MORNING") {
        if (nowLocal >= 5 && nowLocal < 14)
            return true;
        else
            return false;
    }
    else if (workShift == "NOON") {
        if (nowLocal >= 13 && nowLocal < 22)
            return true;
        else
            return false;
    }
    else {
        if (nowLocal >= 0 && nowLocal < 6)
            return true;
        else if (nowLocal >= 21 && nowLocal < 24)
            return true;
        else
            return false;
    }
};
exports.newEmployeeAttendanceChecker = newEmployeeAttendanceChecker;
