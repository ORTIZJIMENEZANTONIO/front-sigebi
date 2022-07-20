import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeSinisterRoutingModule } from './type-sinister-routing.module';
import { TypeSinisterDetailComponent } from './type-sinister-detail/type-sinister-detail.component';


@NgModule({
  declarations: [
    TypeSinisterDetailComponent
  ],
  imports: [
    CommonModule,
    TypeSinisterRoutingModule
  ]
})
export class TypeSinisterModule { }
