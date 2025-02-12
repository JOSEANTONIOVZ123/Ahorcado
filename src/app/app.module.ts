
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AhorcadoComponent,
    CommonModule,
    HttpClientModule,


  ],
  providers: [CommonModule, provideHttpClient(),ApiService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
