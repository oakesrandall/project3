'use strict'

const request = require('request');
const myKey = 'AIzaSyDAe01cMlK4IWJMX4_KoTn9gSEKnfydK0M';
//'AIzaSyD3essuc-XcBtyX5W4TroWXQLWOug2xb5o';

let restaurantArray = [];

function getRestaurants() {
	console.log('this is the google places api call - nearby');
	request("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.758451,-105.00762450000002&rankby=distance&type=restaurant&key=" + myKey, function(error, response, body) {
		console.log('error:', error); // Print the error if one occurred 
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
		//console.log('body:', body); // Print the response body
		var parsedData = JSON.parse(body);
		parsedData.results.forEach(function(restaurant) {
			restaurantArray.push(restaurant.place_id);
		});
		getRestaurantDetails();
	});
}

function getRestaurantDetails() {
	console.log('this is the google places api call - details');
	restaurantArray.forEach(function(restaurant) {
		request("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + restaurant + "&key=" + myKey, function(error, response, body) {
			console.log('error:', error); // Print the error if one occurred 
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
			//console.log('body:', body); // Print the response body
			var parsedData = JSON.parse(body);
			console.log(parsedData.result.name);
			console.log(parsedData.result.formatted_address);
			console.log(parsedData.result.geometry.location.lat);
			console.log(parsedData.result.geometry.location.lng);
			console.log(parsedData.result.website);
			for (let i in parsedData.result.photos) {
				if (parsedData.result.photos[i].photo_reference) {
					console.log("https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + parsedData.result.photos[i].photo_reference + "&key=" + myKey);
				}
			}
		});
	});
}

getRestaurants();

