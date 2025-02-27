export interface PaginationQueries {
  limit: string;
  page: string;
  sortBy: string | number;
  sortOrder: string | number;
}

export interface PaginationQuerieswithDate {
  startDate: string;
  endDate: string;
  limit: string;
  page: string;
  sortBy: string | number;
  sortOrder: string | number;
}
