"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../auth.service");
var data_storage_service_1 = require("../data-storage.service");
var apikey_service_1 = require("../apikey.service");
var firebase_service_1 = require("../firebase.service");
var SignupComponent = (function () {
    function SignupComponent(firebaseService, authService, dataService, apiKeyService) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.dataService = dataService;
        this.apiKeyService = apiKeyService;
        this.newUser = {};
        this.subscription = this.firebaseService.startFirebase().subscribe(function (message) {
            _this.message = message;
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.photo = "/assets/images/food-man-person-eating.jpg";
    };
    SignupComponent.prototype.onSignup = function (newUser) {
        console.log("the new user is " + newUser);
        var email = newUser.email;
        var password = newUser.password;
        console.log(email);
        console.log(password);
        this.authService.signupUser(email, password);
        this.dataService.storeUser(email)
            .subscribe(function (response) {
            console.log("The json response is " + response.json());
        });
    };
    return SignupComponent;
}());
SignupComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            },] },
];
/** @nocollapse */
SignupComponent.ctorParameters = function () { return [
    { type: firebase_service_1.FirebaseService, },
    { type: auth_service_1.AuthService, },
    { type: data_storage_service_1.DataService, },
    { type: apikey_service_1.ApiKeyService, },
]; };
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map