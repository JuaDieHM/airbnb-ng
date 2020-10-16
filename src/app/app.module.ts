import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BookingComponent } from './booking/components/booking/booking.component';
import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';
import { SignupModule } from './signup/signup.module';
import { SigninModule } from './signin/signin.module';


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
    SignupModule,
    SigninModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
