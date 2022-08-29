import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-assets-rec-admin-list',
  templateUrl: './assets-rec-admin-list.component.html',
  styleUrls: ['./assets-rec-admin-list.component.scss']
})
export class AssetsRecAdminListComponent  {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
