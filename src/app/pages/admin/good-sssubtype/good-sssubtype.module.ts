import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodSssubtypeRoutingModule } from './good-sssubtype-routing.module';
import { GoodSssubtypeListComponent } from './good-sssubtype-list/good-sssubtype-list.component';
import { GoodSssubtypeDetailComponent } from './good-sssubtype-detail/good-sssubtype-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GoodSssubtypeListComponent,
    GoodSssubtypeDetailComponent
  ],
  imports: [
    CommonModule,
    GoodSssubtypeRoutingModule,
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
export class GoodSssubtypeModule { }
