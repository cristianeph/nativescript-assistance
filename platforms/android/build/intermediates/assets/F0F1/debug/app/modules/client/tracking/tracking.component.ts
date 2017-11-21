import {Component, OnInit} from '@angular/core';
import {TrackingService} from "../../../shared/services/tracking.service";
import {Tracking} from "../../../shared/classes/tracking.class";
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
        if (app.android) {
            app.android.on(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
    }

    pageUnloaded() {
        if (app.android) {
            app.android.off(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
    }

    refuseBack(args) {
        args.cancel = true;
    }
}
