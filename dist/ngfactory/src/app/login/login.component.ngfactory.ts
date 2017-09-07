/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './login.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '../../../../../src/app/login/login.component';
import * as i4 from '@angular/forms';
import * as i5 from '../../../../../src/app/firebase.service';
import * as i6 from '../../../../../src/app/auth.service';
import * as i7 from '../../../../../src/app/data-storage.service';
import * as i8 from '../../../../../src/app/apikey.service';
import * as i9 from '@angular/router';
const styles_LoginComponent:any[] = [i0.styles];
export const RenderType_LoginComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_LoginComponent,data:{}});
function View_LoginComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n\n	']))],(null as any),(null as any));
}
export function View_LoginComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),55,'div',[['class',
      'container']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n\n	'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          49,'div',[['class','row loginPage']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),i1.ɵdid(278528,(null as any),0,i2.NgStyle,
          [i1.KeyValueDiffers,i1.ElementRef,i1.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),
      i1.ɵpod({'background-image':0}),(_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),44,'div',[['class','col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n			'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          41,'form',[['novalidate','']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'ngSubmit'],[(null as any),'submit'],
              [(null as any),'reset']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.LoginComponent = _v.component;
            if (('submit' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,10).onSubmit($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,10).onReset()) !== false);
              ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
              const pd_2:any = ((<any>_co.onLogin(i1.ɵnov(_v,10))) !== false);
              ad = (pd_2 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i4.ɵbf,([] as any[]),
          (null as any),(null as any)),i1.ɵdid(16384,[['form',4]],0,i4.NgForm,[[8,
          (null as any)],[8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i1.ɵprd(2048,
          (null as any),i4.ControlContainer,(null as any),[i4.NgForm]),i1.ɵdid(16384,
          (null as any),0,i4.NgControlStatusGroup,[i4.ControlContainer],(null as any),
          (null as any)),(_l()(),i1.ɵted((null as any),['\n				'])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),13,'div',[['class','form-group']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n					'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'label',[['for',
          'email']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['Email'])),(_l()(),i1.ɵted((null as any),['\n					'])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),7,'input',[['class','form-control'],
          ['id','email'],['name','email'],['ngModel',''],['placeholder','Enter a valid email'],
          ['required',''],['type','email']],[[1,'required',0],[2,'ng-untouched',(null as any)],
          [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
              (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
          [2,'ng-pending',(null as any)]],[[(null as any),'input'],[(null as any),
          'blur'],[(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,20)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,20).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,20)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,20)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i4.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i4.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i4.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i1.ɵprd(1024,(null as any),i4.NG_VALIDATORS,
          (p0_0:any) => {
            return [p0_0];
          },[i4.RequiredValidator]),i1.ɵprd(1024,(null as any),i4.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i4.DefaultValueAccessor]),i1.ɵdid(671744,(null as any),0,i4.NgModel,[[2,
          i4.ControlContainer],[2,i4.NG_VALIDATORS],[8,(null as any)],[2,i4.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},(null as any)),i1.ɵprd(2048,(null as any),
          i4.NgControl,(null as any),[i4.NgModel]),i1.ɵdid(16384,(null as any),0,i4.NgControlStatus,
          [i4.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n				'])),(_l()(),i1.ɵted((null as any),['\n				'])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),16,'div',[['class','form-group']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n					'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'label',[['for',
          'password']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['Password'])),(_l()(),i1.ɵted((null as any),['\n					'])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),7,'input',[['class','form-control'],
          ['id','password'],['name','password'],['ngModel',''],['placeholder','Enter a password'],
          ['required',''],['type','password']],[[8,'minLength',0],[1,'required',0],
          [2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',
              (null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],
          [2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],[[(null as any),
          'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
          'compositionend']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('input' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,35)._handleInput($event.target.value)) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,35).onTouched()) !== false);
          ad = (pd_1 && ad);
        }
        if (('compositionstart' === en)) {
          const pd_2:any = ((<any>i1.ɵnov(_v,35)._compositionStart()) !== false);
          ad = (pd_2 && ad);
        }
        if (('compositionend' === en)) {
          const pd_3:any = ((<any>i1.ɵnov(_v,35)._compositionEnd($event.target.value)) !== false);
          ad = (pd_3 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i4.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i4.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i4.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i1.ɵprd(1024,(null as any),i4.NG_VALIDATORS,
          (p0_0:any) => {
            return [p0_0];
          },[i4.RequiredValidator]),i1.ɵprd(1024,(null as any),i4.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i4.DefaultValueAccessor]),i1.ɵdid(671744,(null as any),0,i4.NgModel,[[2,
          i4.ControlContainer],[2,i4.NG_VALIDATORS],[8,(null as any)],[2,i4.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},(null as any)),i1.ɵprd(2048,(null as any),
          i4.NgControl,(null as any),[i4.NgModel]),i1.ɵdid(16384,(null as any),0,i4.NgControlStatus,
          [i4.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n					'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),[' *Password must be at least 6 characters'])),
      (_l()(),i1.ɵted((null as any),['\n				'])),(_l()(),i1.ɵted((null as any),['\n				'])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),1,'button',[['class','btn btn-success'],
          ['type','submit']],[[8,'disabled',0]],(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['Sign in'])),(_l()(),i1.ɵted((null as any),
          ['\n			'])),(_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵted((null as any),
          ['\n	'])),(_l()(),i1.ɵted((null as any),['\n	'])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_LoginComponent_1)),i1.ɵdid(16384,
          (null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i3.LoginComponent = _v.component;
    const currVal_0:any = _ck(_v,4,0,(('url(' + _co.photo) + ')'));
    _ck(_v,3,0,currVal_0);
    const currVal_16:any = '';
    _ck(_v,21,0,currVal_16);
    const currVal_17:any = 'email';
    const currVal_18:any = '';
    _ck(_v,24,0,currVal_17,currVal_18);
    const currVal_28:any = '';
    _ck(_v,36,0,currVal_28);
    const currVal_29:any = 'password';
    const currVal_30:any = '';
    _ck(_v,39,0,currVal_29,currVal_30);
    const currVal_32:any = _co.firebaseError;
    _ck(_v,54,0,currVal_32);
  },(_ck,_v) => {
    const currVal_1:any = i1.ɵnov(_v,12).ngClassUntouched;
    const currVal_2:any = i1.ɵnov(_v,12).ngClassTouched;
    const currVal_3:any = i1.ɵnov(_v,12).ngClassPristine;
    const currVal_4:any = i1.ɵnov(_v,12).ngClassDirty;
    const currVal_5:any = i1.ɵnov(_v,12).ngClassValid;
    const currVal_6:any = i1.ɵnov(_v,12).ngClassInvalid;
    const currVal_7:any = i1.ɵnov(_v,12).ngClassPending;
    _ck(_v,8,0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7);
    const currVal_8:any = (i1.ɵnov(_v,21).required? '': (null as any));
    const currVal_9:any = i1.ɵnov(_v,26).ngClassUntouched;
    const currVal_10:any = i1.ɵnov(_v,26).ngClassTouched;
    const currVal_11:any = i1.ɵnov(_v,26).ngClassPristine;
    const currVal_12:any = i1.ɵnov(_v,26).ngClassDirty;
    const currVal_13:any = i1.ɵnov(_v,26).ngClassValid;
    const currVal_14:any = i1.ɵnov(_v,26).ngClassInvalid;
    const currVal_15:any = i1.ɵnov(_v,26).ngClassPending;
    _ck(_v,19,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,
        currVal_15);
    const currVal_19:any = 6;
    const currVal_20:any = (i1.ɵnov(_v,36).required? '': (null as any));
    const currVal_21:any = i1.ɵnov(_v,41).ngClassUntouched;
    const currVal_22:any = i1.ɵnov(_v,41).ngClassTouched;
    const currVal_23:any = i1.ɵnov(_v,41).ngClassPristine;
    const currVal_24:any = i1.ɵnov(_v,41).ngClassDirty;
    const currVal_25:any = i1.ɵnov(_v,41).ngClassValid;
    const currVal_26:any = i1.ɵnov(_v,41).ngClassInvalid;
    const currVal_27:any = i1.ɵnov(_v,41).ngClassPending;
    _ck(_v,34,0,currVal_19,currVal_20,currVal_21,currVal_22,currVal_23,currVal_24,
        currVal_25,currVal_26,currVal_27);
    const currVal_31:boolean = !i1.ɵnov(_v,10).valid;
    _ck(_v,47,0,currVal_31);
  });
}
export function View_LoginComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-login',([] as any[]),
      (null as any),(null as any),(null as any),View_LoginComponent_0,RenderType_LoginComponent)),
      i1.ɵdid(114688,(null as any),0,i3.LoginComponent,[i5.FirebaseService,i6.AuthService,
          i7.DataService,i8.ApiKeyService,i9.Router],(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,1,0);
      },(null as any));
}
export const LoginComponentNgFactory:i1.ComponentFactory<i3.LoginComponent> = i1.ɵccf('app-login',
    i3.LoginComponent,View_LoginComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2FsZXhsaS9Eb2N1bWVudHMvR2VuZXJhbCBBc3NlbWJseS93ZGktd29yay9Qcm9qZWN0cy9wcm9qZWN0My9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9hbGV4bGkvRG9jdW1lbnRzL0dlbmVyYWwgQXNzZW1ibHkvd2RpLXdvcmsvUHJvamVjdHMvcHJvamVjdDMvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9hbGV4bGkvRG9jdW1lbnRzL0dlbmVyYWwgQXNzZW1ibHkvd2RpLXdvcmsvUHJvamVjdHMvcHJvamVjdDMvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2FsZXhsaS9Eb2N1bWVudHMvR2VuZXJhbCBBc3NlbWJseS93ZGktd29yay9Qcm9qZWN0cy9wcm9qZWN0My9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cy5Mb2dpbkNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblxuXHQ8ZGl2IGNsYXNzPVwicm93IGxvZ2luUGFnZVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIHBob3RvICsgJyknfVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEwIGNvbC1tZC04IGNvbC1zbS1vZmZzZXQtMSBjb2wtbWQtb2Zmc2V0LTJcIj5cblx0XHRcdDxmb3JtIChuZ1N1Ym1pdCk9XCJvbkxvZ2luKGZvcm0pXCIgI2Zvcm09XCJuZ0Zvcm1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHZhbGlkIGVtYWlsXCIgbmdNb2RlbCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGEgcGFzc3dvcmRcIiBuZ01vZGVsIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRbbWluTGVuZ3RoXT1cIjZcIiByZXF1aXJlZD5cblx0XHRcdFx0XHQ8cD4gKlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWRcIj5TaWduIGluPC9idXR0b24+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8ZGl2ICpuZ0lmPVwiZmlyZWJhc2VFcnJvclwiPlxuXG5cdDwvZGl2PlxuPC9kaXY+IiwiPGFwcC1sb2dpbj48L2FwcC1sb2dpbj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ21CQztNQUFBLHdFQUEyQjthQUFBOzs7b0JBbkI1QjtNQUFBO01BQXVCLDBDQUV0QjtVQUFBO1VBQUEscUNBQUE7VUFBQTthQUEyQix5QkFBdUQseUNBQ2pGO2lCQUFBO2NBQUE7TUFBMEUsMENBQ3pFO1VBQUE7Y0FBQTtjQUFBO2tCQUFBO2NBQUE7WUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFNO2NBQUE7Y0FBQTtZQUFBO1lBQU47VUFBQSx1Q0FBQTtVQUFBLG9DQUFBO1VBQUEsOEVBQUE7VUFBQSxvRUFBQTtVQUFBO1VBQUEsZUFBZ0QsMkNBQy9DO1VBQUE7VUFBQSwwREFBd0I7VUFBQSxjQUN2QjtVQUFBO01BQW1CLDBDQUFhO01BQ2hDO1VBQUE7VUFBQTtVQUFBO2NBQUE7VUFBQTtVQUFBO1VBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7VUFBQSxnREFBQTtVQUFBO1lBQUE7VUFBQTtVQUFBO1lBQUE7VUFBQSxvQ0FBQTs2QkFBQTtVQUFBLDBEQUFBO3VCQUFBLG1DQUFBO1VBQUEsNENBQXFIO1VBQUEsYUFDaEgsMkNBQ047VUFBQTtVQUFBLDBEQUF3QjtVQUFBLGNBQ3ZCO1VBQUE7TUFBc0IsNkNBQWdCO01BQ3RDO1VBQUE7VUFBQTtVQUFBO2NBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7VUFBQSxnREFBQTtVQUFBO1lBQUE7VUFBQTtVQUFBO1lBQUE7VUFBQSxvQ0FBQTs2QkFBQTtVQUFBLDBEQUFBO3VCQUFBLG1DQUFBO1VBQUEsNENBQ3lCO1VBQUEsY0FDekI7VUFBQTtNQUFHO01BQTRDLDJDQUMxQztNQUNOO1VBQUE7VUFBQSxnQkFBdUUsNENBQWdCO1VBQUEsWUFDakYseUNBQ0Y7VUFBQSxVQUNELHdDQUNOO1VBQUEsMkVBQUE7VUFBQTtVQUFBLGVBRU07O0lBbkJxQjtJQUEzQixXQUEyQixTQUEzQjtJQUtnSDtJQUE1RyxZQUE0RyxVQUE1RztJQUErQjtJQUFnRDtJQUEvRSxZQUErQixXQUFnRCxVQUEvRTtJQUtnQjtJQURoQixZQUNnQixVQURoQjtJQUFxQztJQUErQztJQUFwRixZQUFxQyxXQUErQyxVQUFwRjtJQVFDO0lBQUwsWUFBSyxVQUFMOztJQWZFO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsV0FBQSxxRUFBQTtJQUdFO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBLFVBQUE7UUFBQSxVQUFBO0lBS0E7SUFEQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsWUFDQSxXQURBLFdBQUE7UUFBQSxnQ0FBQTtJQUk2QztJQUE5QyxZQUE4QyxVQUE5Qzs7OztvQkNmSjtNQUFBO2FBQUE7bURBQUE7O1FBQUE7Ozs7In0=
