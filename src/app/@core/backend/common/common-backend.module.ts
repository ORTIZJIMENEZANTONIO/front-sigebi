import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';

//import { CommonBackendRoutingModule } from './common-backend-routing.module';

import { GoodScheduleApi } from './api/good-scheduler.api';
import { ImageCategoryApi } from'./api/image-category.api';
import { HttpService } from './api/http.service';

import { ImageCategoryService } from './services/image-category.service';
import { CategoryApi } from './api/category.api';
import { CategoryService } from './services/category.service';

import { LegendsService } from './services/legends.service';
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
import { StateOfRepublicService } from './services/StateOFRepublic.service';
import { LawyerService } from './services/lawyer.service';
import { SettlementService } from './services/settlement.service';
import { SiabClasificationService } from './services/siab-clasification.service';
import { FractionsService } from './services/fractions.service';
import { TypeWarehouseService } from './services/typeWarehouses.service';
import { DeductiveVerificationService } from './services/deductive-verification.service';
import { DelegationStateService } from './services/delegation-state.service';
import { RegionalDelegationService } from './services/regional-delegation.service';
import { GeneralStatusService } from './services/general-status.service';
import { WarehouseService } from './services/warehouse.service';
import { TypeSettelementService } from './services/typeSettelement.service';
import { TypeGoodstService } from './services/typeGoods.service';
import { TypeDoctoService } from './services/typeDocto.service';
import { StatusTransferService } from './services/statusTrasnsfer.service';
import { MailboxService } from './services/mailbox.service';
import { TypeServicesService } from './services/typeServices.service';
import { TypeRelevantService } from './services/typerelevant.service';
import { TransferentesService } from './services/transferentes.service';
import { TypeOrderServiceService } from './services/type-order-services.service';
import { OfficesService } from './services/offices.service';
import { GranteesService } from './services/grantees.service';
import { EdosxcoorService } from './services/edos-x-coor.service';
import { CityService } from './services/city.service';
import { ClaimConclusionService } from './services/claim-conclusion.service';
import { CourtService } from './services/court.service';
import { DelegationService } from './services/delegation.service';
import { DetailDelegationService } from './services/detail-delegation.service';
import { HalfImageService } from './services/half-image.service';
import { LockerService } from './services/locker.service';
import { MediumPhotographyService } from './services/medium-photography.service';
import { NotaryService } from './services/notary.service';
import { PaymentsConceptService } from './services/payments-concept.service';
import { ProficientService } from './services/proficient.service';
import { SubdelegationService } from './services/subdelegation.service';
import { StorehouseService } from './services/storehouse.service';



const API = [
  CategoryApi,
  ImageCategoryApi,
  GoodScheduleApi,
  HttpService,
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
  StationService,
  StateOfRepublicService,
  LawyerService,
  SettlementService,
  SiabClasificationService,
  FractionsService,
  TypeWarehouseService,
  DeductiveVerificationService,
  DelegationStateService,
  RegionalDelegationService,
  GeneralStatusService,
  WarehouseService,
  TypeSettelementService,
  TypeGoodstService,
  TypeDoctoService,
  StatusTransferService,
  MailboxService,
  TypeServicesService,
  TypeRelevantService,
  TransferentesService,
  TypeOrderServiceService,
  OfficesService,
  GranteesService,
  EdosxcoorService,
  StationService,
  CategoryService,
  ImageCategoryService,
  LegendsService,
  ParagraphsService,
  CityService,
  DelegationService,
  SubdelegationService,
  DetailDelegationService,
  PaymentsConceptService,
  NotaryService,
  LockerService,
  ProficientService,
  ClaimConclusionService,
  CourtService,
  HalfImageService,
  MediumPhotographyService,
  StorehouseService
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
