import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailboxStatusListComponent } from './mailbox-status-list/mailbox-status-list.component';

const routes: Routes = [
  {
    path: '',component: MailboxStatusListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailboxStatusRoutingModule { }
