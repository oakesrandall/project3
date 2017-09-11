import { Component, OnInit, Input } from '@angular/core';
import { Favorite } from '../favorites.model';
import { FavoritesService } from '../favorites.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent implements OnInit { 
  @Input() favorite: Favorite;
  @Input() index: number;

  favorites: Favorite[];
  subscription: Subscription;
  id: string;
  constructor(private favoritesService: FavoritesService,
              private router: Router

    ) { }

  ngOnInit() {
   this.subscription = this.favoritesService.favoritesChanged
      .subscribe(
        (favorites: Favorite[]) => {
          this.favorites = favorites;
        }
      );
    this.favorites = this.favoritesService.getFavorites();
     
  }

  deleteFavorite(favorite) {
    console.log("deleting favorite");
    //this.id = this.route.params;
    //console.log(this.id);
  	this.favoritesService.deleteFavorites(favorite)
      .subscribe(
          response => {
            this.favorites = response
       });

    // let favoriteIndex = this.favorites.indexOf(favorite);
    // this.favorites.splice(favoriteIndex, 1);
     
    //this.router.navigate(['/favorites']);
  }

}
