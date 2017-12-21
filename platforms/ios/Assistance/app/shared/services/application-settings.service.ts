import {Injectable} from '@angular/core';
import {
    getBoolean,
    setBoolean,
    getString,
    setString,
    hasKey
} from "application-settings";
import {User} from "../classes/user.class";
import {Assistance} from "../classes/assistance.class";
import {knownFolders, File, Folder, path} from "file-system";
import {ApplicationSettings} from "../classes/app-settings.class";

@Injectable()
export class ApplicationSettingsService {
    folder: Folder;
    folderName: string;
    file: File;
    fileName: string;
    fileExtension: string;
    //ACTUAL OBJECT
    settings: ApplicationSettings;

    constructor() {
        this.folderName = "userdata";
        this.fileName = "userdata";
        this.fileExtension = ".txt";
    }

    initSettings() {
        let tempSettings = new ApplicationSettings();
        tempSettings.assistance = null;
        tempSettings.logged = false;
        tempSettings.token = "";
        tempSettings.pushNotification = null;
        tempSettings.user = null;
        /*
        this.createWrite(JSON.stringify(settings));*/
        if (hasKey("user-settings")) {
            console.log("Settings => Status => Was created");
            this.settings = JSON.parse(getString("user-settings"));
        } else {
            console.log("Settings => Status => Was NOT created");
            setString("user-settings", JSON.stringify(tempSettings))
            this.settings = JSON.parse(getString("user-settings"));
        }
    }

    destroyLogin() {
        this.initSettings();
    }

    isLogged() {
        return (this.settings.logged === true && this.settings.user !== null);
    }

    getPushNotification() {
        return this.settings.pushNotification;
    }

    setPushNotification(notification: any) {
        this.settings.pushNotification = notification;
        //this.createWrite(JSON.stringify(this.settings));
    }

    getLogged() {
        return this.settings.logged;
    }

    setLogged(logged: boolean) {
        this.settings.logged = logged;
        //this.createWrite(JSON.stringify(this.settings))
    }

    getToken(): string {
        return this.settings.token;
    }

    setToken(token: string) {
        this.settings.token = token;
        //this.createWrite(JSON.stringify(this.settings));
    }

    getUser(): User {
        return this.settings.user;
    }

    setUser(user: User) {
        this.settings.user = user;
        //this.createWrite(JSON.stringify(this.settings));
    }

    getAssistance(): Assistance {
        return this.settings.assistance;
    }

    setAssistance(assistance: Assistance) {
        this.settings.assistance = assistance;
        //this.createWrite(JSON.stringify(this.settings));
    }

    //METHODS FOR FILE MANAGEMENT

    set(settings: ApplicationSettings) {
        if (this.check() === true) {
            console.log("File => State => It was created");
            this.createWrite(JSON.stringify(settings));
        } else {
            console.log("File => State => It was NOT created");
            this.createWrite(JSON.stringify(settings));
        }
    }

    createWrite(content: string) {
        let documents = knownFolders.documents();
        this.folder = documents.getFolder(this.folderName);
        this.file = this.folder.getFile(this.fileName + ".txt");
        this.file.writeText(content)
            .then(result => {
                this.read().then(content => {
                    console.log("File => Created => ", content);
                });
            })
            .catch(error => {
                    console.log("File => Created => Error => ", JSON.stringify(error));
                }
            );
    }

    read() {
        return this.file.readText();
    }

    check(): boolean {
        let documents = knownFolders.documents();
        let file = path.join(documents.path, (this.fileName + this.fileExtension));
        let fileState = File.exists(file);
        return fileState
    }

}
