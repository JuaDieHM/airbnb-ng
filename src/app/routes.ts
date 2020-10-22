import { Routes } from '@angular/router';
import { BookingComponent } from './booking/components/booking/booking.component';

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
    loadChildren: () => import('./detail/detail.module').then(mod => mod.DetailModule)
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
    loadChildren: () => import('./error-page/error-page.module').then(mod => mod.ErrorPageModule)
  },
  {
    path: '**',
    redirectTo: '/404'
  } 
]