import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionClassificationRoutingModule } from './institution-classification-routing.module';
import { InstitutionClassificationListComponent } from './institution-classification-list/institution-classification-list.component';
import { InstitutionClassificationDetailComponent } from './institution-classification-detail/institution-classification-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    InstitutionClassificationListComponent,
    InstitutionClassificationDetailComponent
  ],
  imports: [
    CommonModule,
    InstitutionClassificationRoutingModule,
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
export class InstitutionClassificationModule { }
