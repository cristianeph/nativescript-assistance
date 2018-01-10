import {FirebaseNotification} from "./firebase-notification.class";
import {FirebaseData} from "./firebase-data.class";

export class FirebasePost {
    to: string;
    notification: FirebaseNotification;
    data: FirebaseData;
    constructor(to: string,
                notification: FirebaseNotification,
                data: FirebaseData) {
        this.to = to;
        this.notification = notification;
        this.data = data;
    }
}