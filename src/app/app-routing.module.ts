import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ImageComponent } from './image/image.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
	{
		path: '',
		component: LandingComponent
	},
	{
		path: 'home',
		component: ImageComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'signup',
		component: SignupComponent
	},
	{
		path: 'favorites',
		component: FavoritesComponent
	}

];

@NgModule({
	declarations: [
		LoginComponent,
		SignupComponent
	],
    imports: [ RouterModule.forRoot(routes), FormsModule ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}