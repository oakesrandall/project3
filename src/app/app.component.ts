import { Component } from '@angular/core';
<<<<<<< HEAD
import * as firebase from 'firebase';
import { ApiKeyService } from '../app/apikey.service';
=======


>>>>>>> 0d767039b5a90d10098f97e04aa759beca71a2ce
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(
      private apiKeyService: ApiKeyService
    ) { }

	ngOnInit() {
    console.log(this.apiKeyService.apiKey);
    console.log(this.apiKeyService.authDomain);
		firebase.initializeApp({
  			apiKey: this.apiKeyService.apiKey,
  			authDomain: this.apiKeyService.authDomain
  		})
	}
  
}
