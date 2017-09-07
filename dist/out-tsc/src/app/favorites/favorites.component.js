"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../auth.service");
var router_1 = require("@angular/router");
var favorites_service_1 = require("../favorites.service");
var FavoritesComponent = (function () {
    function FavoritesComponent(favoriteService, authService, route, router) {
        this.favoriteService = favoriteService;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.favoriteService.favoritesChanged
            .subscribe(function (favorites) {
            _this.favorites = favorites;
        });
        this.favorites = this.favoriteService.getFavorites();
    };
    FavoritesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return FavoritesComponent;
}());
FavoritesComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-favorites',
                templateUrl: './favorites.component.html',
                styleUrls: ['./favorites.component.css']
            },] },
];
/** @nocollapse */
FavoritesComponent.ctorParameters = function () { return [
    { type: favorites_service_1.FavoritesService, },
    { type: auth_service_1.AuthService, },
    { type: router_1.ActivatedRoute, },
    { type: router_1.Router, },
]; };
exports.FavoritesComponent = FavoritesComponent;
//# sourceMappingURL=favorites.component.js.map