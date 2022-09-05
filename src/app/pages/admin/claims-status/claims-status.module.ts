import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsStatusRoutingModule } from './claims-status-routing.module';
import { ClaimsStatusListComponent } from './claims-status-list/claims-status-list.component';
import { ClaimsStatusDetailComponent } from './claims-status-detail/claims-status-detail.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ClaimsStatusListComponent,
    ClaimsStatusDetailComponent
  ],
  imports: [
    CommonModule,
    ClaimsStatusRoutingModule,
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
export class ClaimsStatusModule { }
