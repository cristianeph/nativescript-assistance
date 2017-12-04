import {Injectable} from '@angular/core';
import {Customer} from "../classes/customer.class";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class CustomerService {
    private customer: Customer;
    private urlResource: string;

    constructor(private http: Http) {
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/customer';
    }

    find(id: number) {
        return this.http.get(`${this.urlResource}/user/${id}`).map(res => res.json());
    }

    updateToken(customer: Customer) {
        return this.http.post(`${this.urlResource}/fcm`, customer).map(res => res.json());
    }

    updateLocation(customer: Customer) {
        return this.http.post(`${this.urlResource}/geolocation`, customer).map(res => res.json());
    }

    setCustomer(customer: Customer) {
        this.customer = customer;
    }
    getCustomer() {
        return this.customer;
    }

}
