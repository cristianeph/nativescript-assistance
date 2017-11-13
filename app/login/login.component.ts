import {Component, OnInit} from '@angular/core';
import {User} from "../shared/classes/user.class";
import {Router} from "@angular/router";
import {Page} from "tns-core-modules/ui/page";

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: User;

    constructor(private router: Router,
                private page: Page) {
        this.user = new User();
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    login() {
        if (this.user.email && this.user.password) {
            this.router.navigate(["/client/report"],).then(() => {
                this.page.actionBarHidden = false;
            });
        }
    }

    register() {
        this.router.navigate(["/register"]);
    }

}
