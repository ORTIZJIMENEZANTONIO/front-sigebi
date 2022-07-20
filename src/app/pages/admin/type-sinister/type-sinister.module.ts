import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeSinisterRoutingModule } from './type-sinister-routing.module';
import { TypeSinisterDetailComponent } from './type-sinister-detail/type-sinister-detail.component';
import { AdminModule } from '../admin.module';
import {TypeSinisterListComponent} from './type-sinister-list/type-sinister-list.component';

@NgModule({
  declarations: [
    TypeSinisterListComponent,
    TypeSinisterDetailComponent
  ],
  imports: [
    CommonModule,
    TypeSinisterRoutingModule,
     AdminModule
  ]
})
export class TypeSinisterModule { }
