import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsConceptRoutingModule } from './payments-concept-routing.module';
import { PaymentsConceptListComponent } from './payments-concept-list/payments-concept-list.component';
import { PaymentsConceptDetailComponent } from './payments-concept-detail/payments-concept-detail.component';
import { AdminModule } from '../admin.module';

@NgModule({
  declarations: [
    PaymentsConceptDetailComponent,
    PaymentsConceptListComponent
  ],
  imports: [
    CommonModule,
    PaymentsConceptRoutingModule,
    AdminModule
  ]
})
export class PaymentsConceptModule { }
