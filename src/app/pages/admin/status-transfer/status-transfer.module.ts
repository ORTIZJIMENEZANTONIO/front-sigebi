import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusTransferRoutingModule } from './status-transfer-routing.module';
import { StatusTransferDetailComponent } from './status-transfer-detail/status-transfer-detail.component';
import { StatusTransferListComponent } from './status-transfer-list/status-transfer-list.component';

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
    StatusTransferDetailComponent,
    StatusTransferListComponent
  ],
  imports: [
    CommonModule,
    StatusTransferRoutingModule,
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
export class StatusTransferModule { }
