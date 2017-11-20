import {Injectable} from '@angular/core';
import {User} from "../classes/user.class";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class LoginService {
    private user: User;
    private urlResource: string;

    constructor(private http: Http) {
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/user';
    }

    setUser(user: User) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    login(user: User) {
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
