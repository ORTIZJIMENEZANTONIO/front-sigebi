import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import { InfoGoodsTypeSubtypeRoutingModule } from './info-goods-type-subtype-routing.module';
import { InfoGoodsTypeSubtypeDetailComponent } from './info-goods-type-subtype-detail/info-goods-type-subtype-detail.component';
import { InfoGoodsTypeSubtypeListComponent } from './info-goods-type-subtype-list/info-goods-type-subtype-list.component';


@NgModule({
  declarations: [
    InfoGoodsTypeSubtypeDetailComponent,
    InfoGoodsTypeSubtypeListComponent
  ],
  imports: [
    CommonModule,
    InfoGoodsTypeSubtypeRoutingModule,
    ComponentsModule
  ]
})
export class InfoGoodsTypeSubtypeModule { }
