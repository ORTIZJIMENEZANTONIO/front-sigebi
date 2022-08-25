import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { ComponentsModule } from '../../../@components/components.module';

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
  ]
})
export class QAccumulatedGoodsModule { }
