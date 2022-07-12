import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogsComponent } from './catalogs.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'prefix', component: CatalogsComponent, children: [
      /*
      {
        path: 'home', loadChildren: () => import('./categories/categories.module')
          .then(m => m.CategoriesModule)
      }*/
      { path: 'categories', component: CategoryListComponent },//ok
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogsRoutingModule { }

export const routedComponents = [
  CatalogsComponent,
  CategoryListComponent,
];