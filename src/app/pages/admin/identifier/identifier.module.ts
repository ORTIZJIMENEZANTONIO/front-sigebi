import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentifierRoutingModule } from './identifier-routing.module';
import { IdentifierListComponent } from './identifier-list/identifier-list.component';
import { IdentifierDetailComponent } from './identifier-detail/identifier-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
  declarations: [
    IdentifierListComponent,
    IdentifierDetailComponent
  ],
  imports: [
    CommonModule,
    IdentifierRoutingModule,
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
export class IdentifierModule { }
