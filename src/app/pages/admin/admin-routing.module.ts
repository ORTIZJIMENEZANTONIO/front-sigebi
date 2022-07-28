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
      }
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