import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoGoodsTypeSubtypeListComponent } from './info-goods-type-subtype-list/info-goods-type-subtype-list.component';

const routes: Routes = [
  {
    path: '', component: InfoGoodsTypeSubtypeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoGoodsTypeSubtypeRoutingModule { }
