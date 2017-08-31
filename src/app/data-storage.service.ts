// access database on backend

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DataService {

	baseUrl = 'http://localhost:3000';
	url: string;

	storeUser(email) {
		console.log("sending user data to backend");
		
		this.http.post(`${this.baseUrl}/users/`, email);

	}
	//${uid}
	getUser(uid) {
		console.log("the user id is" + uid);
		console.log("sending user data to backend");

		this.http.get(`${this.baseUrl}/api/users/${uid}`);
	}

	constructor(private http: Http) { }
}