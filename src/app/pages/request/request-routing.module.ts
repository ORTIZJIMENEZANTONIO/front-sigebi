import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestToTurnComponent } from './request-to-turn/request-to-turn.component';

const routes: Routes = [
  {
    path:'request-to-turn',
    component:RequestToTurnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
