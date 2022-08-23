import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstRepuveListComponent } from './est-repuve-list/est-repuve-list.component';

const routes: Routes = [
  {
    path: '',component: EstRepuveListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstRepuveRoutingModule { }
