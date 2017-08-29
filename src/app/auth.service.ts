import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {
	//user: Observable<firebase.User>;
	token: string;
	email: string;
	constructor(
		private router: Router) {}

	signupUser(email: string, password: string) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.catch(
				error => console.log(error)
			)
	}

	loginUser(email: string, password: string) {
		console.log('logging in user');

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(
				response => {
					email = response.email;

					console.log(response.email);
					this.router.navigate(['/']);
					firebase.auth().currentUser.getToken()
						.then(
							(token: string) => this.token = token)
			})
			.catch(
				error => console.log(error)
			);
		
	};

	getToken() {
		firebase.auth().currentUser.getToken()
			.then(
				(token: string) => this.token = token
			);
			// need to call data service to get user info
			this.router.navigate(['']);
			return this.token;
	}

	isAuthenticated() {
		return this.token != null;
	}

	// logout 
	logout() {
		firebase.auth().signOut();
		this.token = null;
	}
}