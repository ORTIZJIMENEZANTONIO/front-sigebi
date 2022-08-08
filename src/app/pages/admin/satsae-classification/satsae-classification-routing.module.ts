import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SatsaeClassificationListComponent } from './satsae-classification-list/satsae-classification-list.component';

const routes: Routes = [
  {
    path:'',
    component:SatsaeClassificationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SatsaeClassificationRoutingModule { }
