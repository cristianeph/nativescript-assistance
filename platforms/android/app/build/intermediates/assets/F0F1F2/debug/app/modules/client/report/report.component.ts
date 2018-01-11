import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../../shared/classes/user.class";
import {Assistance} from "../../../shared/classes/assistance.class";
import {LoginService} from "../../../shared/services/login.service";
import {AssistanceType} from "../../../shared/classes/assistance-type.class";
import {CustomerService} from "../../../shared/services/customer.service";
import {AssistanceService} from "../../../shared/services/assistance.service";
import {ApplicationSettingsService} from "../../../shared/services/application-settings.service";
import {Accuracy} from "ui/enums";
import * as dialogs from "ui/dialogs";
import * as geolocation from "nativescript-geolocation";
import {Page} from "tns-core-modules/ui/page";
import {GoogleMapsService} from "../../../shared/services/google-maps.service";

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
                private page: Page,
                private loginService: LoginService,
                private customerService: CustomerService,
                private assistanceService: AssistanceService,
                private appSettingService: ApplicationSettingsService,
                private googleMapsService: GoogleMapsService) {
        this.title = 'Solicite asistencia';
    }

    ngOnInit() {
    }

    pageLoaded() {
        this.page.actionBarHidden = true;
        this.getCustomerInfo();
        console.log("Login => Status => ", this.appSettingService.getLogged());
    }

    getCustomerInfo() {
        console.log('You are already loged => ', JSON.stringify(this.loginService.getUser()));
        this.user = this.loginService.getUser();
        console.log('User previously received => ', JSON.stringify(this.user));
        this.customerService.find(this.user.id).subscribe(
            data => {
                if (data) {
                    let customer = data;
                    customer.fcm = this.appSettingService.getToken();
                    console.log('Customer info => ', JSON.stringify(customer));
                    this.customerService.setCustomer(customer);
                    this.customerService.updateToken(customer).subscribe(
                        data => {
                            console.log('Customer token updated => ', JSON.stringify(data));
                        }
                    );
                }
            },
            errors => {
                console.log('Customer info error => ', errors, errors.status);
            }
        );
    }

    requestAssitance(type: number) {
        let dialogOptions = {
            message: "Esta seguro que desea hacer la solicitud?",
            title: "Necesita ayuda?",
            okButtonText: "Si",
            cancelButtonText: "No",
            neutralButtonText: "Cancelar"
        };
        let promptOptions = {
            title: "Ingrese una referencia de su dirección",
            message: "Detalle la referencia:",
            cancelButtonText: "Cancelar",
            okButtonText: "OK",
            inputType: dialogs.inputType.text
        };
        dialogs.confirm(dialogOptions).then((result: boolean) => {
            if (result === true) {
                dialogs.prompt(promptOptions)
                    .then((promptResult) => {
                        if (promptResult.result) {
                            //Requesting gelocation data
                            this.getCurrentLocation().then(location => {
                                //Geolocation Successfull
                                let requestedLocation = location;
                                console.log("Location => data => ", JSON.stringify(requestedLocation));
                                let customer = this.customerService.getCustomer();
                                customer.latitude = requestedLocation.latitude;
                                customer.longitude = requestedLocation.longitude;
                                customer.altitude = requestedLocation.altitude;
                                this.customerService.setCustomer(customer);
                                console.log("Customer => before => data => ", JSON.stringify(customer));
                                this.customerService.updateLocation(customer).subscribe(
                                    data => {
                                        console.log("Customer => data => updated => ", JSON.stringify(data));
                                        this.registryAssistance(type, promptResult.text);
                                    },
                                    error => {
                                        console.log("Error => ", error);
                                    }
                                );
                            }).catch(error => {
                                console.log("Location => error => ", JSON.stringify(error));
                            });
                        } else {
                            console.log("Se cancelo la operacion");
                        }
                    });
            }
        });
    }

    registryAssistance(type: number, reference: string) {
        const assistance = new Assistance(
            null,
            null,
            '-',
            reference,
            new AssistanceType(type, null),
            null,
            this.customerService.getCustomer(),
            null,
            '',
            'PENDIENTE'
        );
        console.log('El tipo de asistencia es =>  ', type);
        console.log('El cliente que registrara la incidencia es => ', JSON.stringify(this.customerService.getCustomer()));
        console.log('Parsed data => ', JSON.stringify(assistance));
        this.assistanceService.register(assistance).subscribe(
            (data) => {
                console.log('Assistance has been created => ', JSON.stringify(data));
                this.assistanceService.setAssistance(data);
                this.appSettingService.setAssistance(data);
                this.updateReverseLocation(data);
                this.router.navigate(['/client/waiting', type]);
            },
            (errors) => {
                console.log('Error', errors, errors.status);
            }
        );
    }

    updateReverseLocation(assistance: Assistance) {
        console.log("About to update location...");
        this.googleMapsService.getReverseGeocoding(
            this.customerService.getCustomer().latitude,
            this.customerService.getCustomer().longitude,
            0
        ).subscribe(
            (data) => {
                let addressName = "";
                data.results[0].address_components.forEach(item => {
                    addressName = (addressName === "") ? item.long_name : addressName + " " + item.long_name;
                });
                assistance.address = addressName.substr(0, 49);
                console.log("Google Maps => Reverse => ", assistance.address, assistance.address.length);
                console.log("Google Maps => Assistance => ", JSON.stringify(assistance));
                this.assistanceService.updateLocation(assistance).subscribe(
                    (data) => {
                        console.log("Update Location => Success => ", JSON.stringify(data));
                    },
                    (errors) => {
                        console.log("Update Location => Error => ", JSON.stringify(errors));
                    }
                );
            },
            (errors) => {
                console.log("Getting Location => Error => ", JSON.stringify(errors));
            }
        );
    }

    getCurrentLocation() {
        return geolocation.getCurrentLocation({
                desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000
        });
    }

}
