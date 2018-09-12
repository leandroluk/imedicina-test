import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToasterModule, ToasterService } from 'angular2-toaster';

import { StoreModule } from '@core/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    StoreModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
