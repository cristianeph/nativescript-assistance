import {AssistanceType} from "./assistance-type.class";
import {Customer} from "./customer.class";
import {Worker} from "./worker.class";

export class Assistance {
    id: number;
    date: string;
    address: string;
    addressreference: string;
    assistanceType: AssistanceType;
    worker: Worker;
    customer: Customer;
    stars: number;
    comments: string;
    state: string
    constructor(id: number,
                date: string,
                address: string,
                addressreference: string,
                assistanceType: AssistanceType,
                worker: Worker,
                customer: Customer,
                stars: number,
                comments: string,
                state: string) {
        this.id = id;
        this.date = date;
        this.address = address;
        this.addressreference = addressreference;
        this.assistanceType = assistanceType;
        this.worker = worker;
        this.customer = customer;
        this.stars = stars;
        this.comments = comments;
        this.state = state;
    }
}