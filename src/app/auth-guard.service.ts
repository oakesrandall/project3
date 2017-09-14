import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Injectable()
export class AuthGuard implements CanActivate  {

	constructor(
		private authService: AuthService,
		// private loginComponent: LoginComponent,
		// private signupComponent: SignupComponent
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.authService.isAuthenticated();
	}
}