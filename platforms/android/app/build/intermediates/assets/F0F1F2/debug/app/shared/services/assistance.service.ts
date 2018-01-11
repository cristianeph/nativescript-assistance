import {Injectable} from '@angular/core';
import {Assistance} from "../classes/assistance.class";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class AssistanceService {
    private assistance: Assistance;
    private urlResource: string;

    constructor(private http: Http) {
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/assistance';
        /*this.urlResource = 'http://192.168.31.120:8080/api/v1/assistance';*/
    }

    register(assistance: Assistance) {
        return this.http.post(`${this.urlResource}`, assistance).map(res => res.json());
    }

    update(assistance: Assistance) {
        return this.http.post(`${this.urlResource}`, assistance).map(res => res.json());
    }

    updateLocation(assistance: Assistance) {
        return this.http.post(`${this.urlResource}/location`, assistance).map(res => res.json());
    }

    find(id: number) {
        return this.http.get(`${this.urlResource}/${id}`).map(res => res.json());
    }

    all(page: number, size: number) {
        return this.http.get(`${this.urlResource}?page=${page}&size=${size}`).map(res => res.json());
    }

    allPending(page: number, size: number, state: string) {
        return this.http.get(`${this.urlResource}?page=${page}&size=${size}&state=${state}`).map(res => res.json());
    }

    setAssistance(assistance: Assistance) {
        this.assistance = this.assistance;
    }

    getAssistance() {
        return this.assistance;
    }

}
