import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettlementRoutingModule } from './settlement-routing.module';
import { SettlementDetailComponent } from './settlement-detail/settlement-detail.component';
import { SettlementListComponent } from './settlement-list/settlement-list.component';


@NgModule({
  declarations: [
    SettlementDetailComponent,
    SettlementListComponent
  ],
  imports: [
    CommonModule,
    SettlementRoutingModule
  ]
})
export class SettlementModule { }
