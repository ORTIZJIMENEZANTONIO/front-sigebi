import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import { AAccumulatedAssetsRoutingModule } from './a-accumulated-assets-routing.module';
import { AAccumulatedAssetsDetailComponent } from './a-accumulated-assets-detail/a-accumulated-assets-detail.component';
import { AAccumulatedAssetsListComponent } from './a-accumulated-assets-list/a-accumulated-assets-list.component';


@NgModule({
  declarations: [
    AAccumulatedAssetsDetailComponent,
    AAccumulatedAssetsListComponent
  ],
  imports: [
    CommonModule,
    AAccumulatedAssetsRoutingModule,
    ComponentsModule,
  ]
})
export class AAccumulatedAssetsModule { }
