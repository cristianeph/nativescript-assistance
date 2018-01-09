"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FirebasePost = (function () {
    function FirebasePost(to, notification, data) {
        this.to = to;
        this.notification = notification;
        this.data = data;
    }
    return FirebasePost;
}());
exports.FirebasePost = FirebasePost;
