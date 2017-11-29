import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {FirebasePost} from "../classes/firebase-post.class";

@Injectable()
export class FirebaseService {

    private urlResource: string;

    constructor(private http: Http) {
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/firebase';
    }

    sendNotification(notification: FirebasePost) {
        return this.http.post(`${this.urlResource}`, notification).map(res => res.json());
    }

}
