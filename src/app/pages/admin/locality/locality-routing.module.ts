import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalityListComponent } from './locality-list/locality-list.component';

const routes: Routes = [
  {
    path: '', component: LocalityListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalityRoutingModule { }
