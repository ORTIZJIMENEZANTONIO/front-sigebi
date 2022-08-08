import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdosXCoorRoutingModule } from './edos-x-coor-routing.module';
import { EdosXCoorListComponent } from './edos-x-coor-list/edos-x-coor-list.component';
import { EdosXCoorDetailComponent } from './edos-x-coor-detail/edos-x-coor-detail.component';


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
    EdosXCoorListComponent,
    EdosXCoorDetailComponent
  ],
  imports: [
    CommonModule,
    EdosXCoorRoutingModule,

    FormsModule,
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
    MatInputModule,
    MatFormFieldModule
  ]
})
export class EdosXCoorModule { }
