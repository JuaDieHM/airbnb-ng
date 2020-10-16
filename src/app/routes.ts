import { Routes } from '@angular/router';
import { BookingComponent } from './booking/components/booking/booking.component';
import { DetailComponent } from './detail/detail.component';
import { Page404Component } from './error-page/components/page404/page404.component';
import { SigninComponent } from './signin/signin.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then(mod => mod.SigninModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(mod => mod.SignupModule)
  }  ,
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '**',
    redirectTo: '/404'
  } 
]