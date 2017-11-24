import {User} from "./user.class";

export class Customer {
    id: number;
    stars: number;
    active: boolean;
    user: User;
    spend: number;
    fcm: string;
    constructor(id: number,
                stars: number,
                active: boolean,
                user: User,
                spend: number) {
        this.id = id;
        this.stars = stars;
        this.active = active;
        this.user = user;
        this.spend = spend;
    }
}