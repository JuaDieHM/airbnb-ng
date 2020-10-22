import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageRoutingModule } from './error-page-routing.module';
import { Page404Component } from './page404.component';



@NgModule({
  declarations: [Page404Component],
  imports: [
    CommonModule,
    ErrorPageRoutingModule
  ]
})
export class ErrorPageModule { }
