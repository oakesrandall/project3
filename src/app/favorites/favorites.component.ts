import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Favorite } from '../favorites.model';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit, OnDestroy {
  favorites: Favorite[];
  subscription: Subscription;

  constructor(
  		private favoriteService: FavoritesService,
  		private authService: AuthService,
  		private route: ActivatedRoute,
  		private router: Router

  ) { }

  ngOnInit() {
  	this.subscription = this.favoriteService.favoritesChanged
  		.subscribe(
  			(favorites: Favorite[]) => {
  				this.favorites = favorites;
  			}
  		);
  	this.favorites = this.favoriteService.getFavorites();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
