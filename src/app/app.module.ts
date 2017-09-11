import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { FavoritesRoutingModule } from './favorites/favorites-routing.module';

import { AuthService } from './auth.service';

import { ApiKeyService } from './apikey.service';
import { FavoritesService } from './favorites.service';
import { FirebaseService } from './firebase.service';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoriteItemComponent } from './favorite-item/favorite-item.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { DataService } from './data-storage.service';


export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20}
  };
}

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    AppComponent,
    ImageComponent,
    AboutComponent,
    FavoritesComponent,
    HeaderComponent,
    LandingComponent,
    FavoriteItemComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule,
    FavoritesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    FavoritesService,
    DataService,
    AuthService,
    ApiKeyService,
    FirebaseService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
