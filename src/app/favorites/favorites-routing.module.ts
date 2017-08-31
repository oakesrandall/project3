import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from '../favorites/favorites.component';

const favoriteRoutes: Routes = [
	{
		path: 'favorites',
		component: FavoritesComponent,
		// children: [
		// 	{
		// 		// path: '',
		// 		// component:
		// 	}
		// ]
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