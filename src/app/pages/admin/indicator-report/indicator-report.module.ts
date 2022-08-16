import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicatorReportRoutingModule } from './indicator-report-routing.module';
import { IndicatorReportDetailComponent } from './indicator-report-detail/indicator-report-detail.component';
import { IndicatorReportListComponent } from './indicator-report-list/indicator-report-list.component';
import { AdminModule } from '../admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module'; 


@NgModule({
  declarations: [
    IndicatorReportDetailComponent,
    IndicatorReportListComponent
  ],
  imports: [
    CommonModule,
    IndicatorReportRoutingModule,
    AdminModule,
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
export class IndicatorReportModule { }
