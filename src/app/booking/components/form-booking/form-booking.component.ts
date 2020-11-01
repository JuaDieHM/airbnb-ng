import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';
import { BookingService } from 'src/app/services/booking/booking.service';
import { IBooking } from 'src/app/shared/models/booking/booking.model';

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent implements OnInit {

  public formGroup: FormGroup;
  public initialDate: string;

  constructor(private formBuilder: FormBuilder,
              private bookingService: BookingService,
              private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.bookingInitial();
    this.validateDayTomorrow();
  }

  private bookingInitial() : void {
    this.formGroup = this.formBuilder.group({
      booking_date_start: ['', Validators.required],
      booking_date_end: ['', Validators.required],
      comments: ['', Validators.required]
    }, {
      validators: this.validateDateRange
    });
  }

  private validateDayTomorrow(){
    var today = new Date();
    today.setDate(today.getDate() + 1);
    this.initialDate = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
  }

  private errorMapping(errors: any) : string {
    let errorMessage = '';

    if(errors.required) {
      errorMessage += 'This field is requiered';
    }

    if(errors.mustGreaterThan) {
      errorMessage += 'La fecha final debe ser mayor que la fecha inicial.';
    }

    return errorMessage;
  }

  public showErrorMessage(control : string) : string {
    let errorMessage = '';
    const validateControl = this.formGroup.get(control);

    if(validateControl.touched && validateControl.errors != null) {
      errorMessage = this.errorMapping(validateControl.errors);
    }
    return errorMessage;
  }


  public saveBooking() : void {
    const data: IBooking = this.formGroup.value;
    this.register(data);
    console.log('Reserva exitosa', data);
  }

 
  public register(booking : IBooking) : void {
    this.route.params.subscribe(
      params => {
        const id = params.id;
        booking.experience_id = id;
        this.bookingService.bookingRegister(booking).subscribe(
          response => {
            console.log('Reserva Registrada', response)
          });
      });
  }

  private validateDateRange() {
    return (formGroup: FormGroup) => {
      const controlBookingDateStart = formGroup.controls['booking_date_start']
      const controlBookingDateEnd = formGroup.controls['booking_date_end'];
        if(new Date(controlBookingDateStart.value) > new Date(controlBookingDateEnd.value)) {
          controlBookingDateEnd.setErrors({ mustGreaterThan: true});
      }
    }
  }

}