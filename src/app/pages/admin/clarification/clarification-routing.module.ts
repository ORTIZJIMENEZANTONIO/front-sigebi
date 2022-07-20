import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClarificationListComponent } from './clarification-list/clarification-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClarificationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClarificationRoutingModule { }
