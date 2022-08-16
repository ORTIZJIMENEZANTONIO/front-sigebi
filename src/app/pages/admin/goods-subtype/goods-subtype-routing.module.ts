import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsSubtypeListComponent } from './goods-subtype-list/goods-subtype-list.component';

const routes: Routes = [
  { path: '', component: GoodsSubtypeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsSubtypeRoutingModule { }
