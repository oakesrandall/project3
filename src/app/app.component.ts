import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { ApiKeyService } from './apikey.service';
//import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private apiKeyService: ApiKeyService) { }

	ngOnInit() {
    console.log(this.apiKeyService.firebaseApiKey);
		firebase.initializeApp({
      apiKey: this.apiKeyService.firebaseApiKey,
      authDomain: this.apiKeyService.firebaseAuthDomain
    });

	}
  
}
