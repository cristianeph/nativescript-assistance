import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class FirebaseService {

    private urlResource: string;

    constructor(private http: Http) {
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/customer';
    }

}
