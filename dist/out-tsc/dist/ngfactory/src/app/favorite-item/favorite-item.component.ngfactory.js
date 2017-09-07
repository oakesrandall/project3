"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./favorite-item.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/router");
var i3 = require("@angular/common");
var i4 = require("../../../../../src/app/favorite-item/favorite-item.component");
var styles_FavoriteItemComponent = [i0.styles];
exports.RenderType_FavoriteItemComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_FavoriteItemComponent, data: {} });
function View_FavoriteItemComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 20, 'a', [['class',
                'list-group-item clearfix'], ['routerLinkActive', 'active'], ['style', 'cursor: pointer;']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(671744, [[2, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), i1.ɵpad(1), i1.ɵdid(1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0,
                'routerLinkActive'] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(null, ['\n	  '])), (_l()(), i1.ɵeld(0, null, null, 11, 'div', [['class', 'pull-left']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	    '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'h4', [['class', 'list-group-item-heading']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['', ''])), (_l()(), i1.ɵted(null, ['\n	    '])),
        (_l()(), i1.ɵted(null, ['\n	    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [['class', 'list-group-item-text']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ''])), (_l()(), i1.ɵted(null, ['\n	    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [['class', 'list-group-item-text']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ''])), (_l()(), i1.ɵted(null, ['\n	  '])), (_l()(), i1.ɵted(null, ['\n	  '])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _ck(_v, 2, 0, _co.index);
        _ck(_v, 1, 0, currVal_2);
        var currVal_3 = 'active';
        _ck(_v, 3, 0, currVal_3);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵnov(_v, 1).target;
        var currVal_1 = i1.ɵnov(_v, 1).href;
        _ck(_v, 0, 0, currVal_0, currVal_1);
        var currVal_4 = _co.favorite.restaurantName;
        _ck(_v, 10, 0, currVal_4);
        var currVal_5 = _co.favorite.address;
        _ck(_v, 14, 0, currVal_5);
        var currVal_6 = _co.favorite.website;
        _ck(_v, 17, 0, currVal_6);
    });
}
exports.View_FavoriteItemComponent_0 = View_FavoriteItemComponent_0;
function View_FavoriteItemComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-favorite-item', [], null, null, null, View_FavoriteItemComponent_0, exports.RenderType_FavoriteItemComponent)), i1.ɵdid(114688, null, 0, i4.FavoriteItemComponent, [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_FavoriteItemComponent_Host_0 = View_FavoriteItemComponent_Host_0;
exports.FavoriteItemComponentNgFactory = i1.ɵccf('app-favorite-item', i4.FavoriteItemComponent, View_FavoriteItemComponent_Host_0, { favorite: 'favorite',
    index: 'index' }, {}, []);
//# sourceMappingURL=favorite-item.component.ngfactory.js.map