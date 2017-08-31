import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import  { DataService } from '../data-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  photo: string;

  constructor(private authService: AuthService,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.photo = "/assets/images/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg";
  	
  }

  onLogin(form: NgForm) {
  	console.log("onLogin clicked");
    const email = form.value.email;
    console.log(email);
    const password = form.value.password;
    console.log(password);
    this.authService.loginUser(email, password);
  }

}
