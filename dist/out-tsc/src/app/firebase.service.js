"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var firebase = require("firebase");
var apikey_service_1 = require("./apikey.service");
var FirebaseService = (function () {
    function FirebaseService(apiKeyService) {
        this.apiKeyService = apiKeyService;
        this.firebaseInitialize = false;
        this.firebaseService = new Subject_1.Subject();
    }
    FirebaseService.prototype.startFirebase = function () {
        console.log("calling start firebase");
        if (!this.firebaseInitialize) {
            console.log("Initializing firebase");
            this.firebaseInitialize = true;
            firebase.initializeApp({
                apiKey: process.env.firebaseApiKey || this.apiKeyService.firebaseApiKey,
                authDomain: process.env.firebaseAuthDomain || this.apiKeyService.firebaseAuthDomain
            });
        }
        return this.firebaseService.asObservable();
    };
    return FirebaseService;
}());
FirebaseService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
FirebaseService.ctorParameters = function () { return [
    { type: apikey_service_1.ApiKeyService, },
]; };
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map