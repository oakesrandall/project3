import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { ApiKeyService } from './apikey.service';
import { DataService } from './data-storage.service';

//import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(
    private apiKeyService: ApiKeyService,
    private dataService: DataService
   ) { }


  getLocation() {
    if (navigator.geolocation){
      console.log("geolocation services available");
      navigator.geolocation.getCurrentPosition(this.showPosition)
    } else {
      console.log("no geolocation services");
    }
    
  }
	ngOnInit() {
    console.log(this.apiKeyService.firebaseApiKey);
		firebase.initializeApp({
      apiKey: this.apiKeyService.firebaseApiKey,
      authDomain: this.apiKeyService.firebaseAuthDomain
    });
    this.getLocation()

	}

  showPosition(position) {
    console.log(position);
    //var lat = position.coords.latitude;
  }
  
}
