import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404.component';


const errorPageRoute: Routes = [
  {
    path: '',
    component: Page404Component,
    pathMatch: 'full'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(errorPageRoute)
  ],
  exports:[
    RouterModule
  ]
})
export class ErrorPageRoutingModule { }
