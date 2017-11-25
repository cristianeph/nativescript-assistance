"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var FirebaseService = (function () {
    function FirebaseService(http) {
        this.http = http;
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/customer';
    }
    FirebaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
