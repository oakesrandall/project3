import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { Favorite } from './favorites.model';

@Injectable() 
export class FavoritesService {

	baseUrl = 'http://localhost:3000';
	
	favoritesChanged = new Subject<Favorite[]>();

	private favorites: Favorite[] = [
		//new Favorite('Linger', '2030 W 30th Ave, Denver, CO 80211',  'places.singleplatform.com', 'http://denver.thedrinknation.com/images/bars/lingerdenver.jpg')
	] 

	constructor(private http: Http) { }

	getFavorites() {
		// return this.http.get(`${this.baseUrl}/api/favorites)
		// 	.toPromise()
			// .then(response => 
			// 	response.json().data as Favorite[])
			// 	.catch(this.handleError);
			// )
		
		return this.favorites.slice();
	}


	addFavorites(favorite: Favorite) {
		this.favorites.push(favorite);
		console.log(this.favorites)
		this.favoritesChanged.next(this.favorites.slice());

		// Add favorite to database
		// return this.http.post(`${this.baseUrl}/api/favorite`, favorite);
	}

	deleteFavorites(favorite) {
		let favoriteIndex = this.favorites.indexOf(favorite);
		console.log(favoriteIndex);
		this.favorites.splice(favoriteIndex, 1);
		this.favoritesChanged.next(this.favorites.slice());
		return this.favoritesChanged;

		// *****Delete from database
		//return this.http.delete(`{this.baseUrl}/api/favorites/${favorite.id}`);
	}

}