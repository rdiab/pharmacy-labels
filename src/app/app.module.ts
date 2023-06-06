import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtiquetasPageModule } from './etiquetas-page/etiquetas-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EtiquetasPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
