export interface DepartureRobotResponse {
    Departure: Product[];
}

export interface Product {
    time: string;
    date: string;
    rtTime?: string;
    rtDate?: string;
    direction: string;
}
