import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntfedListComponent } from './entfed-list/entfed-list.component';

const routes: Routes = [
  {
    path: '',component: EntfedListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntfedRoutingModule { }
