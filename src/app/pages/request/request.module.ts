import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestToTurnComponent } from './request-to-turn/request-to-turn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbAutocompleteModule, NbRadioModule, NbDatepickerModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../@components/components.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [
    RequestToTurnComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    NbAutocompleteModule,
    NbRadioModule,
    NbDatepickerModule.forRoot(),
    NbIconModule
  ],
  exports: [
   
  ]
})
export class RequestModule { }
