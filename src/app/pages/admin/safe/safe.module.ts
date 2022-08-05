import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeRoutingModule } from './safe-routing.module';
import { SafeComponent } from './safe/safe.component';
import { SafeListComponent } from './safe-list/safe-list.component';
import { SafeDetailComponent } from './safe-detail/safe-detail.component';


@NgModule({
  declarations: [
    SafeComponent,
    SafeListComponent,
    SafeDetailComponent
  ],
  imports: [
    CommonModule,
    SafeRoutingModule
  ]
})
export class SafeModule { }
