import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdPartyCompanyRoutingModule } from './third-party-company-routing.module';
import { ThirdPartyCompanyListComponent } from './third-party-company-list/third-party-company-list.component';
import { ThirdPartyCompanyDetailComponent } from './third-party-company-detail/third-party-company-detail.component';


@NgModule({
  declarations: [
    ThirdPartyCompanyListComponent,
    ThirdPartyCompanyDetailComponent
  ],
  imports: [
    CommonModule,
    ThirdPartyCompanyRoutingModule
  ]
})
export class ThirdPartyCompanyModule { }
