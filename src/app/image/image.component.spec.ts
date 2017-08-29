import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http'; //FORGOT
import { RouterTestingModule } from '@angular/router/testing' //FORGOT

import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageComponent ],
      imports: [HttpModule, RouterTestingModule] // FORGET
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
