import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodTypeListComponent } from './good-type-list/good-type-list.component';

const routes: Routes = [
  {
    path:'',
    component:GoodTypeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodTypeRoutingModule { }
