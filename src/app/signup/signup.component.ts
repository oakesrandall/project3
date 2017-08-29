import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data-storage.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  newUser = <any>{};

  constructor(
      private authService: AuthService,
      private dataService: DataService
   ) { }

  ngOnInit() {
  }

  onSignup(newUser) {
    
    console.log(newUser);
  	const email = newUser.email;
  	const password = newUser.password;
    console.log(email);
    console.log(password);
    //this.authService.signupUser(email, password);
    console.log(newUser);
    this.dataService.storeUser(newUser);
  }


}
