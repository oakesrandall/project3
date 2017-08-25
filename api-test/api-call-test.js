'use strict'

const request = require('request');
const myKey = 'AIzaSyDAe01cMlK4IWJMX4_KoTn9gSEKnfydK0M';

let restaurantArray = [];

function getRestaurants() {
	console.log('this is the google places api call - nearby');
	request("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.758451,-105.00762450000002&rankby=distance&type=restaurant&key=" + myKey, function(error, response, body) {
		console.log('error:', error); // Print the error if one occurred 
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
		console.log('body:', body); // Print the response body
		var parsedData = JSON.parse(body);
		parsedData.results.forEach(function(restaurant) {
			restaurantArray.push(restaurant.place_id);
		});
		//console.log(restaurantArray);
		getRestaurantDetails();
	});
}

function getRestaurantDetails() {
	console.log('this is the google places api call - details');
	restaurantArray.forEach(function(restaurant) {
		request("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + restaurant + "&key=" + myKey, function(error, response, body) {
			//console.log('error:', error); // Print the error if one occurred 
			//console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
			//console.log('body:', body); // Print the response body
			var parsedData = JSON.parse(body);
			console.log(parsedData.result.name);
			console.log(parsedData.result.formatted_address);
			console.log(parsedData.result.geometry.location.lat);
			console.log(parsedData.result.geometry.location.lng);
			console.log(parsedData.result.website);
		});
	});
}

getRestaurants();

//function getphoto
//https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY

// function getLocation() {
//   if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//       console.log("Geolocation is not supported by this browser.");
//   }
// }

// function showPosition(position) {
//   console.log("Latitude: " + position.coords.latitude + " " + "Longitude: " + position.coords.longitude); 
// }

// getLocation();
