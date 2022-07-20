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
import { DeductiveService } from './services/deductive.service';
import { DeductiveApi } from './api/deductive.api';
import { Dictamenservice } from './services/dictamen.service';
import { DictamentApi } from './api/dictamens.api';

const API = [
  CategoryApi,
  ImageCategoryApi,
  GoodScheduleApi,
  HttpService,
   LegendsApi,
    ParagraphsApi,
    DeductiveApi,
    DictamentApi
  ];

const SERVICES = [
  //{ provide: GoodScheduleData, useClass: GoodScheduleService },
  //{ provide: ImageCategoryData, useClass: ImageCategoryService }
  CategoryService,
  ImageCategoryService,
  LegendsService,
  ParagraphsService,
  DeductiveService,
  Dictamenservice
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
