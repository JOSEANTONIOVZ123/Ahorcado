import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AhorcadoComponent,
    CommonModule,
  ],

  providers: [CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
