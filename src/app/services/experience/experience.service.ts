import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IExperienceDetailResponse } from 'src/app/shared/models/experienceDetailResponse.model';
import { IExperienceResponse } from 'src/app/shared/models/experienceResponse.model';
import { IExperienceTopFiveResponse } from 'src/app/shared/models/experiencesTopFiveResponse.model';
import {environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private URL_API : string = environment.urlBase;

  constructor(private httpClient : HttpClient) { }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http Error', error);
    return throwError(`Error calling to Api ${error.message}`);
  }

  public getExperiences(): Observable<IExperienceResponse> {
    const url=`${​​​​​​​​this.URL_API}​​​​​​​​/experiences`;
  
    return this.httpClient.get<IExperienceResponse>(url).pipe(
      retry(2), 
      catchError(this.handlerError)
      );
  }

  public getTopFiveExperiences(): Observable<IExperienceTopFiveResponse> {
    const url = `${​​​​​​​​this.URL_API}​​​​​​​​/experiences/top5`;

    return this.httpClient.get<IExperienceTopFiveResponse>(url).pipe(
      retry(2),
      catchError(this.handlerError)
    );
  }

  
  public getDetailExperienceById(id : string): Observable<IExperienceDetailResponse> {
    const url = `${​​​​​​​​this.URL_API}​​​​​​​​/experiences/detail/${id}`;

    return this.httpClient.get<IExperienceDetailResponse>(url).pipe(
      retry(2),
      catchError(this.handlerError)
    );
  }
}