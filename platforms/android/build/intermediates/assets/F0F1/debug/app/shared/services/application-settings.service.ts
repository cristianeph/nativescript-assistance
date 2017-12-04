import {Injectable} from '@angular/core';
import {
    getBoolean,
    setBoolean,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "application-settings";
import {User} from "../classes/user.class";
import {Assistance} from "../classes/assistance.class";

@Injectable()
export class ApplicationSettingsService {

    constructor() {
    }

    initSettings() {
        if (hasKey("user-login")) {
            setBoolean("user-login", null);
        }
        if (hasKey("user-data")) {
            setString("user-data", null);
        }
        if (hasKey("user-token")) {
            setString("user-token", null);
        }
        if (hasKey("user-assistance")) {
            setString("user-assistance", null);
        }
        if (hasKey("user-notification")) {
            setString("user-notification", null);
        }
    }

    destroyLogin() {
        this.setUser(null);
        this.setLogged(false);
        this.setAssistance(null);
        this.setPushNotification(null);
    }

    isLogged() {
        return (this.getLogged() === true && this.getUser() !== null);
    }

    getPushNotification() {
        return JSON.parse(getString("user-notification"));
    }

    setPushNotification(notification: any) {
        setString("user-notification", JSON.stringify(notification))
    }

    getLogged() {
        return getBoolean("user-login");
    }

    setLogged(logged: boolean) {
        setBoolean("user-login", logged);
    }

    getToken(): string {
        return getString("user-token");
    }

    setToken(token: string) {
        setString("user-token", token);
    }

    getUser(): User {
        return JSON.parse(getString("user-data"));
    }

    setUser(user: User) {
        setString("user-data", JSON.stringify(user));
    }

    getAssistance(): Assistance {
        return JSON.parse(getString("user-assistance"));
    }

    setAssistance(assistance: Assistance) {
        setString("user-assistance", JSON.stringify(assistance));
    }

}
