import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent implements OnInit {

  public formGroup: FormGroup;
  public initialDate: string;

  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit(): void {
    this.bookingInitial();
    this.validateDayTomorrow();
  }

  private bookingInitial() : void {
    this.formGroup = this.formBuilder.group({
      reserveInitialDate: ['', Validators.required],
      reserveEndDate: ['', Validators.required],
      comment: ['', Validators.required]
    })
  }

  private validateDayTomorrow(){
    var today = new Date();
    today.setDate(today.getDate() + 1);
    this.initialDate = `${today.getFullYear()} - ${today.getMonth()+1} - ${today.getDate()}`;
  }


  public showErrorMessage(control : string) : string {
    let errorMessage = '';
    const validateControl = this.formGroup.get(control);

    if(validateControl.touched && validateControl.errors != null) {
      errorMessage = this.errorMapping(validateControl.errors);
    }
    return errorMessage;
  }

  private errorMapping(errors: any) : string {
    let errorMessage = '';

    if(errors.required) {
      errorMessage += 'This field is requiered';
    }
    return errorMessage;
  }

  public saveBooking() : void {
    const data = this.formGroup.value;
    console.log('Success booking. :D', data);
  }
}