import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiciadosRoutingModule } from './indiciados-routing.module';
import { IndiciadosListComponent } from './indiciados-list/indiciados-list.component';
import { IndiciadosDetailComponent } from './indiciados-detail/indiciados-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    IndiciadosListComponent,
    IndiciadosDetailComponent
  ],
  imports: [
    CommonModule,
    IndiciadosRoutingModule,
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
export class IndiciadosModule { }
