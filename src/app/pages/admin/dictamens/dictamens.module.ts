import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictamensRoutingModule } from './dictamens-routing.module';
import { DictamentListComponent } from './dictament-list/dictament-list.component';
import { DictamentDetailComponent } from './dictament-detail/dictament-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule, NbAutocompleteModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
  declarations: [
    DictamentListComponent,
    DictamentDetailComponent
  ],
  imports: [
    CommonModule,
    DictamensRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    CommonModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule,
    NbAutocompleteModule
  ]
})
export class DictamensModule { }
