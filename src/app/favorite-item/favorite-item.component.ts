import { Component, OnInit, Input } from '@angular/core';
import { Favorite } from '../favorites.model';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent implements OnInit { 
  @Input() favorite: Favorite;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
