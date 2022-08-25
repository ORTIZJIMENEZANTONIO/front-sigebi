import { Component, OnInit } from '@angular/core'; 
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-total-doc-received-list',
  templateUrl: './total-doc-received-list.component.html',
  styleUrls: ['./total-doc-received-list.component.scss']
})
export class TotalDocReceivedListComponent  {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
