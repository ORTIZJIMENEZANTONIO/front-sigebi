import { Component, OnInit } from '@angular/core'; 
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-donation-approval-list',
  templateUrl: './donation-approval-list.component.html',
  styleUrls: ['./donation-approval-list.component.scss']
})
export class DonationApprovalListComponent  {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
