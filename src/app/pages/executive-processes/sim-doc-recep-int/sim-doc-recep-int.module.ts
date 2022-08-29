import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module'; 

import { SimDocRecepIntRoutingModule } from './sim-doc-recep-int-routing.module';
import { SimDocRecepIntDetailComponent } from './sim-doc-recep-int-detail/sim-doc-recep-int-detail.component';
import { SimDocRecepIntListComponent } from './sim-doc-recep-int-list/sim-doc-recep-int-list.component';


@NgModule({
  declarations: [
    SimDocRecepIntDetailComponent,
    SimDocRecepIntListComponent
  ],
  imports: [
    CommonModule,
    SimDocRecepIntRoutingModule,
    ComponentsModule
  ]
})
export class SimDocRecepIntModule { }
