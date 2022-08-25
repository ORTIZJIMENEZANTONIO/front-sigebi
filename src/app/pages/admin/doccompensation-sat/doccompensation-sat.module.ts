import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoccompensationSatRoutingModule } from './doccompensation-sat-routing.module';
import { DoccompensationSatListComponent } from './doccompensation-sat-list/doccompensation-sat-list.component';
import { DoccompensationSatDetailComponent } from './doccompensation-sat-detail/doccompensation-sat-detail.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [DoccompensationSatListComponent, DoccompensationSatDetailComponent],
  imports: [
    CommonModule,
    DoccompensationSatRoutingModule,
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
export class DoccompensationSatModule { }
