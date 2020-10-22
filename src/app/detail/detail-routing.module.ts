import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';

const routeDetail: Routes = [
  {
    path: '',
    component: DetailComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routeDetail)
  ],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
