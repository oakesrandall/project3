import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { FormsModule } from '@angular/forms';
import { ApiKeyService } from './apikey.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent
    
    
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
