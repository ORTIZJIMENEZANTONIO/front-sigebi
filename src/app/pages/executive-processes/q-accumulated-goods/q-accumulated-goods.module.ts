import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';



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
    NbAutocompleteModule, 
    NbButtonModule, 
    NbCardModule, 
    NbInputModule,
    FormsModule, 
    ReactiveFormsModule,
    NgSelectModule
    
  ]
})
export class QAccumulatedGoodsModule { }
