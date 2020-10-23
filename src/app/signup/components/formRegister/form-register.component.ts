import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { onErrorResumeNext } from 'rxjs';
import { UserService } from 'src/app/services/users/user.service';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  
  public formGroup: FormGroup;
  public user: IUser; 

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void{
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      identification: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(16), this.validatePassword ]]
    });
  }

  private validatePassword(control: AbstractControl) { 
    const password = control.value;
    let error = null;
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if(!er.test(password)) {
      error = { customError: 'Debes tener al menos una mayuscula, un numero y ser de minimo 8 caracteres'};
    }
    return error; 
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);

    if (control.touched && control.errors != null) {
      error = this.errorMapping(control.errors);
    }
    return error;
  } 

  private errorMapping(errors: any) : string {
    console.log('errors', errors);
    let errorMessage = '';

    if(errors.required){
        errorMessage += 'Campo Obligatorio';
    }

    if(errors.customError){
      errorMessage += errors.customError;
    }

    if(errors.maxlength) {
      errorMessage += `La longitud máxima debe ser ${errors.maxlength.requiredLength}`;
    }

    if(errors.email) {
      errorMessage += 'Debes ingresar un correo valido.';
    }
    
    return errorMessage;
  }


  public register(): void {
    const data : IUser = this.formGroup.value;
    console.log('data register', data)
    this.generateRegisterUser(data);
  }


  /**
   * Consumo del servicio.
   */
  private generateRegisterUser(user: IUser) : void {
      this.userService.registerUser(user).subscribe(
        response => console.log('Usuario Registrado', response)
      )
  }
}