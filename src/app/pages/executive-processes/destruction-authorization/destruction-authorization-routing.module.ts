import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';

import { DestructionAuthorizationListComponent } from './destruction-authorization-list/destruction-authorization-list.component';



const routes: Routes = [
  {
    path: '', component: DestructionAuthorizationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestructionAuthorizationRoutingModule { }
