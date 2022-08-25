import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { ExecutiveProcessesRoutingModule, routedComponents } from './executive-processes-routing.module';

import { ComponentsModule } from '../../@components/components.module';

@NgModule({ 
  declarations: [ 
    ...routedComponents, //pendiete de quitar
    
  ],
  imports: [
    CommonModule,
    ExecutiveProcessesRoutingModule,
    ComponentsModule
  ],
  exports:[
    
    ComponentsModule,
    
  ]
})
export class ExecutiveProcessesModule { }
