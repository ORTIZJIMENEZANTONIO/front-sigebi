import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferentesListComponent } from './transferentes-list/transferentes-list.component';

const routes: Routes = [
  {
    path: '',component: TransferentesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferentesRoutingModule { }
