import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRelevantRoutingModule } from './type-relevant-routing.module';
import { TypeRelevantDetailComponent } from './type-relevant-detail/type-relevant-detail.component';
import { TypeRelevantListComponent } from './type-relevant-list/type-relevant-list.component';


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
    TypeRelevantDetailComponent,
    TypeRelevantListComponent
  ],
  imports: [
    CommonModule,
    TypeRelevantRoutingModule,
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
export class TypeRelevantModule { }
