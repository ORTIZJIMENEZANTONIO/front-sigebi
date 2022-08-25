import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoccompensationRoutingModule } from './doccompensation-routing.module';
import { DoccompensationDetailComponent } from './doccompensation-detail/doccompensation-detail.component';
import { DoccompensationListComponent } from './doccompensation-list/doccompensation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [DoccompensationDetailComponent, DoccompensationListComponent],
  imports: [
    CommonModule,
    DoccompensationRoutingModule,
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
export class DoccompensationModule { }
