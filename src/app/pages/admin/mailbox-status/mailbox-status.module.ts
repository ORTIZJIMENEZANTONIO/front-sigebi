import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailboxStatusRoutingModule } from './mailbox-status-routing.module';
import { MailboxStatusDetailComponent } from './mailbox-status-detail/mailbox-status-detail.component';
import { MailboxStatusListComponent } from './mailbox-status-list/mailbox-status-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    MailboxStatusDetailComponent,
    MailboxStatusListComponent
  ],
  imports: [
    CommonModule,
    MailboxStatusRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule
  ]
})
export class MailboxStatusModule { }
