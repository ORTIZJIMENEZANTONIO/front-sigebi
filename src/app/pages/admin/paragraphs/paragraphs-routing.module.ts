import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParagraphsComponent } from './paragraphs.component';
import { ParagraphsListComponent } from './paragraphs-list/paragraphs-list.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'prefix', component: ParagraphsComponent, children: [
      { path: '', component: ParagraphsListComponent},//ok
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParagraphsRoutingModule { }

export const routedComponents = [
  ParagraphsComponent,
  ParagraphsListComponent,
];