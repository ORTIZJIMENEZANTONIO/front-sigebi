import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstRepuveRoutingModule } from './est-repuve-routing.module';
import { EstRepuveListComponent } from './est-repuve-list/est-repuve-list.component';
import { EstRepuveDetailComponent } from './est-repuve-detail/est-repuve-detail.component';

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
    EstRepuveListComponent,
    EstRepuveDetailComponent
  ],
  imports: [
    CommonModule,
    EstRepuveRoutingModule,
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
export class EstRepuveModule { }
