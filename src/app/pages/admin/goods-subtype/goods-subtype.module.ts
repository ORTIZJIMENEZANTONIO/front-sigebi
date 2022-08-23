import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsSubtypeRoutingModule } from './goods-subtype-routing.module';
import { GoodsSubtypeListComponent } from './goods-subtype-list/goods-subtype-list.component';
import { GoodsSubtypeDetailComponent } from './goods-subtype-detail/goods-subtype-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    GoodsSubtypeListComponent,
    GoodsSubtypeDetailComponent
  ],
  imports: [
    CommonModule,
    GoodsSubtypeRoutingModule,
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
export class GoodsSubtypeModule { }
