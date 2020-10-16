import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin.component';

const routesSignIn: Routes = [
  {
    path: '',
    component: SigninComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesSignIn)
  ],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
