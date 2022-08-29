import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import { DestructionAuthManagementRoutingModule } from './destruction-auth-management-routing.module';
import { DestructionAuthManagementDetailComponent } from './destruction-auth-management-detail/destruction-auth-management-detail.component';
import { DestructionAuthManagementListComponent } from './destruction-auth-management-list/destruction-auth-management-list.component';


@NgModule({
  declarations: [
    DestructionAuthManagementDetailComponent,
    DestructionAuthManagementListComponent
  ],
  imports: [
    CommonModule,
    DestructionAuthManagementRoutingModule,
    ComponentsModule
  ]
})
export class DestructionAuthManagementModule { }
