"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./app.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("./header/header.component.ngfactory");
var i3 = require("../../../../src/app/header/header.component");
var i4 = require("../../../../src/app/auth.service");
var i5 = require("@angular/router");
var i6 = require("../../../../src/app/app.component");
var i7 = require("../../../../src/app/apikey.service");
var i8 = require("../../../../src/app/data-storage.service");
var styles_AppComponent = [i0.styles];
exports.RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent,
    data: {} });
function View_AppComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 1, 'app-header', [], null, null, null, i2.View_HeaderComponent_0, i2.RenderType_HeaderComponent)), i1.ɵdid(114688, null, 0, i3.HeaderComponent, [i4.AuthService], null, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
        i1.ɵdid(212992, null, 0, i5.RouterOutlet, [i5.ChildrenOutletContexts, i1.ViewContainerRef,
            i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵted(null, ['\n\n\n\n\n\n\n\n']))], function (_ck, _v) {
        _ck(_v, 2, 0);
        _ck(_v, 5, 0);
    }, null);
}
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-root', [], null, null, null, View_AppComponent_0, exports.RenderType_AppComponent)),
        i1.ɵdid(114688, null, 0, i6.AppComponent, [i7.ApiKeyService, i8.DataService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
exports.AppComponentNgFactory = i1.ɵccf('app-root', i6.AppComponent, View_AppComponent_Host_0, {}, {}, []);
//# sourceMappingURL=app.component.ngfactory.js.map