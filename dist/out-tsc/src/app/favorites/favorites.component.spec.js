"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http"); //FORGOT
var testing_2 = require("@angular/router/testing"); //FORGOT
var favorites_component_1 = require("./favorites.component");
describe('FavoritesComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [favorites_component_1.FavoritesComponent],
            imports: [http_1.HttpModule, testing_2.RouterTestingModule] // FORGET
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(favorites_component_1.FavoritesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=favorites.component.spec.js.map