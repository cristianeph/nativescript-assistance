import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Message} from "../interfaces/message.interface";
import {Subscription} from "rxjs/Subscription";

type MessageCallback = (payload: any) => void;

@Injectable()
export class BusService {

    private handler;

    constructor() {
        this.handler = new Subject<Message>()
    }

    broadcast(type: string, payload: any) {
        this.handler.next({type, payload});
    }

    subscribe(type: string, callback: MessageCallback): Subscription {
        return this.handler
            .filter(message => message.type === type)
            .map(message => message.payload)
            .subscribe(callback);
    }

}
