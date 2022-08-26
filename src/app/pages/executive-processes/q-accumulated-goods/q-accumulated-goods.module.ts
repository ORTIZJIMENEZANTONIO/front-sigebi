import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
 
import { ComponentsModule } from '../../../@components/components.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule, NbDatepickerModule, NbActionsModule,} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NbCheckboxModule } from '@nebular/theme';


import { QAccumulatedGoodsRoutingModule } from './q-accumulated-goods-routing.module';
import { QAccumulatedGoodsDetailComponent } from './q-accumulated-goods-detail/q-accumulated-goods-detail.component';
import { QAccumulatedGoodsListComponent } from './q-accumulated-goods-list/q-accumulated-goods-list.component';


@NgModule({
  declarations: [
    QAccumulatedGoodsDetailComponent,
    QAccumulatedGoodsListComponent
  ],
  imports: [
    CommonModule,
    QAccumulatedGoodsRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    NbCheckboxModule,
    NbDatepickerModule, 
    NbActionsModule
    
  ]
})
export class QAccumulatedGoodsModule { }
