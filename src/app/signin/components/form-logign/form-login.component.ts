import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  public formGroupSignIn: FormGroup;
  public user : IUser;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

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
    const data : IUser = this.formGroupSignIn.value;
    console.log('Data for SignIn', data)
    this.triedAuthenticate(data);
  }

  private triedAuthenticate(user: IUser) : void {
    this.userService.authenticate(user).subscribe(
      response => console.log('Autenticacion:', response.status)
    );
  }
}
