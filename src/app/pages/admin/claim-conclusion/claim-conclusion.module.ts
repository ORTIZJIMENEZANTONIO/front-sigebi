import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimConclusionRoutingModule } from './claim-conclusion-routing.module';
import { ClaimConclusionListComponent } from './claim-conclusion-list/claim-conclusion-list.component';
import { ClaimConclusionDetailComponent } from './claim-conclusion-detail/claim-conclusion-detail.component';
import { AdminModule } from '../admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ClaimConclusionListComponent,
    ClaimConclusionDetailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    CommonModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    ClaimConclusionRoutingModule,
    MatPaginatorModule
  ]
})
export class ClaimConclusionModule { }
