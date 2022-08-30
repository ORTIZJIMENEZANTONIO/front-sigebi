import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QAccumulatedGoodsListComponent } from './q-accumulated-goods-list/q-accumulated-goods-list.component';

const routes: Routes = [
  {
    path: '', component: QAccumulatedGoodsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QAccumulatedGoodsRoutingModule { }
