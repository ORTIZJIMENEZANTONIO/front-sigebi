import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodSubtypeRoutingModule } from './good-subtype-routing.module';
import { GoodSubtypeListComponent } from './good-subtype-list/good-subtype-list.component';
import { GoodSubtypeDetailComponent } from './good-subtype-detail/good-subtype-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
  declarations: [
    GoodSubtypeListComponent,
    GoodSubtypeDetailComponent
  ],
  imports: [
    CommonModule,
    GoodSubtypeRoutingModule,
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
export class GoodSubtypeModule { }
