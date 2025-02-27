export interface GetPickupOrdersQuery {
    id: number;
    pickupStatus: string;
    isClaimedByDriver?: number;
    latitude: number;
    longitude: number;
    take: number;
    page: number;
    sortBy: string;
    sortOrder: "asc" | "desc"; // ✅ FIXED TYPE
  }
  