import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Favorite } from '../favorites.model';
import { FavoritesService } from '../favorites.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import  { DataService } from '../data-storage.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})

export class ImageComponent implements OnInit {

    favorites: Favorite[]; 
    subscription: Subscription;
    newFavorite = <any>{};

    //sets the default image to the loading burger gif
    currentImage: any = './assets/images/loading_burger.gif';
    
    // google api key
    myKey: any = 'AIzaSyD3essuc-XcBtyX5W4TroWXQLWOug2xb5o';
    
    //sets counters for iterating through restaurant arrays and photo arrays
    imageCounter: number = 0;
    arrayCounter: number = 0;
    currentRestaurantName;
    currentRestaurantAddress;
    currentRestaurantWebsite;
    
    // extra google api keys for heavy testing
    //'AIzaSyDAe01cMlK4IWJMX4_KoTn9gSEKnfydK0M'
    //'AIzaSyD3essuc-XcBtyX5W4TroWXQLWOug2xb5o'
    
    // empty array to push place ids to from the first api call
    restaurantArray: any = [];
    
    // empty array to push the built restaurant objects
    restaurantObjectsForPassingArray: any = [];
    
    // defining lat and long as variables so that hopefully they can updated on the fly with geolocation
    myLat: any = '39.758451';
    myLng: any = '-105.00762450000002';
    
    // defining api request url as variable to drop in later
    googlePlacesNearbyAPIurl: any = 'https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.myLat + ',' + this.myLng + '&rankby=distance&type=restaurant&key=' + this.myKey;
    //googlePlacesDetailsAPIurl: any = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + this.restaurant + '&key=' + this.myKey;
    
    // declaring results
    results;
    public headers = new Headers({ 
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin' : '*' 
});
	public options = new RequestOptions({ headers: this.headers });

    // this is the first api call to collect the placeids of the 20 closest restaurants
    getRestaurants() {
        console.log('this is the google places api call - nearby');
        return this.http.get(this.googlePlacesNearbyAPIurl, this.options)
    .toPromise()
    .then(response => {
        this.results = response.json().results;
    })
    .then(response => {
      this.results.forEach(restaurant => {
        // push those results to that empty array from above
        this.restaurantArray.push(restaurant.place_id);
      })
      console.log(this.restaurantArray);
      // trigger the next api call function
      this.getRestaurantDetails();
    })
  }

// this is the second api call to collect place details and arrays of photos based on place ids
getRestaurantDetails() {
         console.log('this is the google places api call - details');
     // this will have to happen for each place id
     this.restaurantArray.forEach(restaurant => {
         return this.http.get('https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/details/json?placeid=' + restaurant + '&key=' + this.myKey, this.options) 
         .toPromise()
         .then(response => {
         this.results = response.json().result;
         let tempArray = [];
         // build the objects that will eventually be passed for use rendering images and saving businesses to the database
         let restaurantObject = {
             name: this.results.name,
             address: this.results.formatted_address,
             lat: this.results.geometry.location.lat,
             lng: this.results.geometry.location.lng,
             websiteURL: this.results.website,
             photos: [],
         };
         for (let i in this.results.photos) {
           // this works whether there is 1, 10, or no photos
           if (this.results.photos[i].photo_reference) {
            tempArray.push('https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=' + this.results.photos[i].photo_reference + '&key=' + this.myKey);
           }
         }
         restaurantObject.photos = tempArray;
         //console.log(restaurantObject.photos);
         // this is the array of restaurants with all the details and photos
         this.restaurantObjectsForPassingArray.push(restaurantObject);
         });
     });
     console.log(this.restaurantObjectsForPassingArray);
}

  constructor(private http: Http,
  			 private route: ActivatedRoute,
  			 private router: Router,
  			 private favoriteService: FavoritesService,
         private dataService: DataService
  ) { }
    //creates swipe events using Hammer.JS
    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight'};
        swipe(action) {
            if (action === this.SWIPE_ACTION.LEFT) {
			    console.log('swiped left');
			    this.getImage();
            
            } else if (action === this.SWIPE_ACTION.RIGHT) {
			    console.log('swiped right')
			    this.getImage();
            }
        }

    //listens for click "yes"
    clickYes() {
        console.log('clicked yes');
        this.getImage();
        this.saveRestaurantDetailsToFavorites();
    }

    //listens for click "no"
    clickNo() {
		console.log('clicked no');

    
		this.getImage();
	}

    //listens for click on "not food button"
    notFood() {
        console.log('clicked not food');
        this.getImage();
    }
  
    //shows images using two counters, one for the array of restaurant objects, and one for the array of images inside each
    //restaurant object
    //iterates through the array of restaurants at the same photo index, once it hits the end of the restaurant array,
    //it resets the restaurant index and increments the photo index and does it again
    getImage() {
        console.log('image counter: ', this.imageCounter, ' photo array length ', this.restaurantObjectsForPassingArray[this.arrayCounter].photos.length -1);
        console.log('array counter: ', this.arrayCounter);
        if (this.imageCounter < this.restaurantObjectsForPassingArray[this.arrayCounter].photos.length -1 && this.arrayCounter < this.restaurantObjectsForPassingArray.length -1) {
            this.arrayCounter++;
            this.setImage();
        } else if (this.imageCounter >= this.restaurantObjectsForPassingArray[this.arrayCounter].photos.length -1) {
            this.imageCounter++;
            this.arrayCounter = 0;
            this.setImage();
        }
    }

    //sets the image to the currentImage
    setImage() {
        if (this.restaurantObjectsForPassingArray[this.arrayCounter].photos[this.imageCounter]) {
            console.log('image has data, setting image');
            console.log(this.restaurantObjectsForPassingArray);
            this.currentImage = this.restaurantObjectsForPassingArray[this.arrayCounter].photos[this.imageCounter];
            this.currentRestaurantName = this.restaurantObjectsForPassingArray[this.arrayCounter].name;
            this.currentRestaurantAddress = this.restaurantObjectsForPassingArray[this.arrayCounter].address;
            this.currentRestaurantWebsite = this.restaurantObjectsForPassingArray[this.arrayCounter].websiteURL;
            console.log(this.currentRestaurantName);
            console.log(this.currentRestaurantAddress);
            console.log(this.currentRestaurantWebsite);
        } else {
            console.log('image data empty, re-running getImage()');
            this.getImage();
        }
    }

    // Save a restaurant when a user swipes that they like it
    saveRestaurantDetailsToFavorites() {
        //create a favorite object 
        this.newFavorite = {
            restaurantName: this.currentRestaurantName,
            restaurantAddress: this.currentRestaurantAddress,
            restaurantWebsite: this.currentRestaurantWebsite
        }
        this.dataService.storeFavorites(this.newFavorite);
    }

    saveToFavorites() {

    }

    ngOnInit() {
  	    this.subscription = this.favoriteService.favoritesChanged
  		    .subscribe(
      			(favorites: Favorite[]) => 
                  { this.favorites = favorites; }
      		   );
    	this.favorites = this.favoriteService.getFavorites();
    	console.log('ngOnInit hit');
      // on init, getRestaurants is triggered, setting the whole thing in motion
      this.getRestaurants();
  }
}

  





