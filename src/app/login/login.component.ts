import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  	
  }

  onLogin(form: NgForm) {
  	console.log("onLogin clicked");
    const email = form.value.email;
    const password = form.value.password;
    this.authService.loginUser(email, password);
  }

}
