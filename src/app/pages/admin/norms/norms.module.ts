import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbSelectModule, NbInputModule, NbWindowModule} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { NormsRoutingModule } from './norms-routing.module';
import { NormDetailComponent } from './norm-detail/norm-detail.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NormListComponent } from './norm-list/norm-list.component';


@NgModule({
  declarations: [
    NormDetailComponent,
    NormListComponent
  ],
  imports: [
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
    NormsRoutingModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class NormsModule { }
