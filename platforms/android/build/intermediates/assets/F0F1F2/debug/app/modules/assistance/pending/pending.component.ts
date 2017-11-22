import {Component, OnInit} from '@angular/core';
import {Assistance} from "../../../shared/classes/assistance.class";
import {AssistanceService} from "../../../shared/services/assistance.service";

@Component({
    moduleId: module.id,
    selector: 'app-pending',
    templateUrl: './pending.component.html',
    styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
    title: string;
    list: Array<Assistance>;

    constructor(private assistanceService: AssistanceService) {
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

}
