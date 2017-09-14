import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
  		// public loginComponent: LoginComponent,
  		// public signupCompnent: SignupComponent,
  		public authService: AuthService
  	) { }

  ngOnInit() {

  }

  onLogout() {
  	this.authService.logout();
  }

}
