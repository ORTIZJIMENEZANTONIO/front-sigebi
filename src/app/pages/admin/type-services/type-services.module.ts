import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeServicesRoutingModule } from './type-services-routing.module';
import { TypeServiceListComponent } from './type-service-list/type-service-list.component';
import { TypeServiceDetailComponent } from './type-service-detail/type-service-detail.component';
import { AdminModule } from '../admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    TypeServiceListComponent,
    TypeServiceDetailComponent
  ],
  imports: [
    CommonModule,
    TypeServicesRoutingModule,
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
export class TypeServicesModule { }
