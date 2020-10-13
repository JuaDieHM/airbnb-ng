import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [DetailComponent, CardComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DetailModule { }
