import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoccompensationSatXmlListComponent } from './doccompensation-sat-xml-list/doccompensation-sat-xml-list.component';

const routes: Routes = [
  {
    path: '',component: DoccompensationSatXmlListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoccompensationSatXmlRoutingModule { }
