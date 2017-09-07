"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http"); //FORGOT
var testing_2 = require("@angular/router/testing"); //FORGOT
var favorite_item_component_1 = require("./favorite-item.component");
describe('FavoriteItemComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [favorite_item_component_1.FavoriteItemComponent],
            imports: [http_1.HttpModule, testing_2.RouterTestingModule] // FORGET
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(favorite_item_component_1.FavoriteItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=favorite-item.component.spec.js.map