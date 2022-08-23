import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotaryRoutingModule } from './notary-routing.module';
import { NotaryListComponent } from './notary-list/notary-list.component';
import { NotaryDetailComponent } from './notary-detail/notary-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    NotaryListComponent,
    NotaryDetailComponent
  ],
  imports: [
    CommonModule,
    NotaryRoutingModule,
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
export class NotaryModule { }
