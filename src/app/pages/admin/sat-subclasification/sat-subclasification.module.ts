import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SatSubclasificationRoutingModule } from './sat-subclasification-routing.module';
import { SatSubclasificationListComponent } from './sat-subclasification-list/sat-subclasification-list.component';
import { SatSubclasificationDetailComponent } from './sat-subclasification-detail/sat-subclasification-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule, NbAutocompleteModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    SatSubclasificationListComponent,
    SatSubclasificationDetailComponent
  ],
  imports: [
    CommonModule,
    SatSubclasificationRoutingModule,
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
    NbAutocompleteModule
  ]
})
export class SatSubclasificationModule { }
