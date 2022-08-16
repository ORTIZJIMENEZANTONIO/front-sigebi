import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsSubtypeRoutingModule } from './goods-subtype-routing.module';
import { GoodsSubtypeListComponent } from './goods-subtype-list/goods-subtype-list.component';
import { GoodsSubtypeDetailComponent } from './goods-subtype-detail/goods-subtype-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    GoodsSubtypeListComponent,
    GoodsSubtypeDetailComponent
  ],
  imports: [
    CommonModule,
    GoodsSubtypeRoutingModule,
    AdminModule
  ]
})
export class GoodsSubtypeModule { }
