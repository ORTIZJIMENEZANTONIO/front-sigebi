import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeServiceListComponent } from './type-service-list/type-service-list.component';

const routes: Routes = [{
  path: '',
  component: TypeServiceListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeServicesRoutingModule { }
