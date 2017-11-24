import {Component, OnInit} from '@angular/core';
import {Assistance} from "../../../shared/classes/assistance.class";
import {AssistanceService} from "../../../shared/services/assistance.service";
import {isAndroid} from "tns-core-modules/platform";
import {SearchBar} from "tns-core-modules/ui/search-bar";
import {Page} from "tns-core-modules/ui/page";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-pending',
    templateUrl: './pending.component.html',
    styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
    title: string;
    list: Array<Assistance>;
    searchBar: SearchBar;

    constructor(private router: Router,
                private page: Page,
                private assistanceService: AssistanceService) {
        this.title = 'Trabajos pendientes de aceptar'
    }

    ngOnInit() {
    }

    pageLoaded() {
        this.getAssistances();
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

    getAssist(id: number) {
        this.router.navigate(["/assistance/assist", id]).then(() => {
            this.page.actionBarHidden = false;
        });
    }

}
