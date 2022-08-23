import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OriginCisiRoutingModule } from './origin-cisi-routing.module';
import { OriginCisiListComponent } from './origin-cisi-list/origin-cisi-list.component';
import { OriginCisiDetailComponent } from './origin-cisi-detail/origin-cisi-detail.component';


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
    OriginCisiListComponent,
    OriginCisiDetailComponent
  ],
  imports: [
    CommonModule,
    OriginCisiRoutingModule,
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
export class OriginCisiModule { }
