"use strict";
// access database on backend
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    DataService.prototype.storeUser = function (email) {
        console.log("sending user data to backend");
        return this.http.post(this.baseUrl + "/api/users/", email);
    };
    //${uid}
    DataService.prototype.getUser = function (email) {
        console.log("the user id is" + email);
        console.log("sending user data to backend");
        return this.http.get(this.baseUrl + "/api/users/" + email);
    };
    DataService.prototype.storeFavorites = function (newFavorite) {
        console.log("******new favorite added");
        console.log(newFavorite);
    };
    return DataService;
}());
DataService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
DataService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.DataService = DataService;
//# sourceMappingURL=data-storage.service.js.map