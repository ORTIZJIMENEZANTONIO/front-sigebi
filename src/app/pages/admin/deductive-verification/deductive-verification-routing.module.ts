import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeductiveVerificationListComponent } from './deductive-verification-list/deductive-verification-list.component';

const routes: Routes = [
  {
    path: '', component: DeductiveVerificationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeductiveVerificationRoutingModule { }
