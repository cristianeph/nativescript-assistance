import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../shared/classes/user.class";
import {CustomerService} from "../../../shared/services/customer.service";
import {UserService} from "../../../shared/services/user.service";

@Component({
    moduleId: module.id,
    selector: 'app-assist',
    templateUrl: './assist.component.html',
    styleUrls: ['./assist.component.css']
})
export class AssistComponent implements OnInit {
    title: string;
    id: number;
    user: User;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {
        this.title = 'Espere, estamos cargando la información del cliente'
        this.route.params.subscribe(params => {
            this.id = +params['clientid'];
        });
    }

    ngOnInit() {
    }

    pageLoaded() {
        this.userService.infoCustomer(this.id).subscribe(
            data => {
                console.log('Object => ', JSON.stringify(data));
                this.user = data;
                this.title = this.user.lastnames + ', ' + this.user.firstnames
            },
            error => {

            }
        );
    }

}
