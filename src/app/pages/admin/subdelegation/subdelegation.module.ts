import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubdelegationRoutingModule } from './subdelegation-routing.module';
import { SubdelegationDetailComponent } from './subdelegation-detail/subdelegation-detail.component';
import { SubdelegationListComponent } from './subdelegation-list/subdelegation-list.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule, NbAutocompleteModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    SubdelegationDetailComponent,
    SubdelegationListComponent
  ],
  imports: [
    CommonModule,
    SubdelegationRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    NbAutocompleteModule,
    MatPaginatorModule
  ]
})
export class SubdelegationModule { }
