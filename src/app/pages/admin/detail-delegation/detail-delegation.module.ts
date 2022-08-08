import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailDelegationRoutingModule } from './detail-delegation-routing.module';
import { DetailDelegationListComponent } from './detail-delegation-list/detail-delegation-list.component';
import { DetailDelegationDetailComponent } from './detail-delegation-detail/detail-delegation-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    DetailDelegationListComponent,
    DetailDelegationDetailComponent
  ],
  imports: [
    CommonModule,
    DetailDelegationRoutingModule,
    AdminModule
  ]
})
export class DetailDelegationModule { }
