import {User} from "./user.class";

export class Customer {
    id: number;
    stars: number;
    active: boolean;
    user: User;
    spend: number;
    plate: string;
    fcm: string;
    latitude: number;
    longitude: number;
    altitude: number;
    constructor(id: number,
                stars: number,
                active: boolean,
                user: User,
                spend: number,
                plate: string,
                latitude: number,
                longitude: number,
                altitude: number) {
        this.id = id;
        this.stars = stars;
        this.active = active;
        this.user = user;
        this.spend = spend;
        this.plate = plate;
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }
}