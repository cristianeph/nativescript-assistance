import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../../shared/services/login.service";
import {AssistanceService} from "../../../shared/services/assistance.service";
import {Assistance} from "../../../shared/classes/assistance.class";
import {WorkerService} from "../../../shared/services/worker.service";
import {CustomerService} from "../../../shared/services/customer.service";
import {User} from "../../../shared/classes/user.class";
import {AssistanceType} from "../../../shared/classes/assistance-type.class";
import {confirm} from "ui/dialogs";
/*import {
    isEnabled,
    enableLocationRequest,
    getCurrentLocation,
} from "nativescript-geolocation";*/

@Component({
    moduleId: module.id,
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
    user: User;
    title: string;

    constructor(private router: Router,
                private loginService: LoginService,
                private assistanceService: AssistanceService,
                private workerService: WorkerService,
                private customerService: CustomerService) {
        this.title = 'Solicite asistencia';
    }

    ngOnInit() {
    }

    pageLoaded() {
        this.getCustomerInfo();
    }

    getCustomerInfo() {
        console.log('You are already loged => ', JSON.stringify(this.loginService.getUser()));
        this.user = this.loginService.getUser();
        this.customerService.find(this.user.id).subscribe(
            data => {
                if (data) {
                    console.log('Customer info => ', JSON.stringify(data));
                    this.customerService.setCustomer(data);
                }
            },
            errors => {
                console.log('Error', errors, errors.status);
            }
        );
    }

    requestAssitance(type: number) {
        let options = {
            message: "Esta seguro que desea hacer la solicitud?",
            title: "Necesita ayuda?",
            okButtonText: "Si",
            cancelButtonText: "No",
            neutralButtonText: "Cancelar"
        };
        confirm(options).then((result: boolean) => {
            if (result === true) {
                this.getCurrentLocation();
                this.registryAssistance(type);
            }
        });
    }

    registryAssistance(type: number) {
        console.log('El cliente que registrara la incidencia es => ', JSON.stringify(this.customerService.getCustomer()));
        const assistance = new Assistance(
            null,
            null,
            'test address',
            'test address reference',
            new AssistanceType(type, null),
            null,
            this.customerService.getCustomer(),
            null,
            ''
        );
        console.log('Parsed data => ', JSON.stringify(assistance));
        this.assistanceService.register(assistance).subscribe(
            data => {
                console.log('Assistance has been created => ', JSON.stringify(data));
                this.assistanceService.setAssistance(data);
                this.router.navigate(['/client/waiting', type]);
            },
            errors => {
                console.log('Error');
                console.log(errors);
                console.log(errors.status);
            }
        );
    }

    getCurrentLocation() {
        /*var location = getCurrentLocation({
            desiredAccuracy: 3,
            updateDistance: 10,
            maximumAge: 20000,
            timeout: 20000
        }).then(function (loc) {
            if (loc) {
                console.log("Current location is: " + JSON.stringify(loc));
            }
        }, function (e) {
            console.log("Error: " + e.message);
        });*/

    }

}
