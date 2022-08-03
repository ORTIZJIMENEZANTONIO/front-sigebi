import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubdelegationRoutingModule } from './subdelegation-routing.module';
import { SubdelegationDetailComponent } from './subdelegation-detail/subdelegation-detail.component';
import { SubdelegationListComponent } from './subdelegation-list/subdelegation-list.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    SubdelegationDetailComponent,
    SubdelegationListComponent
  ],
  imports: [
    CommonModule,
    SubdelegationRoutingModule,
    AdminModule
  ]
})
export class SubdelegationModule { }
