import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BatteryRoutingModule } from './battery-routing.module';
import { BatteryListComponent } from './battery-list/battery-list.component';
import { BatteryDetailComponent } from './battery-detail/battery-detail.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    BatteryListComponent,
    BatteryDetailComponent
  ],
  imports: [
    CommonModule,
    BatteryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ThemeModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbAutocompleteModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class BatteryModule { }
