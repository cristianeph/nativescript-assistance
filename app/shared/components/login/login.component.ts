import {Component} from '@angular/core';
import {User} from "../../classes/user.class";
import {Router} from "@angular/router";
import {Page} from "tns-core-modules/ui/page";
import {LoginService} from "../../services/login.service";
import {BusService} from "../../services/bus.service";
import {Customer} from "../../classes/customer.class";
import {Worker} from "../../classes/worker.class";

import {ApplicationSettingsService} from "../../services/application-settings.service";
import {FirebasePost} from "../../classes/firebase-post.class";

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user: User;
    title: string;
    worker: Worker;
    customer: Customer;
    loginErrors: boolean;
    firebaseToken: string;

    constructor(private router: Router,
                private page: Page,
                private busService: BusService,
                private loginService: LoginService,
                private appSettingsService: ApplicationSettingsService) {
        this.loginErrors = false;
        this.user = new User(null, '', '', null, null, '', '', null);
        this.title = 'Bienvenido';
    }

    pageLoaded() {
        this.page.actionBarHidden = true;
        this.appSettingsService.initSettings();
        /*this.router.navigate(["/client/tracking", 1]).then(() => {
            this.page.actionBarHidden = false;
        });*/
        /*this.checkNotification();*/
    }

    /*checkNotification() {
        this.busService.subscribe("assistance-confirmation", (notification) => {
            console.log("Notification incoming => ", JSON.stringify(notification));
        })
    }*/

    login() {
        console.log('requesting login ...');
        if (this.user.email && this.user.password) {
            this.loginService.login(this.user).subscribe(
                data => {
                    if (data) {
                        console.log('Login successfull user id => ', data.id);
                        console.log('Login successfull user fullnames => ', data.firstnames, data.lastnames);
                        this.user = data;
                        this.appSettingsService.setLogged(true);
                        this.appSettingsService.setUser(data);
                        this.loginService.setUser(this.user);
                        /*setBoolean("user-login", true);*/
                        /*setString("user-data", JSON.stringify(data));*/
                        if (data.userType.id === 1) { //ADMIN
                            this.router.navigate(["/admin/validate"]).then(() => {
                                this.page.actionBarHidden = false;
                            });
                        } else if (data.userType.id === 2) { //WORKER
                            this.router.navigate(["/assistance/pending"]).then(() => {
                                this.page.actionBarHidden = false;
                            });
                        } else if (data.userType.id === 3) { //CLIENT
                            this.router.navigate(["/client/report"]).then(() => {
                                this.page.actionBarHidden = false;
                            });
                        }
                    }
                },
                errors => {
                    console.log('Error', errors.status);
                    if (errors.status === 404) {
                        this.loginErrors = true;
                        console.log('Errores => ', this.loginErrors)
                    }
                }
            );
        }
    }

    checkNotification() {
        this.busService.subscribe("central-notification", (message) => {
            console.log("Notifcation recieved => message => ", JSON.stringify(message));
            this.validatePreviousLogin(message);
        });
    }

    validatePreviousLogin(message: FirebasePost) {
        if (this.appSettingsService.isLogged()) {
            let user = this.appSettingsService.getUser();
            let assistance = this.appSettingsService.getAssistance();
            this.loginService.setUser(user);
            if (assistance != null) {
                this.router.navigate(["/client/tracking", message.data.assistance]);
            } else {
                this.router.navigate(["/client/report"]);
            }
        }
    }

    register() {
        this.router.navigate(["/register"]);
    }

    forgot() {
        this.router.navigate(["/register"]);
    }

}
