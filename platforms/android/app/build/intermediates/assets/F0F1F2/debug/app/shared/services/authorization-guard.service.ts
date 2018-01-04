import {Injectable} from '@angular/core';
import {CanActivate} from "@angular/router";
import {LoginService} from "./login.service";
import {ApplicationSettingsService} from "./application-settings.service";
import {RouterExtensions} from "nativescript-angular";

@Injectable()
export class AuthorizationGuardService implements CanActivate {

    constructor(private loginService: LoginService,
                private appSettingsService: ApplicationSettingsService,
                private router: RouterExtensions) {
    }
    canActivate() {
        if (this.appSettingsService.getLogged() === true) {
            //this.router.navigate(["/login"])
            return true;
        } else {
            this.router.navigate(["/login"]);
            return false;
        }
    }

}
