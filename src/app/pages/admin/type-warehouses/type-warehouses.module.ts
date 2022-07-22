import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeWarehousesRoutingModule } from './type-warehouses-routing.module';
import { TypeWarehousesListComponent } from './type-warehouses-list/type-warehouses-list.component';
import { TypeWarehousesDetailComponent } from './type-warehouses-detail/type-warehouses-detail.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbSelectModule, NbInputModule, NbWindowModule} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    TypeWarehousesListComponent,
    TypeWarehousesDetailComponent
  ],
  imports: [
    CommonModule,
    TypeWarehousesRoutingModule,
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
export class TypeWarehousesModule { }
