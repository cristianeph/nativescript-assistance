import {Component, OnInit} from '@angular/core';
import {User} from "../../classes/user.class";
import {Router} from "@angular/router";
import {Page} from "tns-core-modules/ui/page";
import {LoginService} from "../../services/login.service";

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: User;
    title: string;
    loginErrors: boolean;
    constructor(private router: Router,
                private page: Page,
                private loginService: LoginService) {
        this.user = new User(null, '', '', null, null, '', '', null);
        this.title = 'Bienvenido';
    }

    ngOnInit() {
    }

    pageLoaded() {
        this.page.actionBarHidden = true;
        /*this.router.navigate(["/client/tracking", 1]).then(() => {
            this.page.actionBarHidden = false;
        });*/
    }

    login() {
        if (this.user.email && this.user.password) {
            console.log('requesting login ...');
            this.loginService.login(new User(null, this.user.email, this.user.password, null, null, '', '', null)).subscribe(
                data => {
                    if (data) {
                        console.log('Login successfull user id => ', data.id);
                        console.log('Login successfull user fullnames => ', data.firstnames, data.lastnames);
                        this.loginService.setUser(
                            new User(data.id, data.email, '', data.from, data.until, data.firstnames, data.lastnames, data.userType)
                        );
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
                    console.log('Error');
                    console.log(errors);
                    console.log(errors.status);
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
