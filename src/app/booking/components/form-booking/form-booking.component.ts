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
  }



  private bookingInitial() : void {
    this.formGroup = this.formBuilder.group({
      reserveDate: [''],
      comment: ['', Validators.required]
    })
  }

  private validateDayTomorrow(){
    const today = new Date();
    today.setDate(today.getDate() + 1);
    this.initialDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`;
  }

  private errorMapping(errors: any) : string {
    let errorMessage = '';

    if(errors.required){

    }

    return errorMessage;
  }


  public bookingRegister() : void {
    const data : this.formGroup.value;
    
  }

}
