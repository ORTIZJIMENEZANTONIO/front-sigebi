import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SatsaeClassificationRoutingModule } from './satsae-classification-routing.module';
import { SatsaeClassificationListComponent } from './satsae-classification-list/satsae-classification-list.component';
import { SatsaeClassificationDetailComponent } from './satsae-classification-detail/satsae-classification-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    SatsaeClassificationListComponent,
    SatsaeClassificationDetailComponent
  ],
  imports: [
    CommonModule,
    SatsaeClassificationRoutingModule,
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
export class SatsaeClassificationModule { }
