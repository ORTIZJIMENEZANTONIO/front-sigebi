import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodSsubtypeListComponent } from './good-ssubtype-list/good-ssubtype-list.component';

const routes: Routes = [
  {
    path:'',
    component:GoodSsubtypeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodSsubtypeRoutingModule { }
