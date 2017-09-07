"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http"); //FORGOT
var testing_2 = require("@angular/router/testing"); //FORGOT
var about_component_1 = require("./about.component");
describe('AboutComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [about_component_1.AboutComponent],
            imports: [http_1.HttpModule, testing_2.RouterTestingModule] // FORGET
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(about_component_1.AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=about.component.spec.js.map