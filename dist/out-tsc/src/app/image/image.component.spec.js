"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http"); //FORGOT
var testing_2 = require("@angular/router/testing"); //FORGOT
var image_component_1 = require("./image.component");
describe('ImageComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [image_component_1.ImageComponent],
            imports: [http_1.HttpModule, testing_2.RouterTestingModule] // FORGET
        })
            .compileComponents();
    }));
    // 
    // beforeEach(() => {
    //   fixture = TestBed.createComponent(ImageComponent);
    //   component = fixture.componentInstance;
    //   fixture.detectChanges();
    // });
    //
    // it('should be created', () => {
    //   expect(component).toBeTruthy();
    // });
});
//# sourceMappingURL=image.component.spec.js.map