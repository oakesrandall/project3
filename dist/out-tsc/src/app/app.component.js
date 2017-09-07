"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var apikey_service_1 = require("./apikey.service");
var data_storage_service_1 = require("./data-storage.service");
//import { AngularFireModule } from 'angularfire2';
var AppComponent = (function () {
    function AppComponent(apiKeyService, dataService) {
        this.apiKeyService = apiKeyService;
        this.dataService = dataService;
    }
    AppComponent.prototype.getLocation = function () {
        if (navigator.geolocation) {
            console.log("geolocation services available");
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
        else {
            console.log("no geolocation services");
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        //this.getLocation()
    };
    AppComponent.prototype.showPosition = function (position) {
        console.log(position);
        //var lat = position.coords.latitude;
    };
    return AppComponent;
}());
AppComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = function () { return [
    { type: apikey_service_1.ApiKeyService, },
    { type: data_storage_service_1.DataService, },
]; };
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map