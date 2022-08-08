import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsConceptListComponent } from './payments-concept-list/payments-concept-list.component';

const routes: Routes = [
  {
    path:'',
    component:PaymentsConceptListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsConceptRoutingModule { }
