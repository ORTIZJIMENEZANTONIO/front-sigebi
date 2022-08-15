import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeGoodsRoutingModule } from './type-goods-routing.module';
import { TypeGoodDetailComponent } from './type-good-detail/type-good-detail.component';
import { TypeGoodListComponent } from './type-good-list/type-good-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    TypeGoodDetailComponent,
    TypeGoodListComponent
  ],
  imports: [
    CommonModule,
    TypeGoodsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    CommonModule,
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
export class TypeGoodsModule { }
