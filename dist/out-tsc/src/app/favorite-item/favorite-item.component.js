"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FavoriteItemComponent = (function () {
    function FavoriteItemComponent() {
    }
    FavoriteItemComponent.prototype.ngOnInit = function () {
    };
    return FavoriteItemComponent;
}());
FavoriteItemComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-favorite-item',
                templateUrl: './favorite-item.component.html',
                styleUrls: ['./favorite-item.component.css']
            },] },
];
/** @nocollapse */
FavoriteItemComponent.ctorParameters = function () { return []; };
FavoriteItemComponent.propDecorators = {
    'favorite': [{ type: core_1.Input },],
    'index': [{ type: core_1.Input },],
};
exports.FavoriteItemComponent = FavoriteItemComponent;
//# sourceMappingURL=favorite-item.component.js.map