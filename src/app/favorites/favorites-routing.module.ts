import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from '../favorites/favorites.component';
import { FavoriteItemComponent } from '../favorite-item/favorite-item.component';
import { Router, ActivatedRoute } from '@angular/router';

const favoriteRoutes: Routes = [
	{
		path: 'favorites',
		component: FavoritesComponent,
		children: [
			// {
			// 	path: ':id',
			// 	component: FavoritesComponent
			// }
		]
	}
];

@NgModule({
    imports: [
        RouterModule.forChild(favoriteRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class FavoritesRoutingModule { }