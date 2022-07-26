import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SiabClasificationRoutingModule } from './siab-clasification-routing.module';
import { SiabClasificationDetailComponent } from './siab-clasification-detail/siab-clasification-detail.component';
import { SiabClasificationListComponent } from './siab-clasification-list/siab-clasification-list.component';


@NgModule({
  declarations: [
    SiabClasificationDetailComponent,
    SiabClasificationListComponent
  ],
  imports: [
    CommonModule,
    SiabClasificationRoutingModule,
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
export class SiabClasificationModule { }
