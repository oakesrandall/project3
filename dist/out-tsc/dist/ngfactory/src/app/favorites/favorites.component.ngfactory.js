"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./favorites.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("../favorite-item/favorite-item.component.ngfactory");
var i3 = require("../../../../../src/app/favorite-item/favorite-item.component");
var i4 = require("@angular/common");
var i5 = require("../../../../../src/app/favorites/favorites.component");
var i6 = require("../../../../../src/app/favorites.service");
var i7 = require("../../../../../src/app/auth.service");
var i8 = require("@angular/router");
var styles_FavoritesComponent = [i0.styles];
exports.RenderType_FavoritesComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_FavoritesComponent, data: {} });
function View_FavoritesComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-favorite-item', [], null, null, null, i2.View_FavoriteItemComponent_0, i2.RenderType_FavoriteItemComponent)), i1.ɵdid(114688, null, 0, i3.FavoriteItemComponent, [], { favorite: [0, 'favorite'], index: [1, 'index'] }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;
        var currVal_1 = _v.context.index;
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, null);
}
function View_FavoritesComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 7, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(),
            i1.ɵeld(0, null, null, 4, 'div', [['class', 'col-xs-12']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FavoritesComponent_1)), i1.ɵdid(802816, null, 0, i4.NgForOf, [i1.ViewContainerRef,
            i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(),
            i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.favorites;
        _ck(_v, 6, 0, currVal_0);
    }, null);
}
exports.View_FavoritesComponent_0 = View_FavoritesComponent_0;
function View_FavoritesComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-favorites', [], null, null, null, View_FavoritesComponent_0, exports.RenderType_FavoritesComponent)), i1.ɵdid(245760, null, 0, i5.FavoritesComponent, [i6.FavoritesService, i7.AuthService, i8.ActivatedRoute, i8.Router], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_FavoritesComponent_Host_0 = View_FavoritesComponent_Host_0;
exports.FavoritesComponentNgFactory = i1.ɵccf('app-favorites', i5.FavoritesComponent, View_FavoritesComponent_Host_0, {}, {}, []);
//# sourceMappingURL=favorites.component.ngfactory.js.map