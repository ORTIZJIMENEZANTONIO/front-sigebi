import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeSettelementListComponent } from './type-settelement-list/type-settelement-list.component';

const routes: Routes = [{
  path: '',component:TypeSettelementListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeSettlementRoutingModule { }
