import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodSituationRoutingModule } from './good-situation-routing.module';
import { GoodSituationListComponent } from './good-situation-list/good-situation-list.component';
import { GoodSituationDetailComponent } from './good-situation-detail/good-situation-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    GoodSituationListComponent,
    GoodSituationDetailComponent
  ],
  imports: [
    CommonModule,
    GoodSituationRoutingModule,
    AdminModule
  ]
})
export class GoodSituationModule { }
