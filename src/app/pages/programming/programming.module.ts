import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ProgrammingRoutingModule, routedComponents } from './programming-routing.module';



@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbCardModule,
    ProgrammingRoutingModule,
    Ng2SmartTableModule,
  ]
})
export class ProgrammingModule { }
