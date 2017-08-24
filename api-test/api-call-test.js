'use strict'

const request = require('request');
const myKey = 'AIzaSyDAe01cMlK4IWJMX4_KoTn9gSEKnfydK0M';

function getRestaurantData() {
	console.log('this is the api call!');
	request("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.758451,-105.00762450000002&radius=200&type=restaurant&key=" + myKey, function(error, response, body) {
		console.log('error:', error); // Print the error if one occurred 
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
		//console.log('body:', body); // Print the HTML for the Google homepage.
		var parsedData = JSON.parse(body);
		console.log(parsedData);
	});
}

getRestaurantData()