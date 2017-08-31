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
    currentImage: any = './assets/images/loading_burger.gif';
    myKey: any = 'AIzaSyD3essuc-XcBtyX5W4TroWXQLWOug2xb5o';
    imageCounter: number = 0;
    arrayCounter: number = 0;
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
		return this.http.get(this.googlePlacesNearbyAPIurl, this.options)
		.toPromise()
		.then(response => {
			this.results = response.json().results;
		})
		.then(response => {
			this.results.forEach(restaurant => {
				this.restaurantArray.push(restaurant.place_id);
			})
			console.log(this.restaurantArray);
			this.getRestaurantDetails();
		})
	}

    getRestaurantDetails() {
   	    console.log('this is the google places api call - details');
	 	this.restaurantArray.forEach(restaurant => {
	 		return this.http.get('https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/details/json?placeid=' + restaurant + '&key=' + this.myKey, this.options) 
	 		.toPromise()
	 		.then(response => {
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
    swipe(action) {
        if (action === this.SWIPE_ACTION.LEFT) {
			console.log('swiped left');
            this.imageCounter ++;
			this.getImage();
            
    } else if (action === this.SWIPE_ACTION.RIGHT) {
			console.log('swiped right')
			if (this.imageCounter < this.restaurantObjectsForPassingArray[this.arrayCounter].photos.length -1 && this.arrayCounter < this.restaurantObjectsForPassingArray.length -1) {
                console.log('restaurantArray is not done, increasing imageCounter');
                this.arrayCounter++;
            }
			this.getImage();
    }
  }

    clickYes() {
		console.log('clicked yes');
		if (this.imageCounter < this.restaurantObjectsForPassingArray[this.arrayCounter].photos.length -1 && this.arrayCounter < this.restaurantObjectsForPassingArray.length -1) {
            console.log('restaurantArray is not done, increasing imageCounter');
            this.arrayCounter++;
        }
		this.getImage();
  }

    clickNo() {
		console.log('clicked no');
		this.imageCounter ++;
		this.getImage();
	}

    getImage() {
		console.log('image counter: ', this.imageCounter);
        console.log('array counter: ', this.arrayCounter);
		if (this.restaurantObjectsForPassingArray[this.arrayCounter].photos[this.imageCounter]) {
			this.currentImage = this.restaurantObjectsForPassingArray[this.arrayCounter].photos[this.imageCounter];
		}
	}

        getMoPics() {
            //do something;
    }

    ngOnInit() {
  	    console.log('ngOnInit hit');
		this.getRestaurants();
		
  }
}




