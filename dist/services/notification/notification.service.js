"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMultipleNotificationDataService = void 0;
const createMultipleNotificationDataService = (userIds, title, description, url = null) => {
    return userIds.map((item) => {
        return { userId: item, title, description, url };
    });
};
exports.createMultipleNotificationDataService = createMultipleNotificationDataService;
