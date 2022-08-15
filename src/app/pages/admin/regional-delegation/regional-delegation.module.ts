import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { RegionalDelegationRoutingModule } from './regional-delegation-routing.module';
import { RegionalDelegationDetailComponent } from './regional-delegation-detail/regional-delegation-detail.component';
import { RegionalDelegationListComponent } from './regional-delegation-list/regional-delegation-list.component';


@NgModule({
  declarations: [
    RegionalDelegationDetailComponent,
    RegionalDelegationListComponent
  ],
  imports: [
    CommonModule,
    RegionalDelegationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class RegionalDelegationModule { }
