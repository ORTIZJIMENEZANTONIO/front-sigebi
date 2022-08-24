import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IfaiSerieRoutingModule } from './ifai-serie-routing.module';
import { IfaiSerieListComponent } from './ifai-serie-list/ifai-serie-list.component';
import { IfaiSerieDetailComponent } from './ifai-serie-detail/ifai-serie-detail.component';


@NgModule({
  declarations: [
    IfaiSerieListComponent,
    IfaiSerieDetailComponent
  ],
  imports: [
    CommonModule,
    IfaiSerieRoutingModule
  ]
})
export class IfaiSerieModule { }
