import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelvesRoutingModule } from './shelves-routing.module';
import { ShelvesListComponent } from './shelves-list/shelves-list.component';
import { ShelvesDetailComponent } from './shelves-detail/shelves-detail.component';

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
    ShelvesListComponent,
    ShelvesDetailComponent
  ],
  imports: [
    CommonModule,
    ShelvesRoutingModule,
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
export class ShelvesModule { }
