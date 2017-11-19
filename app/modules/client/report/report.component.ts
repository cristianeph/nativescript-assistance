import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
    title: string;

    constructor(private router: Router) {
        this.title = 'Solicite asistencia';
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
