"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.title = '';
        this.cancel = true;
        this.cancelText = 'Salir';
        this.cancelIcon = 'ic_menu_close_clear_cancel';
        this.cancelPosition = 'right';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.exit = function () {
        var _this = this;
        var options = {
            message: "Esta seguro que desea salir?",
            title: "Quiero salir",
            okButtonText: "Si",
            cancelButtonText: "No",
            neutralButtonText: "Cancelar"
        };
        dialogs_1.confirm(options).then(function (result) {
            if (result === true) {
                _this.router.navigate(["/login"]);
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "cancel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "cancelText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "cancelIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "cancelPosition", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
