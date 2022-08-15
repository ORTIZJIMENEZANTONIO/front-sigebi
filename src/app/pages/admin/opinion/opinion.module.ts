import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpinionRoutingModule } from './opinion-routing.module';
import { OpinionDetailComponent } from './opinion-detail/opinion-detail.component';
import { OpinionListComponent } from './opinion-list/opinion-list.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    OpinionDetailComponent,
    OpinionListComponent
  ],
  imports: [
    CommonModule,
    OpinionRoutingModule,
    AdminModule
  ]
})
export class OpinionModule { }
