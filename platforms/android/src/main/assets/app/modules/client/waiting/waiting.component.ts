import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {BusService} from "../../../shared/services/bus.service";


@Component({
    moduleId: module.id,
    selector: 'app-waiting',
    templateUrl: './waiting.component.html',
    styleUrls: ['./waiting.component.css']
})

export class WaitingComponent {
    type: number;
    title: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private busService: BusService) {

        this.title = 'Espere un momento...';
        this.route.params.subscribe(params => {
            this.type = +params['id'];
            console.log(this.type);
        });
        this.getNotifications();
    }

    getNotifications() {
        this.busService.subscribe("central-notification", (data) => {
            console.log("Notification recieved => ", data);
            const recievedData = data.data;
            if (recievedData) {
                if (recievedData.state === "ATENDIENDO") {
                    console.log("Notification redirectioning result => Assistance => ", recievedData.assistance);
                    this.router.navigate(["/client/tracking", recievedData.assistance]);
                }
            }
        })
    }

}
