import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffairSeraListComponent } from './affair-sera-list/affair-sera-list.component';

const routes: Routes = [
  {
    path:'',component:AffairSeraListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffairSeraRoutingModule { }
