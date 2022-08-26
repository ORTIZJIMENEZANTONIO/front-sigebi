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
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MatSelectModule } from '@angular/material/select';

import { RackRoutingModule } from './rack-routing.module';
import { RackDetailComponent } from './rack-detail/rack-detail.component';
import { RackListComponent } from './rack-list/rack-list.component';


@NgModule({
  declarations: [
    RackDetailComponent,
    RackListComponent
  ],
  imports: [
    CommonModule,
    RackRoutingModule,
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
export class RackModule { }
