import {User} from "./user.class";

export class Worker {
    id: number;
    stars: number;
    active: boolean;
    user: User;
    earn: number;
    plate: string;
    license: string;
    constructor(id: number,
                stars: number,
                active: boolean,
                user: User,
                earn: number,
                plate: string,
                license: string) {
        this.id = id;
        this.stars = stars;
        this.active = active;
        this.user = user;
        this.earn = earn;
        this.plate = plate;
        this.license = license;
    }
}