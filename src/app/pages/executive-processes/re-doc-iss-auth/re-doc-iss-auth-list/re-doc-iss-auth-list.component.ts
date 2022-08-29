import { Component, OnInit } from '@angular/core'; 
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-re-doc-iss-auth-list',
  templateUrl: './re-doc-iss-auth-list.component.html',
  styleUrls: ['./re-doc-iss-auth-list.component.scss']
})
export class ReDocIssAuthListComponent  {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
