import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { ApiKeyService } from './apikey.service';
import { FavoritesComponent } from './favorites/favorites.component';
import { HeaderComponent } from './header/header.component';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { DataService } from './data-storage.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoriteItemComponent } from './favorite-item/favorite-item.component';
import { FavoritesService } from './favorites.service';


export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20}
  };
}


@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    AboutComponent,
    FavoritesComponent,
    HeaderComponent,
    LandingComponent,
    FavoriteItemComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule,
    AngularFireAuthModule,
    BrowserAnimationsModule

  ],
  providers: [
    FavoritesService,
    AuthService,
    ApiKeyService,
    DataService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
