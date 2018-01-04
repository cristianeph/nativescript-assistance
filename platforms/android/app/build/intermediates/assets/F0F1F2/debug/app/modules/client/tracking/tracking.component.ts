import {Component, NgZone} from '@angular/core';
import {TrackingService} from '../../../shared/services/tracking.service';
import {Tracking} from '../../../shared/classes/tracking.class';
import * as app from 'tns-core-modules/application';
import {ActivatedRoute, Router} from '@angular/router';
import {Assistance} from '../../../shared/classes/assistance.class';
import {User} from '../../../shared/classes/user.class';
import {AssistanceService} from '../../../shared/services/assistance.service';
import {UserService} from '../../../shared/services/user.service';

@Component({
    moduleId: module.id,
    selector: 'app-tracking',
    templateUrl: './tracking.component.html',
    styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {
    title: string;
    list: Array<Tracking>;
    assistance: Assistance;
    userWorker: User;
    id: number;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private trackingService: TrackingService,
                private assistanceService: AssistanceService,
                private userService: UserService,
                private ngZone: NgZone) {
        this.title = 'Listo, espere un momento...';
        this.route.params.subscribe(params => {
            this.id = +params['assistanceid'];
            console.log(this.id);
            this.getAssistance(this.id);
        });
    }

    pageLoaded() {
        if (app.android) {
            app.android.on(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
        this.list = this.trackingService.getItems()
        this.userWorker = new User(0, '', '', '', '', '', '', '', null);
        this.userWorker.firstnames = '';
        this.userWorker.lastnames = '';
    }

    pageUnloaded() {
        if (app.android) {
            app.android.off(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
    }

    getAssistance(id: number) {
        this.assistanceService.find(id).subscribe(
            data => {
                console.log('Assistance data received => ', JSON.stringify(data));
                this.assistance = data;
                this.userService.infoWorker(this.assistance.worker.id).subscribe(
                    data => {
                        console.log('Worker data received => ', JSON.stringify(data));
                        this.setUserData(data);
                    }
                )
            }
        )
    }

    setUserData(userWorker: User) {
        this.ngZone.run(() => {
            this.userWorker.firstnames = userWorker.firstnames;
            this.userWorker.lastnames = userWorker.lastnames;
            console.log(this.userWorker.firstnames);
            console.log(this.userWorker.lastnames);
        });
    }

    refuseBack(args) {
        args.cancel = true;
    }
}
