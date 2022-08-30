import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffairSeraRoutingModule } from './affair-sera-routing.module';
import { AffairSeraListComponent } from './affair-sera-list/affair-sera-list.component';
import { AffairSeraDetailComponent } from './affair-sera-detail/affair-sera-detail.component';

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
    AffairSeraListComponent,
    AffairSeraDetailComponent
  ],
  imports: [
    CommonModule,
    AffairSeraRoutingModule,
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
export class AffairSeraModule { }
