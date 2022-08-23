import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModule } from '../../admin.module';
import { SatClassificationListComponent } from './sat-classification-list/sat-classification-list.component';
import { SatClassificationDetailComponent } from './sat-classification-detail/sat-classification-detail.component';
import { SatClassificacionRoutingModule } from './sat-classificacion-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../../@components/components.module';
import { ThemeModule } from '../../../../@theme/theme.module';


@NgModule({
  declarations: [
    SatClassificationListComponent,
    SatClassificationDetailComponent
  ],
  imports: [
    CommonModule,
    SatClassificacionRoutingModule,
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
export class SatClassificacionModule { }
