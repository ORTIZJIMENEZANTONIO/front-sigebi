import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveValuesRoutingModule } from './save-values-routing.module';
import { SaveValuesListComponent } from './save-values-list/save-values-list.component';
import { SaveValuesDetailComponent } from './save-values-detail/save-values-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    SaveValuesListComponent,
    SaveValuesDetailComponent
  ],
  imports: [
    CommonModule,
    SaveValuesRoutingModule,
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
export class SaveValuesModule { }
