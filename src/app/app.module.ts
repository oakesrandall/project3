import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { FormsModule } from '@angular/forms';
import { ApiKeyService } from './apikey.service';
import { FavoritesComponent } from './favorites/favorites.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data-storage.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    FavoritesComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, ApiKeyService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
