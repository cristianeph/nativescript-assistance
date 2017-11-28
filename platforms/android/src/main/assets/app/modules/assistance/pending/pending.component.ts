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
    userWorker: Worker;

    constructor(private router: Router,
                private page: Page,
                private loginService: LoginService,
                private workerService: WorkerService,
                private assistanceService: AssistanceService) {
        this.title = 'Trabajos pendientes de aceptar'
    }

    pageLoaded() {
        this.user = this.loginService.getUser();
        this.workerService.find(this.user.id).subscribe(
            data => {
                console.log('Worker object by user => ', JSON.stringify(data));
                this.userWorker = data;
                this.getAssistances();
            }
        );
    }

    getAssistances() {
        this.assistanceService.all(1, 20).subscribe(
            data => {
                if (data.content) {
                    this.list = data.content;
                }
            },
            errors => {
                console.log('Error');
                console.log(errors);
                console.log(errors.status);
            }
        );
    }

    clearSearchBar() {
        this.setSearchBarOff();
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

    updateAssist(assistance: Assistance) {
        console.log('Assistance passed as parameter (2 time) => ', JSON.stringify(assistance));
        assistance.worker = this.userWorker;
        this.assistanceService.register(assistance).subscribe(
            data => {
                console.log('Assistance updated object => ', JSON.stringify(data));
                this.router.navigate(["/assistance/assist", assistance.id]).then(() => {
                    this.page.actionBarHidden = false;
                });
            }
        );
    }

}
