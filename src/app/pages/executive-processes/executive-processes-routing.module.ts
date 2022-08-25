import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExecutiveProcessesComponent } from './executive-processes.component';

const routes: Routes = [
  {  
    path: '', pathMatch: 'prefix', component: ExecutiveProcessesComponent, children: [
      {
        path: 'a-accumulated-assets', loadChildren: () => import('./a-accumulated-assets/a-accumulated-assets.module')
        .then(m => m.AAccumulatedAssetsModule)
      },
      {
        path: 'q-accumulated-goods', loadChildren: () => import('./q-accumulated-goods/q-accumulated-goods.module')
        .then(m => m.QAccumulatedGoodsModule)
      },
      {
        path: 'destruction-auth-management', loadChildren: () => import('./destruction-auth-management/destruction-auth-management.module')
        .then(m => m.DestructionAuthManagementModule)
      },
      {
        path: 'destruction-authorization', loadChildren: () => import('./destruction-authorization/destruction-authorization.module')
        .then(m => m.DestructionAuthorizationModule)
      },
      {
        path: 'donation-approval', loadChildren: () => import('./donation-approval/donation-approval.module')
        .then(m => m.DonationApprovalModule)
      },
      {
        path: 'approval-destination', loadChildren: () => import('./approval-destination/approval-destination.module')
        .then(m => m.ApprovalDestinationModule)
      },
      {
        path: 'inf-A-Insured-Seizures-aband', loadChildren: () => import('./inf-A-Insured-Seizures-aband/inf-A-Insured-Seizures-aband.module')
        .then(m => m.InfAInsuredSeizuresAbandModule)
      },
      {
        path: 'info-goods-type-subtype', loadChildren: () => import('./info-goods-type-subtype/info-goods-type-subtype.module')
        .then(m => m.InfoGoodsTypeSubtypeModule)
      },
      {
        path: 'sim-doc-Recep-Int', loadChildren: () => import('./sim-doc-Recep-Int/sim-doc-Recep-Int.module')
        .then(m => m.SimDocRecepIntModule)
      },
      {
        path: 're-docs-x-sera', loadChildren: () => import('./re-docs-x-sera/re-docs-x-sera.module')
        .then(m => m.ReDocsXSERAModule)
      },
      {
        path: 're-doc-iss-auth', loadChildren: () => import('./re-doc-iss-auth/re-doc-iss-auth.module')
        .then(m => m.ReDocIssAuthModule)
      },
      {
        path: 'daily-rec-files', loadChildren: () => import('./daily-rec-files/daily-rec-files.module')
        .then(m => m.DailyRecFilesModule)
      },
      {
        path: 'doc-re-des-area', loadChildren: () => import('./doc-re-des-area/doc-re-des-area.module')
        .then(m => m.DocReDesAreaModule)
      },
      {
        path: 'total-doc-received', loadChildren: () => import('./total-doc-received/total-doc-received.module')
        .then(m => m.TotalDocReceivedModule)
      },
      {
        path: 'assets-rec-admin', loadChildren: () => import('./assets-rec-admin/assets-rec-admin.module')
        .then(m => m.AssetsRecAdminModule)
      },
      {
        path: 'mass-app-val-upd', loadChildren: () => import('./mass-app-val-upd/mass-app-val-upd.module')
        .then(m => m.MassAppValUpdModule)
      },
    
    ]
  },
  

]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutiveProcessesRoutingModule { }

export const routedComponents = [
  ExecutiveProcessesComponent,
];