import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToutoulistModule } from './toutoulist/toutoulist.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CompteRenduComponent } from './toutoulist/containers/compte-rendu/compte-rendu.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToutoulistModule,
    NoopAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
