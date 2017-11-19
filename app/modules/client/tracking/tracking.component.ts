import {Component, OnInit} from '@angular/core';
import {TrackingService} from "../../../objects/services/tracking.service";
import {Tracking} from "../../../objects/classes/tracking.class";
import * as app from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";

@Component({
    moduleId: module.id,
    selector: 'app-tracking',
    templateUrl: './tracking.component.html',
    styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
    title: string;
    list: Array<Tracking>;

    constructor(private trackingService: TrackingService) {
        this.title = 'Listo, espere un momento...'
    }

    ngOnInit() {
        this.list = this.trackingService.getItems()
    }

    pageLoaded() {
        console.log('Page loadeeeed!!');
        if (app.android) {
            app.android.on(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
    }

    pageUnloaded() {
        console.log('Page Unloadeeeed!!');
        if (app.android) {
            app.android.off(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
    }

    refuseBack(args) {
        args.cancel = true;
    }
}
