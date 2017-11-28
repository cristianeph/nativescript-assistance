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
            setString("user-data", null);
            setString("user-token", null);
            setString("user-assistance", null);
        }
    }

    isLogged() {
        return (this.getLogged() === true && this.getUser() !== null);
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
