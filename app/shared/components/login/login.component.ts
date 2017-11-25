import {Component, OnInit} from '@angular/core';
import {User} from "../../classes/user.class";
import {Router} from "@angular/router";
import {Page} from "tns-core-modules/ui/page";
import {LoginService} from "../../services/login.service";
import {BusService} from "../../services/bus.service";
import {Customer} from "../../classes/customer.class";
import {Worker} from "../../classes/worker.class";
import {
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "application-settings";

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
                private loginService: LoginService,
                private busService: BusService) {
        this.loginErrors = false;
        this.user = new User(null, '', '', null, null, '', '', null);
        this.title = 'Bienvenido';
    }

    pageLoaded() {
        this.obtainToken();
        this.page.actionBarHidden = true;
        /*this.router.navigate(["/client/tracking", 1]).then(() => {
            this.page.actionBarHidden = false;
        });*/
    }

    obtainToken() {
        getString("user-token");
    }

    login() {
        if (this.user.email && this.user.password) {
            console.log('requesting login ...');
            this.loginService.login(this.user).subscribe(
                data => {
                    if (data) {
                        console.log('Login successfull user id => ', data.id);
                        console.log('Login successfull user fullnames => ', data.firstnames, data.lastnames);
                        this.user = data;
                        this.loginService.setUser(this.user);
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

    register() {
        this.router.navigate(["/register"]);
    }

    forgot() {
        this.router.navigate(["/register"]);
    }

}
