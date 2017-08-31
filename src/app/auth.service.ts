import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data-storage.service';

//import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {
	//user: Observable<firebase.User>;
	token: string;
	uid: string;
	newUser = <any>{};
	constructor(
		private router: Router,
		private dataService: DataService
	) {}

	signupUser(email: string, password: string) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(response => {
				console.log(response.uid);
				this.uid = response.uid;
				console.log(this.uid);
				//this.newUser = response.email;
				this.dataService.storeUser(this.uid);
				this.router.navigate(['/home']);
				firebase.auth().currentUser.getToken()
					.then(
						(token: string) => this.token = token)
			})
			.catch(
				error => console.log(error)
			)

	}

	loginUser(email: string, password: string) {
		console.log('logging in user');

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(
				response => {
					// console.log(response);
					// console.log(response.uid);
					this.uid = response.uid;
					console.log(this.uid);
					email = response.email;
					this.dataService.getUser(this.uid);
					console.log(response.email);
					this.router.navigate(['/home']);
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

			
			return this.token;
	}

	isAuthenticated() {
		return this.token != null;
	}

	// logout 
	logout() {
		firebase.auth().signOut();
		this.router.navigate(['']);
		this.token = null;
	}
}