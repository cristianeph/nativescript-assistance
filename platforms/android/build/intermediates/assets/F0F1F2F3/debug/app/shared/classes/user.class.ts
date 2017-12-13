import {UserType} from "./user-type.class";

export class User {
    public id: number;
    public email: string;
    public cellphone: string;
    public password: string;
    public from: string;
    public until: string;
    public firstnames: string;
    public lastnames: string;
    public userType: UserType;
    constructor(
        id: number,
        email: string,
        cellphone: string,
        password: string,
        from: string,
        until: string,
        firstnames: string,
        lastnames: string,
        userType: UserType) {
        this.id = id;
        this.email = email;
        this.cellphone = cellphone;
        this.password = password;
        this.from = from;
        this.until = until;
        this.firstnames = firstnames;
        this.lastnames = lastnames;
        this.userType = userType;
    }
}