import { Component, OnInit } from '@angular/core'; 
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-q-accumulated-goods-list',
  templateUrl: './q-accumulated-goods-list.component.html',
  styleUrls: ['./q-accumulated-goods-list.component.scss']
})
export class QAccumulatedGoodsListComponent  {
  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
