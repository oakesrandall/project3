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

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    FavoritesComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AuthService, ApiKeyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20}
  };
}
