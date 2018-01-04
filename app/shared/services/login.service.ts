import {Injectable} from '@angular/core';
import {User, UserEasy} from "../classes/user.class";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Customer} from "../classes/customer.class";
import {SERVER_PATH} from "../utils";

@Injectable()
export class LoginService {
    private user: User;
    private urlResource: string;
    private urlResourceAlternate: string;

    constructor(private http: Http) {
        this.urlResource = `${SERVER_PATH}/services/api/v1/user`;
        this.urlResourceAlternate = `${SERVER_PATH}/services/api/v1/customer`;
    }

    setUser(user: User) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    customerLogin(customer: UserEasy) {
        console.log('recieved user => ', JSON.stringify(customer));
        return this.http.post(`${this.urlResourceAlternate}/valid`, customer).map(res => res.json());
    }

    adminLogin(user: User) {
        console.log('recieved user => ', JSON.stringify(user));
        return this.http.post(`${this.urlResource}/valid`, user).map(res => res.json());
    }

    logout() {

    }

    info(id: number) {
        return this.http.get(`${this.urlResource}/${id}`).map(res => res.json());
    }

    register(user: User) {
        return this.http.post(`${this.urlResource}/`, user).map(res => res.json());
    }


}
