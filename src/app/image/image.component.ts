import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Favorite } from '../favorites.model';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})

export class ImageComponent implements OnInit {

  myKey: any = 'AIzaSyD3essuc-XcBtyX5W4TroWXQLWOug2xb5o';
  //'AIzaSyDAe01cMlK4IWJMX4_KoTn9gSEKnfydK0M'
  restaurantArray: any = [];
  restaurantObjectsForPassingArray: any = [];
  myLat: any = '39.758451';
  myLng: any = '-105.00762450000002';
  googlePlacesNearbyAPIurl: any = 'https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.myLat + ',' + this.myLng + '&rankby=distance&type=restaurant&key=' + this.myKey;
  //googlePlacesDetailsAPIurl: any = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + this.restaurant + '&key=' + this.myKey;
  results;
  public headers = new Headers({ 
  	'Content-Type': 'application/json', 
   'Access-Control-Allow-Origin' : '*' 
 });
	public options = new RequestOptions({ headers: this.headers });

  getRestaurants() {
  	console.log('this is the google places api call - nearby');
  	//console.log(this.googlePlacesNearbyAPIurl);
  	//console.log(this.options);
		return this.http.get(this.googlePlacesNearbyAPIurl, this.options)
		.toPromise()
		.then(response => {
			//console.log("heeeere");
			this.results = response.json().results;
		})
		.then(response => {
			this.results.forEach(restaurant => {
				//console.log(restaurant.place_id);
				//console.log(this.restaurantArray);
				this.restaurantArray.push(restaurant.place_id);
			})
			console.log(this.restaurantArray);
			this.getRestaurantDetails();
		})
	}

   getRestaurantDetails() {
   	console.log('this is the google places api call - details');
	 	this.restaurantArray.forEach(restaurant => {
	 		//console.log(restaurant);
	 		return this.http.get('https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/details/json?placeid=' + restaurant + '&key=' + this.myKey, this.options) 
	 		.toPromise()
	 		.then(response => {
	 			//console.log(response);
	 			this.results = response.json().result;
	 			let tempArray = [];
	 			let restaurantObject = {
	 				name: this.results.name,
	 				address: this.results.formatted_address,
	 				lat: this.results.geometry.location.lat,
	 				lng: this.results.geometry.location.lng,
	 				websiteURL: this.results.website,
	 				photos: [],
	 			};
	 			for (let i in this.results.photos) {
	 				if (this.results.photos[i].photo_reference) {
	 					tempArray.push('https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=' + this.results.photos[i].photo_reference + '&key=' + this.myKey);
	 				}
	 			}
	 			restaurantObject.photos = tempArray;
	 			//console.log(restaurantObject.photos);
	 			this.restaurantObjectsForPassingArray.push(restaurantObject);
	 		});
	 	});
	 	console.log(this.restaurantObjectsForPassingArray);
	}  

  constructor(private http: Http) { }
  
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight'};
  swipe(action = this.SWIPE_ACTION.RIGHT) {
    if (action === this.SWIPE_ACTION.LEFT) {
      console.log('swiped left');
    } else if (action === this.SWIPE_ACTION.RIGHT) {
      console.log('swiped right');
    }
  }

  clickYes() {
    console.log('clicked yes');
  }

  clickNo() {
    console.log('clicked no');
  }

  ngOnInit() {
  	console.log('ngOnInit hit');
  	this.getRestaurants();
  }

}