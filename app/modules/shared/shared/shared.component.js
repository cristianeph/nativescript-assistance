"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SharedComponent = (function () {
    function SharedComponent() {
    }
    SharedComponent.prototype.ngOnInit = function () { };
    SharedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-shared',
            templateUrl: './shared.component.html',
            styleUrls: ['./shared.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], SharedComponent);
    return SharedComponent;
}());
exports.SharedComponent = SharedComponent;
