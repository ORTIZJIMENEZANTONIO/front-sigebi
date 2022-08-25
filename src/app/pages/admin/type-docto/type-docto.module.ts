import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeDoctoRoutingModule } from './type-docto-routing.module';
import { TypeDoctoListComponent } from './type-docto-list/type-docto-list.component';
import { TypeDoctoDetailComponent } from './type-docto-detail/type-docto-detail.component';

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
    TypeDoctoListComponent,
    TypeDoctoDetailComponent
  ],
  imports: [
    CommonModule,
    TypeDoctoRoutingModule,
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
export class TypeDoctoModule { }
