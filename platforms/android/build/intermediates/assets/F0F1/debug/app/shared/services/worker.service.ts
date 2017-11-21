import {Injectable} from '@angular/core';
import {Worker} from "../classes/worker.class";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class WorkerService {
    private worker: Worker;
    private urlResource: string;

    constructor(private http: Http) {
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/worker';
    }

    find(id: number) {
        return this.http.get(`${this.urlResource}/${id}`).map(res => res.json());
    }

}
