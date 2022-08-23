import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodSituationRoutingModule } from './good-situation-routing.module';
import { GoodSituationListComponent } from './good-situation-list/good-situation-list.component';
import { GoodSituationDetailComponent } from './good-situation-detail/good-situation-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GoodSituationListComponent,
    GoodSituationDetailComponent
  ],
  imports: [
    CommonModule,
    GoodSituationRoutingModule,
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
export class GoodSituationModule { }
