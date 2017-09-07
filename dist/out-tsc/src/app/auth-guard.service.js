"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    return AuthGuard;
}());
AuthGuard.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AuthGuard.ctorParameters = function () { return [
    { type: auth_service_1.AuthService, },
]; };
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.service.js.map