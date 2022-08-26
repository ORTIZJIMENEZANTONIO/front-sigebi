import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawersRoutingModule } from './drawers-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DrawerDetailComponent } from './drawer-detail/drawer-detail.component';
import { DrawerListComponent } from './drawer-list/drawer-list.component';


@NgModule({
  declarations: [DrawerDetailComponent,DrawerListComponent],
  imports: [
    CommonModule,
    DrawersRoutingModule,
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
export class DrawersModule { }
