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
import {RouterExtensions} from "nativescript-angular";

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

    constructor(private router: RouterExtensions,
                private page: Page,
                private busService: BusService,
                private loginService: LoginService,
                private appSettingsService: ApplicationSettingsService) {
        this.loginErrors = false;
        this.user = new User(null, '', '', '', null, null, '', '', null);
        this.title = 'Bienvenido';
    }

    pageLoaded() {
        this.page.actionBarHidden = true;
        this.appSettingsService.initSettings();
        /*this.router.navigate(["/client/tracking", 1]).then(() => {
            this.page.actionBarHidden = false;
        });*/
        /*this.checkPreviousLogin();*/
    }

    /*checkPreviousLogin() {
        console.log("Login => Checking => previous => ", this.appSettingsService.getLogged());
        if (this.appSettingsService.getLogged() === true) {
            this.redirectSuccess(this.user);
        }
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
                        this.redirectSuccess(this.user);
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

    redirectSuccess(user: User) {
        console.log('User type => ', user.userType.id);
        if (user.userType.id === 1) { //ADMIN
            this.router.navigate(["/admin/validate"]).then(() => {
                this.page.actionBarHidden = false;
            });
        } else if (user.userType.id === 2) { //WORKER
            this.router.navigate(["/assistance/pending"]).then(() => {
                this.page.actionBarHidden = false;
            });
        } else if (user.userType.id === 3) { //CLIENT
            this.router.navigate(["/client/report"]).then(() => {
                this.page.actionBarHidden = false;
            });
        }
    }

    register() {
        this.router.navigate(["/register"]);
    }

    forgot() {
        this.router.navigate(["/register"]);
    }

}
