import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from 'src/app/shared/models/user.model';
import { catchError, retry } from 'rxjs/operators';
import { IUserResponse } from 'src/app/shared/models/userResponse.model';
import { IAuthenticateResponse } from 'src/app/shared/models/autenthicateResponse.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_API : string = environment.urlBase;

  constructor(private httpClient : HttpClient) { }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http Error', error);
    return throwError(`Error calling to Api ${error.message}`);
  }

  public registerUser(user : IUser) : Observable<IUserResponse> {
    const url=`${​​​​​​​​this.URL_API}​​​​​​​​/users/signup`;

    return this.httpClient.post<IUserResponse>(url, user).pipe(
      retry(2),
      catchError(this.handlerError)
    );
  }

  public authenticate(user : IUser) : Observable<IAuthenticateResponse> {
    const url=`${​​​​​​​​this.URL_API}​​​​​​​​/users/login`;

    return this.httpClient.post<IAuthenticateResponse>(url, user).pipe(
      retry(2),
      catchError(this.handlerError)
    );
  }
}
