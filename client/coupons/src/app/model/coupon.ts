export interface Coupon {
    id?: string;
    code?: string;
    discount?: number;
    price?: number;
    startDate?: Date;
    endDate?: Date;
    inactive?: boolean;
    createdAt?: string;
}
