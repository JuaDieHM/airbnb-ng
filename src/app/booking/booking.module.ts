import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { FormBookingComponent } from './components/form-booking/form-booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './booking.component';

@NgModule({
  declarations: [BookingComponent, FormBookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
