"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./image.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("../../../../../src/app/image/image.component");
var i3 = require("@angular/http");
var i4 = require("@angular/router");
var i5 = require("../../../../../src/app/favorites.service");
var i6 = require("../../../../../src/app/data-storage.service");
var styles_ImageComponent = [i0.styles];
exports.RenderType_ImageComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_ImageComponent, data: {} });
function View_ImageComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 36, 'div', [['class',
                'container swipe-box']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['class', 'swipe-box']], null, [[null,
                'swipeleft'], [null, 'swiperight']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('swipeleft' === en)) {
                var pd_0 = (_co.swipe($event.type) !== false);
                ad = (pd_0 && ad);
            }
            if (('swiperight' === en)) {
                var pd_1 = (_co.swipe($event.type) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(),
            i1.ɵeld(0, null, null, 6, 'div', [['class', 'row justify-content-center']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵeld(0, null, null, 3, 'div', [['class', 'col-sm-12']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt',
                ''], ['class', 'center-block']], [[8, 'src', 4]], null, null, null, null)), (_l()(), i1.ɵted(null, ['\n      '])),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n  '])),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 22, 'div', [['class', 'row justify-content-center']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 19, 'div', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'col-sm-4']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.clickNo() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['\n        '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'center-block hidden-xs btn-lg btn-primary']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['No, thanks'])), (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'col-sm-4']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.notFood() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['\n        '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'center-block hidden-xs btn-lg btn-secondary']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['That\'s not food'])), (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'col-sm-4']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.clickYes() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['\n        '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'center-block hidden-xs btn-lg btn-primary']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['I\'d eat that'])), (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵinlineInterpolate(1, '', _co.currentImage, '');
        _ck(_v, 8, 0, currVal_0);
    });
}
exports.View_ImageComponent_0 = View_ImageComponent_0;
function View_ImageComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-image', [], null, null, null, View_ImageComponent_0, exports.RenderType_ImageComponent)),
        i1.ɵdid(114688, null, 0, i2.ImageComponent, [i3.Http, i4.ActivatedRoute,
            i4.Router, i5.FavoritesService, i6.DataService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_ImageComponent_Host_0 = View_ImageComponent_Host_0;
exports.ImageComponentNgFactory = i1.ɵccf('app-image', i2.ImageComponent, View_ImageComponent_Host_0, {}, {}, []);
//# sourceMappingURL=image.component.ngfactory.js.map