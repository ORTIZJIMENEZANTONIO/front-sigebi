import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestToTurnComponent } from './request-to-turn/request-to-turn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbAutocompleteModule, NbRadioModule, NbDatepickerModule, NbIconModule, NbCheckboxModule, NbTabsetModule, NbActionsModule, NbButtonGroupModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../@components/components.module';
import { ThemeModule } from '../../@theme/theme.module';
import { TurnRequestComponent } from './turn-request/turn-request.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { RealStateOfTheTransferorComponent } from './real-state-of-the-transferor/real-state-of-the-transferor.component';
import { AddressesOfTheRequestComponent } from './addresses-of-the-request/addresses-of-the-request.component';
import { MassiveClassificationComponent } from './massive-classification/massive-classification.component';
@NgModule({
  declarations: [
    RequestToTurnComponent,
    TurnRequestComponent,
    CreateRequestComponent,
    RealStateOfTheTransferorComponent,
    AddressesOfTheRequestComponent,
    MassiveClassificationComponent
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
    NbIconModule,
    NbCheckboxModule,
    NbTabsetModule,
    NbActionsModule,
    NbButtonGroupModule,
  ],
  exports: [
   
  ]
})
export class RequestModule { }
