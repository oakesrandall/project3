"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var favorites_model_1 = require("./favorites.model");
var FavoritesService = (function () {
    function FavoritesService() {
        //baseUrl = 'http://localhost:3000';
        this.baseUrl = 'https://protected-basin-12594.herokuapp.com';
        this.favoritesChanged = new Subject_1.Subject();
        this.favorites = [
            new favorites_model_1.Favorite('Linger', '2030 W 30th Ave, Denver, CO 80211', 'places.singleplatform.com'),
            new favorites_model_1.Favorite('Linger', '2030 W 30th Ave, Denver, CO 80211', 'places.singleplatform.com')
        ];
    }
    FavoritesService.prototype.getFavorites = function () {
        return this.favorites.slice();
    };
    FavoritesService.prototype.addFavorites = function (favorite) {
        this.favorites.push(favorite);
        this.favoritesChanged.next(this.favorites.slice());
    };
    FavoritesService.prototype.deleteFavorites = function (index) {
        this.favorites.splice(index, 1);
        this.favoritesChanged.next(this.favorites.slice());
    };
    return FavoritesService;
}());
FavoritesService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
FavoritesService.ctorParameters = function () { return []; };
exports.FavoritesService = FavoritesService;
//# sourceMappingURL=favorites.service.js.map