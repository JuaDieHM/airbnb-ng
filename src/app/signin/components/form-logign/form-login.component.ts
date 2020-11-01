import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  public controlErrorMessage: string;
  
  constructor(private formBuilder: FormBuilder, 
              private userService: UserService,
              private router: Router) { }

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

    const INVALID_MESSAGE = 'Credentials Invalid';

    this.userService.authenticate(user).subscribe(
      response => {
        if (response.status === 1) {
          this.router.navigate(['/home']);
          this.saveToken(response.token);
        } else {
          this.controlErrorMessage = INVALID_MESSAGE;
        }
      });
  }

  private saveToken(token : string) {
     if(token) {
       localStorage.setItem('token', token);
     }
  }
}