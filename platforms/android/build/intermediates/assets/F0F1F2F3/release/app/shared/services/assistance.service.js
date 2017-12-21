"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AssistanceService = (function () {
    function AssistanceService(http) {
        this.http = http;
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/assistance';
        /*this.urlResource = 'http://192.168.31.120:8080/api/v1/assistance';*/
    }
    AssistanceService.prototype.register = function (assistance) {
        return this.http.post("" + this.urlResource, assistance).map(function (res) { return res.json(); });
    };
    AssistanceService.prototype.update = function (assistance) {
        return this.http.post("" + this.urlResource, assistance).map(function (res) { return res.json(); });
    };
    AssistanceService.prototype.find = function (id) {
        return this.http.get(this.urlResource + "/" + id).map(function (res) { return res.json(); });
    };
    AssistanceService.prototype.all = function (page, size) {
        return this.http.get(this.urlResource + "?page=" + page + "&size=" + size).map(function (res) { return res.json(); });
    };
    AssistanceService.prototype.setAssistance = function (assistance) {
        this.assistance = this.assistance;
    };
    AssistanceService.prototype.getAssistance = function () {
        return this.assistance;
    };
    AssistanceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AssistanceService);
    return AssistanceService;
}());
exports.AssistanceService = AssistanceService;
