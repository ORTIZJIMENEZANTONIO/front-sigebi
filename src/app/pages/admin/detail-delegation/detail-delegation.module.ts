import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailDelegationRoutingModule } from './detail-delegation-routing.module';
import { DetailDelegationListComponent } from './detail-delegation-list/detail-delegation-list.component';
import { DetailDelegationDetailComponent } from './detail-delegation-detail/detail-delegation-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule, NbAutocompleteModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailDelegationListComponent,
    DetailDelegationDetailComponent
  ],
  imports: [
    CommonModule,
    DetailDelegationRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    CommonModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule,
    NbAutocompleteModule
  ]
})
export class DetailDelegationModule { }
