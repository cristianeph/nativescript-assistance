"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        setTimeout(function () {
            var firebase = require("nativescript-plugin-firebase");
            firebase.init({
                onPushTokenReceivedCallback: function (token) {
                    console.log("FIREBASE => Token => " + token);
                },
                onMessageReceivedCallback: function (message) {
                    console.log("FIREBASE => Message => ", JSON.stringify(message));
                    /*dialogs.alert({
                        title: "Push message: " + (message.title !== undefined ? message.title : ""),
                        message: JSON.stringify(message),
                        okButtonText: "W00t!"
                    });*/
                },
                persist: false,
                onAuthStateChanged: function (data) {
                    console.log(JSON.stringify(data));
                    /*if (data.loggedIn) {
                        BackendService.token = data.user.uid;
                    }
                    else {
                        BackendService.token = "";
                    }*/
                }
            }).then(function (instance) {
                console.log("FIREBASE => init done");
            }, function (error) {
                console.log("FIREBASE => init error => " + error);
            });
        }, 3000);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFPeEM7SUFDSTtRQUNJLFVBQVUsQ0FBQztZQUNQLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3ZELFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsMkJBQTJCLEVBQUUsVUFBUyxLQUFLO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUNELHlCQUF5QixFQUFFLFVBQVMsT0FBTztvQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2hFOzs7O3lCQUlLO2dCQUNULENBQUM7Z0JBQ0QsT0FBTyxFQUFFLEtBQUs7Z0JBQ2Qsa0JBQWtCLEVBQUUsVUFBQyxJQUFTO29CQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtvQkFDakM7Ozs7O3VCQUtHO2dCQUNQLENBQUM7YUFDSixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsUUFBUTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDekMsQ0FBQyxFQUNELFVBQVUsS0FBSztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQW5DUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBRXBDLENBQUM7O09BQ1csWUFBWSxDQW9DeEI7SUFBRCxtQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG5cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuICAgICAgICAgICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgICAgICAgICAgICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiBmdW5jdGlvbih0b2tlbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJUkVCQVNFID0+IFRva2VuID0+IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJUkVCQVNFID0+IE1lc3NhZ2UgPT4gXCIsIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICAgICAgLypkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlB1c2ggbWVzc2FnZTogXCIgKyAobWVzc2FnZS50aXRsZSAhPT0gdW5kZWZpbmVkID8gbWVzc2FnZS50aXRsZSA6IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiVzAwdCFcIlxuICAgICAgICAgICAgICAgICAgICB9KTsqL1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyc2lzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICAvKmlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IGRhdGEudXNlci51aWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklSRUJBU0UgPT4gaW5pdCBkb25lXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklSRUJBU0UgPT4gaW5pdCBlcnJvciA9PiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG59XG4iXX0=