export interface PaginationQueries {
  limit: number;
  page: number;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

export interface PaginationQuerieswithDate {
  startDate: string;
  endDate: string;
  limit: number;
  page: number;
  sortBy: string;
  sortOrder: "asc" | "desc";
}
