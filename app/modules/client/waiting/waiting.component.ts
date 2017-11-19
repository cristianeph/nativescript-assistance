import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-waiting',
    templateUrl: './waiting.component.html',
    styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {
    type: number;
    title: string;
    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.title = 'Espere un momento...';
        this.route.params.subscribe(params => {
            this.type = +params['id'];
            console.log(this.type);
            setTimeout(() => {
                this.router.navigate(["/client/tracking", 1009]);
            }, 4000)
        });
    }

    ngOnInit() {
    }

}
