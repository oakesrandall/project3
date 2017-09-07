"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("firebase");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_storage_service_1 = require("./data-storage.service");
var http_1 = require("@angular/http");
//import { Observable } from 'rxjs/Observable';
var AuthService = (function () {
    function AuthService(http, router, dataService) {
        this.http = http;
        this.router = router;
        this.dataService = dataService;
        //user: Observable<firebase.User>;
        this.baseUrl = 'http://localhost:3000';
        // Create a new user
        this.newUser = {};
    }
    // Sign up new user with firebase
    AuthService.prototype.signupUser = function (email, password) {
        var _this = this;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.newUser = response.email;
            console.log("The new user is " + _this.newUser);
            // Make sure user is authenticated
            firebase.auth().currentUser.getToken()
                .then(function (token) { return _this.token = token; });
            // Then route to home page
            _this.router.navigate(['/home']);
        })
            .catch(function (error) {
            return error;
        });
    };
    AuthService.prototype.loginUser = function (email, password) {
        var _this = this;
        console.log('logging in user');
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            // console.log(response);
            // console.log(response.uid);
            _this.uid = response.uid;
            console.log(_this.uid);
            _this.email = response.email;
            console.log(response.email);
            //Get token for authorization
            firebase.auth().currentUser.getToken()
                .then(function (token) { return _this.token = token; });
            //route user to homepage
            _this.router.navigate(['/home']);
        })
            .catch(function (error) {
            return error;
        });
    };
    ;
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase.auth().currentUser.getToken()
            .then(function (token) { return _this.token = token; });
        // need to call data service to get user info
        console.log("calling get token");
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    // logout
    AuthService.prototype.logout = function () {
        firebase.auth().signOut();
        this.router.navigate(['']);
        this.token = null;
    };
    return AuthService;
}());
AuthService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AuthService.ctorParameters = function () { return [
    { type: http_1.Http, },
    { type: router_1.Router, },
    { type: data_storage_service_1.DataService, },
]; };
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map