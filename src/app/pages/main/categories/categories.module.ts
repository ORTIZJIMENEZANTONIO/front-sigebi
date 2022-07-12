import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { RouterModule, Routes } from "@angular/router";
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { RecomendationsComponent } from './recomendations/recomendations.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoriesComponent } from './categories.component';


const routes: Routes = [
  { path: '', component: CategoriesComponent }
];

@NgModule({
  declarations: [
    CategoriesComponent,
    SubcategoriesComponent,
    RecomendationsComponent,
    CategoryItemComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule,
    RouterModule.forChild(routes),
  ]
})
export class CategoriesModule { }
