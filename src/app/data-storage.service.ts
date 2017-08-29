// access database on backend

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class DataService {

	baseUrl = 'http://localhost:3000';

	constructor(private http: Http) { }

	storeUser(newUser) {
		this.http.post(`${this.baseUrl}/api/users/`, newUser);

	}
}