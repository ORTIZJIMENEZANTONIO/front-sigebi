import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinpubRoutingModule } from './minpub-routing.module';
import { MinpubListComponent } from './minpub-list/minpub-list.component';
import { MinpubDetailComponent } from './minpub-detail/minpub-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    MinpubListComponent,
    MinpubDetailComponent
  ],
  imports: [
    CommonModule,
    MinpubRoutingModule,
    AdminModule
  ]
})
export class MinpubModule { }
