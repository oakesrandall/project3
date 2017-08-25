import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //signupForm: FormGroup;

  constructor(
      private authService: AuthService
    ) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    
    console.log("onSignup clicked");
  	const email = form.value.email;
  	const password = form.value.password;
    console.log(email);
    console.log(password);
    this.authService.signupUser(email, password);
  }

  // initForm() {
  //   let newUsername = '';
  //   let newPassword = '';

  //   this.signupForm = new FormGroup({
  //     'username': new FormControl(newUsername),
  //     'password': new FormControl(newPassword)
  //   })

  // }

}
