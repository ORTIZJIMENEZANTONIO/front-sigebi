import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main.component';
import {CategoriesComponent} from './categories/categories.component';

/*
const routes: Routes = [
  {
    path: '', canActivate: [AuthGuardService], pathMatch: 'prefix', component: MainComponent, children: [
      { path: 'home', loadChildren: './home-categories/home-categories.module#HomeCategoriesModule' },
      { path: 'browse', loadChildren: './browsing/browsing.module#BrowsingModule' },
      { path: 'categories/:id', loadChildren: './shop_by/shop-by.module#ShopByModule' },
      { path: 'newAuction', loadChildren: './new-auction/new-auction.module#NewAuctionModule' },
      { path: 'items/:id', loadChildren: './item-page/item-page.module#ItemPageModule' },
      { path: 'dashboard', loadChildren: './user-dashboard/user-dashboard.module#UserDashboardModule' },
      { path: 'messaging', loadChildren: './messaging/messaging.module#MessagingModule' },
    ]
  }
];
*/
const routes: Routes = [
  {
    path: '', pathMatch: 'prefix',component: MainComponent, children: [
      //{ path: 'home', loadChildren: './categories/categories.module#CategoriesModule' },
      {
        path: 'home', loadChildren: () => import('./categories/categories.module')
          .then(m => m.CategoriesModule)}
      //{ path: 'home', component: CategoriesComponent },//ok
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
