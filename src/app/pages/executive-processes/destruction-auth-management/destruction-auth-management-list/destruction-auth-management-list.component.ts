import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-destruction-auth-management-list',
  templateUrl: './destruction-auth-management-list.component.html',
  styleUrls: ['./destruction-auth-management-list.component.scss']
})
export class DestructionAuthManagementListComponent  {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
