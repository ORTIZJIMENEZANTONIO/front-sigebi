import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeOrderServiceRoutingModule } from './type-order-service-routing.module';
import { TypeOrderServiceListComponent } from './type-order-service-list/type-order-service-list.component';
import { TypeOrderServiceDetailComponent } from './type-order-service-detail/type-order-service-detail.component';


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
    TypeOrderServiceListComponent,
    TypeOrderServiceDetailComponent
  ],
  imports: [
    CommonModule,
    TypeOrderServiceRoutingModule,
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
export class TypeOrderServiceModule { }
