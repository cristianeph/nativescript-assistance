import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {BusService} from "../../../shared/services/bus.service";
import {on as applicationOn, resumeEvent, ApplicationEventData} from "application";
import {ApplicationSettingsService} from "../../../shared/services/application-settings.service";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "tns-core-modules/ui/page";


@Component({
    moduleId: module.id,
    selector: 'app-waiting',
    templateUrl: './waiting.component.html',
    styleUrls: ['./waiting.component.css']
})

export class WaitingComponent {
    type: number;
    title: string;
    recievedData: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private page: Page,
                private busService: BusService,
                private appSettingServices: ApplicationSettingsService,
                private routerExtension: RouterExtensions) {
        this.title = 'Espere un momento...';
        this.route.params.subscribe(params => {
            if (params) {
                this.type = +params['id'];
                console.log("Param incoming => ", +params['id']);
            }
        });
        this.getNotifications();
    }

    pageLoaded() {
        this.page.actionBarHidden = true;
        this.appLifeEvents();
    }

    appLifeEvents() {
        applicationOn(resumeEvent, (args: ApplicationEventData) => {
            console.log("Resume => Event")
            if (args.android) {
                /*this.routerExtensions.navigate(['/pin'], { clearHistory: true, animated: false });*/
                /*console.log("Push notification => ", JSON.stringify(this.appSettingServices.getPushNotification()));*/
                /*this.router.navigate(["/client/tracking", this.appSettingServices.getPushNotification().data.assistance]);*/
                /*this.router.navigate(["/client/waiting"]);*/
                /*this.router.navigate(["/client/tracking", 122]);*/
                /*this.routerExtension.navigate(["/client/tracking", 122], {clearHistory: true, animated: false});*/
            } else if (args.ios) {
            }
        });
    }

    getNotifications() {
        this.busService.subscribe("central-notification", (data) => {
            console.log("Notification recieved => Waiting view => ", JSON.stringify(data));
            const recievedData = data.data;
            if (recievedData) {
                if (recievedData.state === "ATENDIENDO") {
                    console.log("Redirectioning result => Assistance => ", recievedData.assistance);
                    this.recievedData = recievedData;
                    this.routerExtension.navigate(["/client/tracking", this.appSettingServices.getPushNotification().data.assistance]);
                }
            }
        })
    }

}
