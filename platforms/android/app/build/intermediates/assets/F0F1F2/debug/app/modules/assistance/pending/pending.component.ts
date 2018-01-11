import {Component, OnInit} from '@angular/core';
import {Assistance} from "../../../shared/classes/assistance.class";
import {AssistanceService} from "../../../shared/services/assistance.service";
import {isAndroid} from "tns-core-modules/platform";
import {SearchBar} from "tns-core-modules/ui/search-bar";
import {Page} from "tns-core-modules/ui/page";
import {Router} from "@angular/router";
import * as dialogs from "ui/dialogs";
import {WorkerService} from "../../../shared/services/worker.service";
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../../shared/classes/user.class";
import {LoginService} from "../../../shared/services/login.service";
import {Worker} from "../../../shared/classes/worker.class";
import {FirebasePost} from "../../../shared/classes/firebase-post.class";
import {FirebaseData} from "../../../shared/classes/firebase-data.class";
import {FirebaseService} from "../../../shared/services/firebase.service";
import {FirebaseNotification} from "../../../shared/classes/firebase-notification.class";

@Component({
    moduleId: module.id,
    selector: 'app-pending',
    templateUrl: './pending.component.html',
    styleUrls: ['./pending.component.css']
})
export class PendingComponent {
    title: string;
    list: Array<Assistance>;
    searchBar: SearchBar;
    user: User;
    /*userWorker: Worker;*/
    interval: any;
    intervalTiming: number;
    listedItems: number[];

    constructor(private router: Router,
                private page: Page,
                private loginService: LoginService,
                private firebaseService: FirebaseService,
                /*private workerService: WorkerService,*/
                private assistanceService: AssistanceService) {
        this.title = 'Trabajos pendientes de aceptar';
        this.intervalTiming = 5500;
        this.listedItems = [];
    }

    pageLoaded() {
        this.user = this.loginService.getUser();
        clearInterval(this.interval);
        this.getAssistances();
        this.getAssistancesDelayed();
    }

    updateAssistances() {
        this.getAssistances();
        this.getAssistancesDelayed();
    }

    getAssistancesDelayed() {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.getAssistances();
        }, this.intervalTiming);
    }

    getAssistances() {
        this.assistanceService.allPending(1, 20, "PENDING").subscribe(
            data => {
                /*console.log('Assistance => Response => ', JSON.stringify(data));*/
                console.log('Assistance => Response => ', data);
                if (data.content) {
                    this.list = data.content;
                    this.listedItems = [];
                    this.list.forEach(item => {
                        this.listedItems.push(item.id);
                    });
                }
            },
            errors => {
                console.log('Error');
                console.log(errors);
                console.log(errors.status);
            }
        );
    }

    isNewbie(id: number) {
        return (this.listedItems.indexOf(id) >= 0) ? 'old' : 'new';
    }

    setNewbies() {
        this.listedItems = [];
    }

    onSubmit(args) {
        this.setSearchBarOff();
        let resultList: Array<Assistance>;
        let searchBar = <SearchBar>args.object;
        console.log('Search', searchBar.text);
        resultList = this.list.filter(item =>
            (
                (item.address.indexOf(searchBar.text) !== -1) ||
                (item.addressreference.indexOf(searchBar.text) !== -1)
            )
        )
        this.list = resultList;
    }

    clearSearchBar() {
        this.setSearchBarOff();
        this.getAssistances();
        this.getAssistancesDelayed();
    }

    loadSearchBar() {
        this.setSearchBarOff();
    }

    setSearchBarOff() {
        this.searchBar = <SearchBar>this.page.getViewById("main-search-bar");
        if (isAndroid) {
            this.searchBar.android.clearFocus();
        }
    }

    getAssist(assistance: Assistance) {
        console.log('Assistance passed as parameter => ', JSON.stringify(assistance));
        let options = {
            message: "Esta seguro que desea atender la solicitud?",
            title: "Procede?",
            okButtonText: "Si",
            cancelButtonText: "No",
            neutralButtonText: "Cancelar"
        };
        dialogs.confirm(options).then((result: boolean) => {
            if (result === true) {
                this.updateAssist(assistance);
            }
        });
    }

    sendConfirmation(assistance: Assistance) {
        console.log('Assistance => Confirming => ', JSON.stringify(assistance));
        const firebaseConfirmation = new FirebasePost(
            assistance.customer.fcm,
            new FirebaseNotification(
                "Listo, tu solicitud esta siendo atendida",
                this.loginService.getUser().lastnames + ", " + this.loginService.getUser().firstnames + "será el que lo ayudará"
            ),
            new FirebaseData(assistance.customer.id, assistance.id, "ATENDIENDO")
        );
        this.firebaseService.sendNotification(firebaseConfirmation).subscribe(
            data => {
                if (data.success === 1) {
                    console.log("Assistance => notification => SUCCESS => ", JSON.stringify(data));
                } else {
                    console.log("Assistance => notification => ERROR => ", JSON.stringify(data));
                }
            }
        )
    }

    updateAssist(assistance: Assistance) {
        assistance.state = "ATENDIENDO";
        console.log('Assistance => Preparing => ', JSON.stringify(assistance));
        /*assistance.worker = this.userWorker;*/
        this.assistanceService.update(assistance).subscribe(
            data => {
                console.log('Assistance => Received', JSON.stringify(data));
                this.sendConfirmation(data);
                this.router.navigate(["/assistance/assist", assistance.id]).then(() => {
                    this.page.actionBarHidden = false;
                });
            }
        );
    }

}
