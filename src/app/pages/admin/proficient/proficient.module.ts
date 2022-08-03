import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProficientRoutingModule } from './proficient-routing.module';
import { ProficientListComponent } from './proficient-list/proficient-list.component';
import { ProficientDetailComponent } from './proficient-detail/proficient-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    ProficientListComponent,
    ProficientDetailComponent
  ],
  imports: [
    CommonModule,
    ProficientRoutingModule,
    AdminModule
  ]
})
export class ProficientModule { }
