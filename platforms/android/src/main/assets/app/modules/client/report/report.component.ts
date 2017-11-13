import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    requestCrane() {
        this.router.navigate(['/client/waiting', 1]);
    }

    requestMechanic() {
        this.router.navigate(['/client/waiting', 2]);
    }

    requestCall() {
        this.router.navigate(['/client/waiting', 3]);
    }

}
