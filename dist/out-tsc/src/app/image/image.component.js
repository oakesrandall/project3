"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var favorites_service_1 = require("../favorites.service");
var router_1 = require("@angular/router");
var data_storage_service_1 = require("../data-storage.service");
var ImageComponent = (function () {
    function ImageComponent(http, route, router, favoriteService, dataService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.favoriteService = favoriteService;
        this.dataService = dataService;
        this.newFavorite = {};
        //sets the default image to the loading burger gif
        this.currentImage = './assets/images/loading_burger.gif';
        // google api key
        this.myKey = 'AIzaSyD3essuc-XcBtyX5W4TroWXQLWOug2xb5o';
        //sets counters for iterating through restaurant arrays and photo arrays
        this.imageCounter = 0;
        this.arrayCounter = 0;
        // extra google api keys for heavy testing
        //'AIzaSyDAe01cMlK4IWJMX4_KoTn9gSEKnfydK0M'
        //'AIzaSyD3essuc-XcBtyX5W4TroWXQLWOug2xb5o'
        // empty array to push place ids to from the first api call
        this.restaurantArray = [];
        // empty array to push the built restaurant objects
        this.restaurantObjectsForPassingArray = [];
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        //creates swipe events using Hammer.JS
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    }
    ImageComponent.prototype.getLocation = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (res) {
            //console.log(res);
            //console.log(res.coords.latitude + ' ' + res.coords.longitude)
            _this.myLat = res.coords.latitude;
            _this.myLng = res.coords.longitude;
            //console.log(this.myLat + ' ' + this.myLng);
            _this.getRestaurants();
        });
    };
    // this is the first api call to collect the placeids of the 20 closest restaurants
    ImageComponent.prototype.getRestaurants = function () {
        var _this = this;
        console.log('this is the google places api call - nearby');
        console.log(this.myLat + ' ' + this.myLng);
        return this.http.get('https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.myLat + ',' + this.myLng + '&rankby=distance&type=restaurant&key=' + this.myKey, this.options)
            .toPromise()
            .then(function (response) {
            _this.results = response.json().results;
        })
            .then(function (response) {
            _this.results.forEach(function (restaurant) {
                // push those results to that empty array from above
                _this.restaurantArray.push(restaurant.place_id);
            });
            console.log(_this.restaurantArray);
            // trigger the next api call function
            _this.getRestaurantDetails();
        });
    };
    // this is the second api call to collect place details and arrays of photos based on place ids
    ImageComponent.prototype.getRestaurantDetails = function () {
        var _this = this;
        console.log('this is the google places api call - details');
        // this will have to happen for each place id
        this.restaurantArray.forEach(function (restaurant) {
            return _this.http.get('https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/details/json?placeid=' + restaurant + '&key=' + _this.myKey, _this.options)
                .toPromise()
                .then(function (response) {
                _this.results = response.json().result;
                var tempArray = [];
                // build the objects that will eventually be passed for use rendering images and saving businesses to the database
                var restaurantObject = {
                    name: _this.results.name,
                    address: _this.results.formatted_address,
                    lat: _this.results.geometry.location.lat,
                    lng: _this.results.geometry.location.lng,
                    websiteURL: _this.results.website,
                    photos: [],
                };
                for (var i in _this.results.photos) {
                    // this works whether there is 1, 10, or no photos
                    if (_this.results.photos[i].photo_reference) {
                        tempArray.push('https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=' + _this.results.photos[i].photo_reference + '&key=' + _this.myKey);
                    }
                }
                restaurantObject.photos = tempArray;
                //console.log(restaurantObject.photos);
                // this is the array of restaurants with all the details and photos
                _this.restaurantObjectsForPassingArray.push(restaurantObject);
            });
        });
        console.log(this.restaurantObjectsForPassingArray);
    };
    ImageComponent.prototype.swipe = function (action) {
        if (action === this.SWIPE_ACTION.LEFT) {
            console.log('swiped left');
            this.getImage();
        }
        else if (action === this.SWIPE_ACTION.RIGHT) {
            console.log('swiped right');
            this.getImage();
        }
    };
    //listens for click "yes"
    ImageComponent.prototype.clickYes = function () {
        console.log('clicked yes');
        this.getImage();
        this.saveRestaurantDetailsToFavorites();
    };
    //listens for click "no"
    ImageComponent.prototype.clickNo = function () {
        console.log('clicked no');
        this.getImage();
    };
    //listens for click on "not food button"
    ImageComponent.prototype.notFood = function () {
        console.log('clicked not food');
        this.getImage();
    };
    //shows images using two counters, one for the array of restaurant objects, and one for the array of images inside each
    //restaurant object
    //iterates through the array of restaurants at the same photo index, once it hits the end of the restaurant array,
    //it resets the restaurant index and increments the photo index and does it again
    ImageComponent.prototype.getImage = function () {
        console.log('image counter: ', this.imageCounter, ' photo array length ', this.restaurantObjectsForPassingArray[this.arrayCounter].photos.length - 1);
        console.log('array counter: ', this.arrayCounter);
        if (this.imageCounter < this.restaurantObjectsForPassingArray[this.arrayCounter].photos.length - 1 && this.arrayCounter < this.restaurantObjectsForPassingArray.length - 1) {
            this.arrayCounter++;
            this.setImage();
        }
        else if (this.imageCounter >= this.restaurantObjectsForPassingArray[this.arrayCounter].photos.length - 1) {
            this.imageCounter++;
            this.arrayCounter = 0;
            this.setImage();
        }
    };
    //sets the image to the currentImage
    ImageComponent.prototype.setImage = function () {
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
        }
        else {
            console.log('image data empty, re-running getImage()');
            this.getImage();
        }
    };
    // Save a restaurant when a user swipes that they like it
    ImageComponent.prototype.saveRestaurantDetailsToFavorites = function () {
        //create a favorite object 
        this.newFavorite = {
            restaurantName: this.currentRestaurantName,
            restaurantAddress: this.currentRestaurantAddress,
            restaurantWebsite: this.currentRestaurantWebsite
        };
        this.dataService.storeFavorites(this.newFavorite);
    };
    ImageComponent.prototype.saveToFavorites = function () {
    };
    ImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.favoriteService.favoritesChanged
            .subscribe(function (favorites) { _this.favorites = favorites; });
        this.favorites = this.favoriteService.getFavorites();
        console.log('ngOnInit hit');
        // on init, getRestaurants is triggered, setting the whole thing in motion
        //this.getRestaurants();
        this.getLocation();
    };
    return ImageComponent;
}());
ImageComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-image',
                templateUrl: './image.component.html',
                styleUrls: ['./image.component.css']
            },] },
];
/** @nocollapse */
ImageComponent.ctorParameters = function () { return [
    { type: http_1.Http, },
    { type: router_1.ActivatedRoute, },
    { type: router_1.Router, },
    { type: favorites_service_1.FavoritesService, },
    { type: data_storage_service_1.DataService, },
]; };
exports.ImageComponent = ImageComponent;
//# sourceMappingURL=image.component.js.map