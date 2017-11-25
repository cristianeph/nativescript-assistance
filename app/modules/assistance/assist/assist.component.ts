import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../shared/classes/user.class";
import {CustomerService} from "../../../shared/services/customer.service";
import {UserService} from "../../../shared/services/user.service";
import {Customer} from "../../../shared/classes/customer.class";
import {AssistanceService} from "../../../shared/services/assistance.service";
import {Assistance} from "../../../shared/classes/assistance.class";

@Component({
    moduleId: module.id,
    selector: 'app-assist',
    templateUrl: './assist.component.html',
    styleUrls: ['./assist.component.css']
})
export class AssistComponent {
    title: string;
    id: number;
    user: User;
    customer: Customer;
    assistance: Assistance;
    customerUser: User;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private customerService: CustomerService,
                private assistanceService: AssistanceService) {
        this.title = 'Espere, estamos cargando la información del cliente';
    }

    pageLoaded() {
        this.route.params.subscribe(params => {
            this.id = +params['assistid'];
            console.log('Assistance id => ', this.id);
            this.getAssistance(this.id);
        });
    }

    getAssistance(id: number) {
        this.assistanceService.find(id).subscribe(
            data => {
                console.log('Assistance object => ', JSON.stringify(data));
                this.assistance = data;
                this.customer = this.assistance.customer;
                this.userService.infoCustomer(this.assistance.customer.id).subscribe(
                    data => {
                        console.log('User object from Customer => ', JSON.stringify(data));
                        this.customerUser = data;
                        this.title = this.customerUser.lastnames + ", " + this.customerUser.firstnames;
                    }
                );
            }
        );
    }

}
