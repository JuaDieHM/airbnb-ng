import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BookingComponent } from './booking/components/booking/booking.component';
import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SharedModule,
    HomeModule,
    DetailModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
