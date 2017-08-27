import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
<<<<<<< HEAD
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
=======
import { FormsModule } from '@angular/forms';
import { ApiKeyService } from './apikey.service';
>>>>>>> 0ee768157fb76c9c39c3f039238b687827344018

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ImageComponent,
    AboutComponent,
    LandingComponent
=======
    ImageComponent
    
    
>>>>>>> 0ee768157fb76c9c39c3f039238b687827344018
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, ApiKeyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
