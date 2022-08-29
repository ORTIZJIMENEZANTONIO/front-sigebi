import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({ 
  selector: 'ngx-approval-destination-list',
  templateUrl: './approval-destination-list.component.html',
  styleUrls: ['./approval-destination-list.component.scss']
})
export class ApprovalDestinationListComponent  {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
