"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var favorites_component_1 = require("../favorites/favorites.component");
var favoriteRoutes = [
    {
        path: 'favorites',
        component: favorites_component_1.FavoritesComponent,
    }
];
var FavoritesRoutingModule = (function () {
    function FavoritesRoutingModule() {
    }
    return FavoritesRoutingModule;
}());
FavoritesRoutingModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    router_1.RouterModule.forChild(favoriteRoutes)
                ],
                exports: [
                    router_1.RouterModule
                ]
            },] },
];
/** @nocollapse */
FavoritesRoutingModule.ctorParameters = function () { return []; };
exports.FavoritesRoutingModule = FavoritesRoutingModule;
//# sourceMappingURL=favorites-routing.module.js.map