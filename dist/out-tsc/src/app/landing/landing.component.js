"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../auth.service");
var router_1 = require("@angular/router");
var data_storage_service_1 = require("../data-storage.service");
var LandingComponent = (function () {
    function LandingComponent(authService, dataService, router) {
        this.authService = authService;
        this.dataService = dataService;
        this.router = router;
        this.newUser = {};
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.photo = "/assets/images/pexels-photo-265316.jpeg";
    };
    LandingComponent.prototype.signUp = function () {
        this.router.navigate(['/signup']);
    };
    LandingComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    return LandingComponent;
}());
LandingComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            },] },
];
/** @nocollapse */
LandingComponent.ctorParameters = function () { return [
    { type: auth_service_1.AuthService, },
    { type: data_storage_service_1.DataService, },
    { type: router_1.Router, },
]; };
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map