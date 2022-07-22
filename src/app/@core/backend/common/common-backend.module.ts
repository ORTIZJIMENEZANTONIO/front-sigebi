import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';

//import { CommonBackendRoutingModule } from './common-backend-routing.module';

import { GoodScheduleApi } from './api/good-scheduler.api';
import { ImageCategoryApi } from'./api/image-category.api';
import { HttpService } from './api/http.service';

import { ImageCategoryService } from './services/image-category.service';
import { CategoryApi } from './api/category.api';
import { CategoryService } from './services/category.service';

import { LegendsApi } from './api/legends.api';
import { LegendsService } from './services/legends.service';

import { ParagraphsApi } from './api/paragraphs.api';
import { ParagraphsService } from './services/paragraphs.service';

import { BankService } from './services/bank.service';
import { BatteryService } from './services/battery.service';
import { HolidayService } from './services/holiday.service';
import { DeductiveService } from './services/deductive.service';
import { ZipCodeService } from './services/zip-code.service';

import { DictamenService } from './services/dictamen.service';
import { CatalogApi } from './api/catalog-api';
import { SiniesterService } from './services/type-siniester.service';
import { ClarificationService } from './services/clarification.service';
import { NonDeliveryReasonsService } from './services/nonDeliveryReasons.service';
import { NormService } from './services/norm.service';
import { GenericService } from './services/generic.service';
import { StatusProcessService } from './services/statusProcess.service';
import { MunicipalityService } from './services/municipality.service';
import { LocalityService } from './services/locality.service';
import { StationService } from './services/station.service';

const API = [
  CategoryApi,
  ImageCategoryApi,
  GoodScheduleApi,
  HttpService,
  LegendsApi,
  ParagraphsApi,
  CatalogApi
];

const SERVICES = [
  CategoryService,
  ImageCategoryService,
  LegendsService,
  ParagraphsService,
  BankService,
  NonDeliveryReasonsService,
  NormService,
  GenericService,
  StatusProcessService,
  MunicipalityService,
  LocalityService,
  DeductiveService,
  DictamenService,
  SiniesterService,
  ClarificationService,
  BatteryService,
  HolidayService,
  ZipCodeService,
  StationService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //CommonBackendRoutingModule
  ],
  providers: [
    ...SERVICES,
  ],
})
export class CommonBackendModule { 
  static forRoot(): ModuleWithProviders<CommonBackendModule> {
    return {
      ngModule: CommonBackendModule,
      providers: [
        ...API,
        ...SERVICES,
      ],
    };
  }
}
