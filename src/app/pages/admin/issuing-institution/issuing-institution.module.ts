import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuingInstitutionRoutingModule } from './issuing-institution-routing.module';
import { IssuingInstitutionListComponent } from './issuing-institution-list/issuing-institution-list.component';
import { IssuingInstitutionDetailComponent } from './issuing-institution-detail/issuing-institution-detail.component';
import { AdminModule } from '../admin.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IssuingInstitutionListComponent,
    IssuingInstitutionDetailComponent
  ],
  imports: [
    CommonModule,
    IssuingInstitutionRoutingModule,
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
export class IssuingInstitutionModule { }
