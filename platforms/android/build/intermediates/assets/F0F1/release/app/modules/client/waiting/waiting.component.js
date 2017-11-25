"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var WaitingComponent = (function () {
    function WaitingComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.title = 'Espere un momento...';
        this.route.params.subscribe(function (params) {
            _this.type = +params['id'];
            console.log(_this.type);
            /*setTimeout(() => {
                this.router.navigate(["/client/tracking", 1009]);
            }, 4000)*/
        });
    }
    WaitingComponent.prototype.ngOnInit = function () {
    };
    WaitingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-waiting',
            templateUrl: './waiting.component.html',
            styleUrls: ['./waiting.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], WaitingComponent);
    return WaitingComponent;
}());
exports.WaitingComponent = WaitingComponent;
