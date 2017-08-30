
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import 'zone.js';
//import 'reflect-metadata';

  let myKey: any = 'AIzaSyDAe01cMlK4IWJMX4_KoTn9gSEKnfydK0M';
  let restaurantArray: any = [];
  let myLat: any = '39.758451';
  let myLng: any = '-105.00762450000002';

  constructor( private http: Http) { }

  function getRestaurants() {
  	console.log('this is the google places api call - nearby');
  	this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.myLat + ',' + this.myLng + '&rankby=distance&type=restaurant&key=' + this.myKey, function(error, response, body) {
  		console.log('error:', error); // Print the error if one occurred 
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
			//console.log('body:', body); // Print the response body
			let parsedData = JSON.parse(body);
			parsedData.results.forEach(function(restaurant) {
				this.restaurantArray.push(restaurant.place_id);
			});
			this.getRestaurantDetails();
  	});
  }

  function getRestaurantDetails() {
  	console.log('this is the google places api call - details');
		this.restaurantArray.forEach(function(restaurant) {
			this.http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + restaurant + '&key=' + this.myKey, function(error, response, body) {
				console.log('error:', error); // Print the error if one occurred 
				console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
				//console.log('body:', body); // Print the response body
				let parsedData = JSON.parse(body);
				console.log(parsedData.result.name);
				console.log(parsedData.result.formatted_address);
				console.log(parsedData.result.geometry.location.lat);
				console.log(parsedData.result.geometry.location.lng);
				console.log(parsedData.result.website);
				for (let i in parsedData.result.photos) {
					if (parsedData.result.photos[i].photo_reference) {
						console.log('https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + parsedData.result.photos[i].photo_reference + '&key=' + this.myKey);
					}
				}
			});
		});
  }

getRestaurants();