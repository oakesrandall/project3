"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var favorites_routing_module_1 = require("./favorites/favorites-routing.module");
var auth_service_1 = require("./auth.service");
var data_storage_service_1 = require("./data-storage.service");
var apikey_service_1 = require("./apikey.service");
var favorites_service_1 = require("./favorites.service");
var firebase_service_1 = require("./firebase.service");
var app_component_1 = require("./app.component");
var image_component_1 = require("./image/image.component");
var about_component_1 = require("./about/about.component");
var landing_component_1 = require("./landing/landing.component");
var favorites_component_1 = require("./favorites/favorites.component");
var favorite_item_component_1 = require("./favorite-item/favorite-item.component");
var signup_component_1 = require("./signup/signup.component");
var login_component_1 = require("./login/login.component");
var header_component_1 = require("./header/header.component");
var platform_browser_2 = require("@angular/platform-browser");
var MyHammerConfig = (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'swipe': { velocity: 0.4, threshold: 20 }
        };
        return _this;
    }
    return MyHammerConfig;
}(platform_browser_2.HammerGestureConfig));
exports.MyHammerConfig = MyHammerConfig;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    signup_component_1.SignupComponent,
                    login_component_1.LoginComponent,
                    app_component_1.AppComponent,
                    image_component_1.ImageComponent,
                    about_component_1.AboutComponent,
                    favorites_component_1.FavoritesComponent,
                    header_component_1.HeaderComponent,
                    landing_component_1.LandingComponent,
                    favorite_item_component_1.FavoriteItemComponent,
                ],
                imports: [
                    platform_browser_1.BrowserModule.withServerTransition({ appId: 'cli-universal-demo' }),
                    app_routing_module_1.AppRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpModule,
                    router_1.RouterModule,
                    favorites_routing_module_1.FavoritesRoutingModule,
                    forms_1.ReactiveFormsModule
                    // BrowserAnimationsModule
                ],
                providers: [
                    favorites_service_1.FavoritesService,
                    auth_service_1.AuthService,
                    apikey_service_1.ApiKeyService,
                    data_storage_service_1.DataService,
                    firebase_service_1.FirebaseService,
                    { provide: platform_browser_2.HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
                ],
                bootstrap: [app_component_1.AppComponent],
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map