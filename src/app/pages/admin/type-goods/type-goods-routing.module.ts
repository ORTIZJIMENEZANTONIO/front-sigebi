import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeGoodListComponent } from './type-good-list/type-good-list.component';

const routes: Routes = [
  {
    path: '',component:TypeGoodListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeGoodsRoutingModule { }
