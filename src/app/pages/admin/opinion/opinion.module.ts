import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpinionRoutingModule } from './opinion-routing.module';
import { OpinionDetailComponent } from './opinion-detail/opinion-detail.component';
import { OpinionListComponent } from './opinion-list/opinion-list.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    OpinionDetailComponent,
    OpinionListComponent
  ],
  imports: [
    CommonModule,
    OpinionRoutingModule,
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
export class OpinionModule { }
