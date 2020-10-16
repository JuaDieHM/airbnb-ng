import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  public formGroupSignIn: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInitSignIn();
  }

  public formInitSignIn() : void {
    this.formGroupSignIn = this.formBuilder.group({
      userEmail: ['', Validators.required],
      userPass: ['', Validators.required]
    });    
  }

  public validateSignIn() : void {
    const data = this.formGroupSignIn.value;
    console.log('Data for SignIn', data)
  }

}
