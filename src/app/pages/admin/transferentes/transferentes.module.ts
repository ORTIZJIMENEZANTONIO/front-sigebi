import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferentesRoutingModule } from './transferentes-routing.module';
import { TransferentesListComponent } from './transferentes-list/transferentes-list.component';
import { TransferentesDetailComponent } from './transferentes-detail/transferentes-detail.component';


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
    TransferentesListComponent,
    TransferentesDetailComponent
  ],
  imports: [
    CommonModule,
    TransferentesRoutingModule,
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
export class TransferentesModule { }
