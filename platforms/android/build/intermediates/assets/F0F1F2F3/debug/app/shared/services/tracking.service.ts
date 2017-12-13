import {Injectable} from '@angular/core';
import {Tracking} from "../classes/tracking.class";

@Injectable()
export class TrackingService {

    private items = new Array<Tracking>(
        new Tracking(10001, '2017-11-19 15:00:10', '', '', '', 'Av San Roque 123', 45),
        new Tracking(10002, '2017-11-19 15:00:10', '', '', '', 'Av Caminos del Inca 456', 40),
        new Tracking(10003, '2017-11-19 15:00:10', '', '', '', 'Av Benavides 1020', 35),
        new Tracking(10004, '2017-11-19 15:00:10', '', '', '', 'Av Angamos 3042', 30),
        new Tracking(10005, '2017-11-19 15:00:10', '', '', '', 'Av Tomas Marsano 123', 15),
        new Tracking(10006, '2017-11-19 15:00:10', '', '', '', 'Ovalo Higuereta', 5)
    );

    constructor() {
    }

    getItems(): Array<Tracking> {
        return this.items;
    }

}
