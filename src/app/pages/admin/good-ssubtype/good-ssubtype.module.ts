import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodSsubtypeRoutingModule } from './good-ssubtype-routing.module';
import { GoodSsubtypeListComponent } from './good-ssubtype-list/good-ssubtype-list.component';
import { GoodSsubtypeDetailComponent } from './good-ssubtype-detail/good-ssubtype-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    GoodSsubtypeListComponent,
    GoodSsubtypeDetailComponent
  ],
  imports: [
    CommonModule,
    GoodSsubtypeRoutingModule,
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
export class GoodSsubtypeModule { }
