import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'prefix', component: AdminComponent, children: [
      {
        path: 'catalogs', loadChildren: () => import('./catalogs/catalogs.module')
          .then(m => m.CatalogsModule)
      },
      {
        path: 'legends', loadChildren: () => import('./legends/legends.module')
          .then(m => m.LegendsModule)
      },
      {
        path: 'paragraphs', loadChildren: () => import('./paragraphs/paragraphs.module')
          .then(m => m.ParagraphsModule)
      },
      {
        path: 'deductives', loadChildren: () => import('./deductives/deductives.module')
          .then(m => m.DeductivesModule)
      },
      {
        path: 'clarification', loadChildren: () => import('./clarification/clarification.module')
          .then(m => m.ClarificationModule)
      },
      {
        path: 'reasons', loadChildren: () => import('./reasons/reasons.module')
          .then(m => m.ReasonsModule)
      },
      {
        path: 'norms', loadChildren: () => import('./norms/norms.module')
          .then(m => m.NormsModule)
      },
      {
        path: 'fractions', loadChildren: () => import('./fractions/fractions.module')
          .then(m => m.FractionsModule)
      },
      {
        path: 'generics', loadChildren: () => import('./generics/generics.module')
          .then(m => m.GenericsModule)
      },
      {
        path: 'status-process', loadChildren: () => import('./status-process/status-process.module')
          .then(m => m.StatusProcessModule)
      },
      {
        path: 'municipalitys', loadChildren: () => import('./municipalitys/municipalitys.module')
          .then(m => m.MunicipalitysModule)
      },
      {
        path: 'localitys', loadChildren: () => import('./locality/locality.module')
          .then(m => m.LocalityModule)
      },
      {
        path: 'dictaments', loadChildren: () => import('./dictamens/dictamens.module')
          .then(m => m.DictamensModule)
      },
      {
        path: 'sinister', loadChildren: () => import('./type-sinister/type-sinister.module')
          .then(m => m.TypeSinisterModule)
      },
      {
        path: 'bank', loadChildren: () => import('./bank/bank.module')
          .then(m => m.BankModule)
      },
      {
        path: 'battery', loadChildren: () => import('./battery/battery.module')
          .then(m => m.BatteryModule)
      },
      {
        path: 'holiday', loadChildren: () => import('./holiday/holiday.module')
          .then(m => m.HolidayModule)
      },
      {
        path: 'zip-code', loadChildren: () => import('./zip-code/zip-code.module')
          .then(m => m.ZipCodeModule)
      },
      {
        path: 'station', loadChildren: () => import('./station/station.module')
          .then(m => m.StationModule)
      },
      {
        path: 'state-of-republic', loadChildren: () => import('./state-of-republic/state-of-republic.module')
          .then(m => m.StateOfRepublicModule)
      },
      {
        path: 'lawyer', loadChildren: () => import('./lawyer/lawyer.module')
          .then(m => m.LawyerModule)
      },
      {
        path: 'settlement', loadChildren: () => import('./settlement/settlement.module')
          .then(m => m.SettlementModule)
      },
      {
        path: 'siab-clasification', loadChildren: () => import('./siab-clasification/siab-clasification.module')
          .then(m => m.SiabClasificationModule)
      },
      {
        path: 'frantions', loadChildren: () => import('./fractions/fractions.module')
          .then(m => m.FractionsModule)
      },
      {
        path: 'typewarehouses', loadChildren: () => import('./type-warehouses/type-warehouses.module')
          .then(m => m.TypeWarehousesModule)
      },
      {
        path: 'deductive-verification', loadChildren: () => import('./deductive-verification/deductive-verification.module')
          .then(m => m.DeductiveVerificationModule)
      },
      {
        path: 'delegation-state', loadChildren: () => import('./delegation-state/delegation-state.module')
          .then(m => m.DelegationStateModule)
      },
      {
        path: 'regional-delegation', loadChildren: () => import('./regional-delegation/regional-delegation.module')
          .then(m => m.RegionalDelegationModule)
      },
      {
        path: 'general-status', loadChildren: () => import('./general-status/general-status.module')
          .then(m => m.GeneralStatusModule)
      },
      {
        path: 'warehouse', loadChildren: () => import('./warehouse/warehouse.module')
          .then(m => m.WarehouseModule)
      },
      {
        path: 'typesettelement', loadChildren: () => import('./type-settlement/type-settlement.module')
          .then(m => m.TypeSettlementModule)
      },
      {
        path: 'typegood', loadChildren: () => import('./type-goods/type-goods.module')
          .then(m => m.TypeGoodsModule)
      },
      {
        path: 'typedocto', loadChildren: () => import('./type-docto/type-docto.module')
          .then(m => m.TypeDoctoModule)
      },
      {
        path: 'statustransfer', loadChildren: () => import('./status-transfer/status-transfer.module')
          .then(m => m.StatusTransferModule)
      },
      {
        path: 'statusmailbox', loadChildren: () => import('./mailbox-status/mailbox-status.module')
          .then(m => m.MailboxStatusModule)
      },
      // {
      //   path: 'typeservices', loadChildren: () => import('./type-services/type-services.module')
      //     .then(m => m.TypeServicesModule)
      // },
      {
        path: 'typerelevant', loadChildren: () => import('./type-relevant/type-relevant.module')
          .then(m => m.TypeRelevantModule)
      },
      {
        path: 'transferentes', loadChildren: () => import('./transferentes/transferentes.module')
          .then(m => m.TransferentesModule)
      },
      {
        path: 'typeorderservices', loadChildren: () => import('./type-order-service/type-order-service.module')
          .then(m => m.TypeOrderServiceModule)
      },
      {
        path: 'offices', loadChildren: () => import('./offices/offices.module')
          .then(m => m.OfficesModule)
      },
      {
        path: 'grantees', loadChildren: () => import('./grantees/grantees.module')
          .then(m => m.GranteesModule)
      },
      {
        path: 'edosxcoor', loadChildren: () => import('./edos-x-coor/edos-x-coor.module')
          .then(m => m.EdosXCoorModule)
      },
      {
        path: 'station', loadChildren: () => import('./station/station.module')
          .then(m => m.StationModule)
      },
      {
        path: 'city', loadChildren: () => import('./city/city.module')
          .then(m => m.CityModule)
      },
      {
        path: 'delegation', loadChildren: () => import('./delegation/delegation.module')
          .then(m => m.DelegationModule)
      },
      {
        path: 'detail-delegation', loadChildren: () => import('./detail-delegation/detail-delegation.module')
          .then(m => m.DetailDelegationModule)
      },
      {
        path: 'subdelegation', loadChildren: () => import('./subdelegation/subdelegation.module')
          .then(m => m.SubdelegationModule)
      },
      {
        path: 'payments-concept', loadChildren: () => import('./payments-concept/payments-concept.module')
          .then(m => m.PaymentsConceptModule)
      },
      {
        path: 'notary', loadChildren: () => import('./notary/notary.module')
          .then(m => m.NotaryModule)
      },
      {
        path: 'proficient', loadChildren: () => import('./proficient/proficient.module')
          .then(m => m.ProficientModule)
      },
      {
        path: 'locker', loadChildren: () => import('./locker/locker.module')
          .then(m => m.LockerModule)
      },
      {
        path: 'court', loadChildren: () => import('./court/court.module')
          .then(m => m.CourtModule)
      },
      {
        path: 'claim-conclusion', loadChildren: () => import('./claim-conclusion/claim-conclusion.module')
          .then(m => m.ClaimConclusionModule)
      },
      {
        path: 'half-image', loadChildren: () => import('./half-image/half-image.module')
          .then(m => m.HalfImageModule)
      },
      {
        path: 'medium-photography', loadChildren: () => import('./medium-photography/medium-photography.module')
          .then(m => m.MediumPhotographyModule)
      },
      {
        path: 'departament', loadChildren: () => import('./departament/departament.module')
          .then(m => m.DepartamentModule)
      },
      {
        path: 'good-type', loadChildren: () => import('./good-type/good-type.module')
          .then(m => m.GoodTypeModule)
      },
      {
        path: 'good-subtype', loadChildren: () => import('./good-subtype/good-subtype.module')
          .then(m => m.GoodSubtypeModule)
      },
      {
        path: 'good-ssubtype', loadChildren: () => import('./good-ssubtype/good-ssubtype.module')
          .then(m => m.GoodSsubtypeModule)
      },
      {
        path: 'good-sssubtype', loadChildren: () => import('./good-sssubtype/good-sssubtype.module')
          .then(m => m.GoodSssubtypeModule)
      },
      {
        path: 'good-situation', loadChildren: () => import('./good-situation/good-situation.module')
          .then(m => m.GoodSituationModule)
      },
      {
        path: 'institution-classification', loadChildren: () => import('./institution-classification/institution-classification.module')
          .then(m => m.InstitutionClassificationModule)
      },
      {
        path: 'issuing-institution', loadChildren: () => import('./issuing-institution/issuing-institution.module')
          .then(m => m.IssuingInstitutionModule)
      },
      {
        path: 'minpub', loadChildren: () => import('./minpub/minpub.module')
          .then(m => m.MinpubModule)
      },
      {
        path: 'person', loadChildren: () => import('./person/person.module')
          .then(m => m.PersonModule)
      },
      {
        path: 'revision-reason', loadChildren: () => import('./revision-reason/revision-reason.module')
          .then(m => m.RevisionReasonModule)
      },
      {
        path: 'satsae-classification', loadChildren: () => import('./satsae-classification/satsae-classification.module')
          .then(m => m.SatsaeClassificationModule)
      },
      {
        path: 'storehouse', loadChildren: () => import('./storehouse/storehouse.module')
          .then(m => m.StorehouseModule)
      },
      {
        path: 'safe', loadChildren: () => import('./safe/safe.module')
          .then(m => m.SafeModule)
      },
      {
        path: 'question', loadChildren: () => import('./question/question.module')
          .then(m => m.QuestionModule)
      },
      {
        path: 'origin', loadChildren: () => import('./origin/origin.module')
          .then(m => m.OriginModule)
      },
      {
        path: 'regulatory', loadChildren: () => import('./regulatory/regulatory.module')
          .then(m => m.RegulatoryModule)
      },
      {
        path: 'batch',
        loadChildren: () => import('./batch/batch.module')
          .then(m => m.BatchModule),
      },
      {
        path: 'status-code',
        loadChildren: () => import('./status-code/status-code.module')
          .then(m => m.StatusCodeModule),
      },
      {
        path: 'save-values', loadChildren: () => import('./save-values/save-values.module')
          .then(m => m.SaveValuesModule)
      },
      {
        path: 'identifier', loadChildren: () => import('./identifier/identifier.module')
          .then(m => m.IdentifierModule)
      },
      {
        path: 'indiciados', loadChildren: () => import('./indiciados/indiciados.module')
          .then(m => m.IndiciadosModule)
      },
      {
        path: 'opinion', loadChildren: () => import('./opinion/opinion.module')
          .then(m => m.OpinionModule)
      },
      {
        path: 'penalty', loadChildren: () => import('./penalty/penalty.module')
          .then(m => m.PenaltyModule)
      },
      {
        path: 'goods-subtype', loadChildren: () => import('./goods-subtype/goods-subtype.module')
          .then(m => m.GoodsSubtypeModule)
      },
      {
        path: 'sat-subclasification', loadChildren: () => import('./sat-subclasification/sat-subclasification.module')
          .then(m => m.SatSubclasificationModule)
      },
      {
        path: 'sat-clasification', loadChildren: () => import('./sat/sat-classificacion/sat-classificacion.module')
          .then(m => m.SatClassificacionModule)
      },
      {
        path: 'legal-support', loadChildren: () => import('./legal-support/legal-support.module')
          .then(m => m.LegalSupportModule)
      },
      {
        path: 'origin-cisi', loadChildren: () => import('./origin-cisi/origin-cisi.module')
          .then(m => m.OriginCisiModule)
             
      },
      {
        path: 'score', loadChildren: () => import('./score/score.module')
          .then(m => m.ScoreModule) 
      },
      {
        path: 'indicator-report', loadChildren: () => import('./indicator-report/indicator-report.module')
          .then(m => m.IndicatorReportModule) 
      },
      {
        path: 'r-asunt-dic', loadChildren: () => import('./r-asunt-dic/r-asunt-dic.module')
          .then(m => m.RAsuntDicModule) 
      },
      //{ path: 'home', component: CategoriesComponent },//ok
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const routedComponents = [
  AdminComponent,
];