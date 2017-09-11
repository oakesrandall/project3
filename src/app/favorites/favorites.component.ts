import { Component, OnInit } from '@angular/core';
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

export class FavoritesComponent implements OnInit {
  favorites: Favorite[];
  subscription: Subscription;
  favoritesMessage: string = "You currently have no favorites";

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
    console.log(this.favorites);
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
