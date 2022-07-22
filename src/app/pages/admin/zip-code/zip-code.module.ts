import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZipCodeRoutingModule } from './zip-code-routing.module';
import { ZipCodeListComponent } from './zip-code-list/zip-code-list.component';
import { ZipCodeDetailComponent } from './zip-code-detail/zip-code-detail.component';


@NgModule({
  declarations: [
    ZipCodeListComponent,
    ZipCodeDetailComponent
  ],
  imports: [
    CommonModule,
    ZipCodeRoutingModule
  ]
})
export class ZipCodeModule { }
