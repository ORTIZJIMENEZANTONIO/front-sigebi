import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelOkeyRoutingModule } from './label-okey-routing.module';
import { LabelOkeyDetailComponent } from './label-okey-detail/label-okey-detail.component';
import { LabelOkeyListComponent } from './label-okey-list/label-okey-list.component';
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
    LabelOkeyDetailComponent,
    LabelOkeyListComponent
  ],
  imports: [
    CommonModule,
    LabelOkeyRoutingModule,
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
export class LabelOkeyModule { }
