"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../auth.service");
var data_storage_service_1 = require("../data-storage.service");
var router_1 = require("@angular/router");
var apikey_service_1 = require("../apikey.service");
var firebase_service_1 = require("../firebase.service");
var LoginComponent = (function () {
    function LoginComponent(firebaseService, authService, dataService, apiKeyService, router) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.dataService = dataService;
        this.apiKeyService = apiKeyService;
        this.router = router;
        this.newUser = {};
        this.loggedInUser = {};
        this.subscription = this.firebaseService.startFirebase().subscribe(function (message) {
            _this.message = message;
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.photo = "/assets/images/suit-business-man-business-man-37547.jpeg";
    };
    LoginComponent.prototype.onLogin = function (form) {
        console.log("onLogin clicked");
        var email = form.value.email;
        console.log(email);
        var password = form.value.password;
        console.log(password);
        this.newUser = { email: email, password: password };
        this.authService.loginUser(email, password);
        this.dataService.getUser(email)
            .subscribe((function (response) {
            console.log("The json response is " + response.json());
        }));
    };
    return LoginComponent;
}());
LoginComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            },] },
];
/** @nocollapse */
LoginComponent.ctorParameters = function () { return [
    { type: firebase_service_1.FirebaseService, },
    { type: auth_service_1.AuthService, },
    { type: data_storage_service_1.DataService, },
    { type: apikey_service_1.ApiKeyService, },
    { type: router_1.Router, },
]; };
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map