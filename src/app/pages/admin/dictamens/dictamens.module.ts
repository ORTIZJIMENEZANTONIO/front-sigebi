import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictamensRoutingModule } from './dictamens-routing.module';
import { DictamentListComponent } from './dictament-list/dictament-list.component';
import { DictamentDetailComponent } from './dictament-detail/dictament-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    DictamentListComponent,
    DictamentDetailComponent
  ],
  imports: [
    CommonModule,
    DictamensRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class DictamensModule { }
