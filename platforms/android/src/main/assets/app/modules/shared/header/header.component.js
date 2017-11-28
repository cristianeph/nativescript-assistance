"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
var application_settings_1 = require("application-settings");
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
                _this.destroyLogin();
                _this.router.navigate(["/login"]);
            }
        });
    };
    HeaderComponent.prototype.destroyLogin = function () {
        application_settings_1.setString("user-data", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUQ7QUFDdkQsMENBQXVDO0FBQ3ZDLHNDQUFtQztBQUNuQyw2REFNOEI7QUFROUI7SUFPSSx5QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyw0QkFBNEIsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUNsQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQUEsaUJBY0M7UUFiRyxJQUFJLE9BQU8sR0FBRztZQUNWLE9BQU8sRUFBRSw4QkFBOEI7WUFDdkMsS0FBSyxFQUFFLGNBQWM7WUFDckIsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixpQkFBaUIsRUFBRSxVQUFVO1NBQ2hDLENBQUM7UUFDRixpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQWU7WUFDbEMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0ksZ0NBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQW5DUTtRQUFSLFlBQUssRUFBRTs7a0RBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTs7bURBQWlCO0lBQ2hCO1FBQVIsWUFBSyxFQUFFOzt1REFBb0I7SUFDbkI7UUFBUixZQUFLLEVBQUU7O3VEQUFvQjtJQUNuQjtRQUFSLFlBQUssRUFBRTs7MkRBQXdCO0lBTHZCLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBUThCLGVBQU07T0FQekIsZUFBZSxDQXNDM0I7SUFBRCxzQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Y29uZmlybX0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7XG4gICAgZ2V0U3RyaW5nLFxuICAgIHNldFN0cmluZyxcbiAgICBnZXRCb29sZWFuLFxuICAgIHNldEJvb2xlYW4sXG4gICAgaGFzS2V5XG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2FuY2VsOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGNhbmNlbFRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBjYW5jZWxJY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2FuY2VsUG9zaXRpb246IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9ICcnO1xuICAgICAgICB0aGlzLmNhbmNlbCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FuY2VsVGV4dCA9ICdTYWxpcic7XG4gICAgICAgIHRoaXMuY2FuY2VsSWNvbiA9ICdpY19tZW51X2Nsb3NlX2NsZWFyX2NhbmNlbCc7XG4gICAgICAgIHRoaXMuY2FuY2VsUG9zaXRpb24gPSAncmlnaHQnO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIGV4aXQoKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJFc3RhIHNlZ3VybyBxdWUgZGVzZWEgc2FsaXI/XCIsXG4gICAgICAgICAgICB0aXRsZTogXCJRdWllcm8gc2FsaXJcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTaVwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxuICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIlxuICAgICAgICB9O1xuICAgICAgICBjb25maXJtKG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUxvZ2luKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveUxvZ2luKCkge1xuICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyLWRhdGFcIiwgbnVsbCk7XG4gICAgfVxuXG59XG4iXX0=