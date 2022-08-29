import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import { DestructionAuthorizationRoutingModule } from './destruction-authorization-routing.module';
import { DestructionAuthorizationDetailComponent } from './destruction-authorization-detail/destruction-authorization-detail.component';
import { DestructionAuthorizationListComponent } from './destruction-authorization-list/destruction-authorization-list.component';


@NgModule({
  declarations: [
    DestructionAuthorizationDetailComponent,
    DestructionAuthorizationListComponent
  ],
  imports: [
    CommonModule,
    DestructionAuthorizationRoutingModule,
    ComponentsModule
  ]
})
export class DestructionAuthorizationModule { }
