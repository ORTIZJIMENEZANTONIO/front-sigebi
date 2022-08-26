import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeSettlementRoutingModule } from './type-settlement-routing.module';
import { TypeSettelementListComponent } from './type-settelement-list/type-settelement-list.component';
import { TypeSettelementDetailComponent } from './type-settelement-detail/type-settelement-detail.component';
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
    TypeSettelementListComponent,
    TypeSettelementDetailComponent,
  ],
  imports: [
    CommonModule,
    TypeSettlementRoutingModule,
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
export class TypeSettlementModule { }
