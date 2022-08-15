import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RAsuntDicRoutingModule } from './r-asunt-dic-routing.module';
import { RAsuntDicListComponent } from './r-asunt-dic-list/r-asunt-dic-list.component';
import { RAsuntDicDetailComponent } from './r-asunt-dic-detail/r-asunt-dic-detail.component';


@NgModule({
  declarations: [
    RAsuntDicListComponent,
    RAsuntDicDetailComponent
  ],
  imports: [
    CommonModule,
    RAsuntDicRoutingModule
  ]
})
export class RAsuntDicModule { }
