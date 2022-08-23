import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsConceptRoutingModule } from './payments-concept-routing.module';
import { PaymentsConceptListComponent } from './payments-concept-list/payments-concept-list.component';
import { PaymentsConceptDetailComponent } from './payments-concept-detail/payments-concept-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
  declarations: [
    PaymentsConceptDetailComponent,
    PaymentsConceptListComponent
  ],
  imports: [
    CommonModule,
    PaymentsConceptRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule
  ]
})
export class PaymentsConceptModule { }
