import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegendsComponent } from './legends.component';
import { OfficialLegendsListComponent } from './official-legends-list/official-legends-list.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'prefix', component: LegendsComponent, children: [
      /*
      {
        path: 'home', loadChildren: () => import('./categories/categories.module')
          .then(m => m.CategoriesModule)
      }*/
      { path: 'official', component: OfficialLegendsListComponent },//ok
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegendsRoutingModule { }

export const routedComponents = [
  LegendsComponent,
  OfficialLegendsListComponent,
];