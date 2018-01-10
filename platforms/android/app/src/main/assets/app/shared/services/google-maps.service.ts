import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class GoogleMapsService {
    apiKey: string;
    urlResource: string;

    //Google maps api => AIzaSyCAp-fEg_H-fBuI45No1MsBcp8KCvYr_BY

    constructor(private http: Http) {
        this.apiKey = "key=AIzaSyCAp-fEg_H-fBuI45No1MsBcp8KCvYr_BY";
        this.urlResource = "https://maps.googleapis.com/maps/api/geocode/json";
    }

    getReverseGeocoding(latitude: number, longitude: number, altitude: number) {
        return this.http.get(`${this.urlResource}?latlng=${latitude},${longitude}&${this.apiKey}`).map(res => res.json());
    }

}
