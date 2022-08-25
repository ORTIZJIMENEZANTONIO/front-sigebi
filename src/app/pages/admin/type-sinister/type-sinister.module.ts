import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeSinisterRoutingModule } from './type-sinister-routing.module';
import { TypeSinisterDetailComponent } from './type-sinister-detail/type-sinister-detail.component';
import { AdminModule } from '../admin.module';
import {TypeSinisterListComponent} from './type-sinister-list/type-sinister-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
  declarations: [
    TypeSinisterListComponent,
    TypeSinisterDetailComponent
  ],
  imports: [
    CommonModule,
    TypeSinisterRoutingModule,
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
export class TypeSinisterModule { }
