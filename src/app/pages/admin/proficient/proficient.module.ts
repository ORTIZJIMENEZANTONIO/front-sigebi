import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProficientRoutingModule } from './proficient-routing.module';
import { ProficientListComponent } from './proficient-list/proficient-list.component';
import { ProficientDetailComponent } from './proficient-detail/proficient-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    ProficientListComponent,
    ProficientDetailComponent
  ],
  imports: [
    CommonModule,
    ProficientRoutingModule,
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
export class ProficientModule { }
