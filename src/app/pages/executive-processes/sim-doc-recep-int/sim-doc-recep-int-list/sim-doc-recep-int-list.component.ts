import { Component, OnInit } from '@angular/core'; 
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-sim-doc-recep-int-list',
  templateUrl: './sim-doc-recep-int-list.component.html',
  styleUrls: ['./sim-doc-recep-int-list.component.scss']
})
export class SimDocRecepIntListComponent  {
  
  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
