import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { IfaiSerieRoutingModule } from './ifai-serie-routing.module';
import { IfaiSerieListComponent } from './ifai-serie-list/ifai-serie-list.component';
import { IfaiSerieDetailComponent } from './ifai-serie-detail/ifai-serie-detail.component';


@NgModule({
  declarations: [
    IfaiSerieListComponent,
    IfaiSerieDetailComponent
  ],
  imports: [
    CommonModule,
    IfaiSerieRoutingModule,
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
export class IfaiSerieModule { }
