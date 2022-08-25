import { Component, OnInit } from '@angular/core'; 
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-info-goods-type-subtype-list',
  templateUrl: './info-goods-type-subtype-list.component.html',
  styleUrls: ['./info-goods-type-subtype-list.component.scss']
})
export class InfoGoodsTypeSubtypeListComponent  {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
