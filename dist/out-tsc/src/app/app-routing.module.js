"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var signup_component_1 = require("./signup/signup.component");
var image_component_1 = require("./image/image.component");
var landing_component_1 = require("./landing/landing.component");
var about_component_1 = require("./about/about.component");
var routes = [
    {
        path: '',
        component: landing_component_1.LandingComponent
    },
    {
        path: 'home',
        component: image_component_1.ImageComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [router_1.RouterModule.forRoot(routes)],
                exports: [router_1.RouterModule]
            },] },
];
/** @nocollapse */
AppRoutingModule.ctorParameters = function () { return []; };
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map