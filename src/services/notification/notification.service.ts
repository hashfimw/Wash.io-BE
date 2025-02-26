export const createMultipleNotificationDataService = (userIds: number[], title: string, description: string, url: string | null = null) => {
  return userIds.map((item) => {
    return { userId: item, title, description, url };
  });
};
