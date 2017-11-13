import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-waiting',
    templateUrl: './waiting.component.html',
    styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {
    type: number;
    titleMessage: string;
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.type = +params['id'];
            this.titleMessage = 'Contactando a central...'
        });
    }

    ngOnInit() {
    }

}
