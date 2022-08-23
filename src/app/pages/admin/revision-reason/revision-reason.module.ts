import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionReasonRoutingModule } from './revision-reason-routing.module';
import { RevisionReasonListComponent } from './revision-reason-list/revision-reason-list.component';
import { RevisionReasonDetailComponent } from './revision-reason-detail/revision-reason-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    RevisionReasonListComponent,
    RevisionReasonDetailComponent
  ],
  imports: [
    CommonModule,
    RevisionReasonRoutingModule,
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
export class RevisionReasonModule { }
