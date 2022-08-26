import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalSupportRoutingModule } from './legal-support-routing.module';
import { LegalSupportListComponent } from './legal-support-list/legal-support-list.component';
import { LegalSupportDetailComponent } from './legal-support-detail/legal-support-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    LegalSupportListComponent,
    LegalSupportDetailComponent
  ],
  imports: [
    CommonModule,
    LegalSupportRoutingModule,
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
export class LegalSupportModule { }
