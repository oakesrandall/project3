import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Favorite } from './favorites.model';

@Injectable() 
export class FavoritesService {

	favoritesChanged = new Subject<Favorite[]>();

	private favorites: Favorite[] = [
		new Favorite('Linger', '(303) 993-3120', '2030 W 30th Ave, Denver, CO 80211', 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/17881514_123624571517356_9002373674300342272_n.jpg', 'places.singleplatform.com', 4.4),
		new Favorite('Linger', '(303) 993-3120', '2030 W 30th Ave, Denver, CO 80211', 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/17881514_123624571517356_9002373674300342272_n.jpg', 'places.singleplatform.com', 4.4)
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