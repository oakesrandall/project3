"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../auth.service");
var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            },] },
];
/** @nocollapse */
HeaderComponent.ctorParameters = function () { return [
    { type: auth_service_1.AuthService, },
]; };
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map