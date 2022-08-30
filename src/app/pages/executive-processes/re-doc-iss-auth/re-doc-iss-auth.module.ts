import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import { ReDocIssAuthRoutingModule } from './re-doc-iss-auth-routing.module';
import { ReDocIssAuthDetailComponent } from './re-doc-iss-auth-detail/re-doc-iss-auth-detail.component';
import { ReDocIssAuthListComponent } from './re-doc-iss-auth-list/re-doc-iss-auth-list.component';


@NgModule({
  declarations: [
    ReDocIssAuthDetailComponent,
    ReDocIssAuthListComponent
  ],
  imports: [
    CommonModule,
    ReDocIssAuthRoutingModule,
    ComponentsModule
  ]
})
export class ReDocIssAuthModule { }
