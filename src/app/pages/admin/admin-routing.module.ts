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