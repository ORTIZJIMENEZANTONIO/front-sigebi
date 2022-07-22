import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeWarehousesListComponent } from './type-warehouses-list/type-warehouses-list.component';

const routes: Routes = [
  {
    path: '',component:TypeWarehousesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeWarehousesRoutingModule { }
