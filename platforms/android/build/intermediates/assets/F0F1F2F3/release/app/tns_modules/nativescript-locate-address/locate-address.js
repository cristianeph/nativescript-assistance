"use strict";
var application = require("application");
// ignore TS error
var com;
var LocateAddress = (function () {
    function LocateAddress() {
    }
    LocateAddress.prototype.isPackageInstalled = function () {
        try {
            var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse("http://maps.google.com/maps"));
            var pm = com.tns.NativeScriptApplication.getInstance().getPackageManager();
            return intent.resolveActivity(pm) != null;
        }
        catch (e) {
        }
        return true;
    };
    LocateAddress.prototype.available = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.isPackageInstalled());
        });
    };
    ;
    LocateAddress.prototype.locate = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.isPackageInstalled()) {
                reject("Maps app not installed, use 'available' before using 'navigate'.");
                return;
            }
            var addr = "";
            if (options.address) {
                addr = options.address;
            }
            else if (options.lat && options.lng) {
                addr = options.lat + "," + options.lng;
            }
            var url = "geo:0,0?q=" + (options.address ? encodeURIComponent(addr) : addr);
            var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(url));
            application.android.currentContext.startActivityForResult(intent, 0);
            resolve();
        });
    };
    return LocateAddress;
}());
exports.LocateAddress = LocateAddress;
//# sourceMappingURL=locate-address.js.map