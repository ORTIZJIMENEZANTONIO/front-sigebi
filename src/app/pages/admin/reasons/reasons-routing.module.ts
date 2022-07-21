import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReasonsComponent } from './reasons.component';
import { NonDeliveryReasonsListComponent } from './non-delivery-reasons-list/non-delivery-reasons-list.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'prefix', component: ReasonsComponent, children: [
      { path: 'non-delivery-reasons', component: NonDeliveryReasonsListComponent },//ok
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReasonsRoutingModule { }
export const routedComponents = [
  ReasonsComponent,
  NonDeliveryReasonsListComponent,
];
