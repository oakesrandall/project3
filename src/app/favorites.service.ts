import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { Favorite } from './favorites.model';

@Injectable() 
export class FavoritesService {

	baseUrl = 'http://localhost:3000';
	
	favoritesChanged = new Subject<Favorite[]>();

	private favorites: Favorite[] = [
		new Favorite('Linger', '2030 W 30th Ave, Denver, CO 80211', 'places.singleplatform.com'),
		new Favorite('Linger', '2030 W 30th Ave, Denver, CO 80211', 'places.singleplatform.com')
	]

	constructor() { }

	getFavorites() {
		return this.favorites.slice();
	}


	addFavorites(favorite: Favorite) {
		this.favorites.push(favorite);
		this.favoritesChanged.next(this.favorites.slice());
	}

	deleteFavorites(index: number) {
		this.favorites.splice(index, 1);
		this.favoritesChanged.next(this.favorites.slice());
	}

}