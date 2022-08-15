import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PenaltyRoutingModule } from './penalty-routing.module';
import { PenaltyListComponent } from './penalty-list/penalty-list.component';
import { PenaltyDetailComponent } from './penalty-detail/penalty-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    PenaltyListComponent,
    PenaltyDetailComponent
  ],
  imports: [
    CommonModule,
    PenaltyRoutingModule,
    AdminModule
  ]
})
export class PenaltyModule { }
