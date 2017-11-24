import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
    private urlResource: string;

    constructor(private http: Http) {
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/user';
    }

    info(id: number) {
        return this.http.get(`${this.urlResource}/${id}`).map(res => res.json());
    }

    infoCustomer(id: number) {
        return this.http.get(`${this.urlResource}/customer/${id}`).map(res => res.json());
    }

    infoWorker(id: number) {
        return this.http.get(`${this.urlResource}/worker/${id}`).map(res => res.json());
    }

}
